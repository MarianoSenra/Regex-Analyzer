const antlr4 = require('antlr4');
const fs = require('fs');
const path = require('path');

// Utilidad para obtener la clase exportada correctamente
function getAntlrClass(module, className) {
    if (module[className]) return module[className];
    if (typeof module === 'function') return module;
    if (module.default && typeof module.default === 'function') return module.default;
    throw new Error(`No se pudo encontrar la clase ${className}`);
}

const RegexLexerModule = require('./generated/RegexLexer');
const RegexParserModule = require('./generated/RegexParser');
const RegexLexer = getAntlrClass(RegexLexerModule, 'RegexLexer');
const RegexParser = getAntlrClass(RegexParserModule, 'RegexParser');
const RegexVisitorModule = require('./RegexVisitor');
const RegexVisitor = RegexVisitorModule.default || RegexVisitorModule;

const ErrorListener = antlr4.error && antlr4.error.ErrorListener
    ? antlr4.error.ErrorListener
    : (antlr4.ErrorListener || (() => { throw new Error('No se encontró ErrorListener en antlr4'); }));

const inputFile = process.argv[2] || path.join(__dirname, '../input/correcto1.txt');
if (!fs.existsSync(inputFile)) {
    console.error(`Archivo de entrada no encontrado: ${inputFile}`);
    process.exit(1);
}
const input = fs.readFileSync(inputFile, 'utf-8');

const chars = new antlr4.InputStream(input);
const lexer = new RegexLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new RegexParser(tokens);

class CustomErrorListener extends ErrorListener {
    syntaxError(recognizer, offendingSymbol, line, col, msg, err) {
        throw new Error(`❌ ERROR en línea ${line}:${col} - ${msg.replace(/'<EOF>'/, 'fin de entrada')}`);
    }
}

lexer.removeErrorListeners();
parser.removeErrorListeners();
lexer.addErrorListener(new CustomErrorListener());
parser.addErrorListener(new CustomErrorListener());

try {
    // Análisis sintáctico
    const tree = parser.regex();

    // 1. Tabla de tokens
    console.log("\n=== TABLA DE TOKENS ===");
    tokens.tokens.forEach(token => {
        if (token.type !== -1) {
            const tokenName = lexer.symbolicNames
                ? lexer.symbolicNames[token.type] || (lexer.literalNames && lexer.literalNames[token.type]) || token.type
                : token.type;
            console.log(`${String(tokenName).padEnd(15)}: '${token.text}'`);
        }
    });

    // 2. Árbol sintáctico
    console.log("\n=== ÁRBOL SINTÁCTICO ===");
    if (!tree) {
        console.warn("No se generó el árbol sintáctico (tree es undefined o null).");
    } else if (typeof tree.toStringTree === 'function' && parser.ruleNames) {
        console.log(tree.toStringTree(parser.ruleNames, parser));
    } else if (typeof tree.toStringTree === 'function') {
        console.warn("parser.ruleNames no está definido. Mostrando árbol sin nombres de reglas.");
        console.log(tree.toStringTree());
    } else if (typeof tree.toString === 'function') {
        console.warn("tree.toStringTree no está disponible. Mostrando tree.toString().");
        console.log(tree.toString());
    } else {
        console.warn("No se puede mostrar el árbol sintáctico. tree:", tree);
    }

    // 3. Traducción a JavaScript
    const visitor = new RegexVisitor();
    const jsRegex = visitor.visit(tree);
    console.log("\n=== TRADUCCIÓN JAVASCRIPT ===");
    console.log(`const regex = /${jsRegex}/;`);
    console.log("\n✅ Análisis completado con éxito");

} catch (e) {
    console.error(e.message || e);
    process.exit(1);
}