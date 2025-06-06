// Generated from grammars/Regex.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,19,84,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,1,0,1,0,1,
1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,
10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,13,1,14,1,14,1,14,1,15,1,15,1,16,
1,16,1,17,1,17,1,18,4,18,79,8,18,11,18,12,18,80,1,18,1,18,0,0,19,1,1,3,2,
5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,
33,17,35,18,37,19,1,0,4,2,0,45,45,92,93,4,0,40,43,63,63,92,92,123,125,1,
0,48,57,3,0,9,10,13,13,32,32,84,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,
1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,
0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,
0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,1,39,1,0,0,0,3,
41,1,0,0,0,5,43,1,0,0,0,7,45,1,0,0,0,9,47,1,0,0,0,11,49,1,0,0,0,13,51,1,
0,0,0,15,53,1,0,0,0,17,55,1,0,0,0,19,57,1,0,0,0,21,59,1,0,0,0,23,61,1,0,
0,0,25,63,1,0,0,0,27,65,1,0,0,0,29,68,1,0,0,0,31,71,1,0,0,0,33,73,1,0,0,
0,35,75,1,0,0,0,37,78,1,0,0,0,39,40,5,124,0,0,40,2,1,0,0,0,41,42,5,40,0,
0,42,4,1,0,0,0,43,44,5,41,0,0,44,6,1,0,0,0,45,46,5,91,0,0,46,8,1,0,0,0,47,
48,5,93,0,0,48,10,1,0,0,0,49,50,5,123,0,0,50,12,1,0,0,0,51,52,5,125,0,0,
52,14,1,0,0,0,53,54,5,42,0,0,54,16,1,0,0,0,55,56,5,43,0,0,56,18,1,0,0,0,
57,58,5,63,0,0,58,20,1,0,0,0,59,60,5,94,0,0,60,22,1,0,0,0,61,62,5,45,0,0,
62,24,1,0,0,0,63,64,5,44,0,0,64,26,1,0,0,0,65,66,5,92,0,0,66,67,9,0,0,0,
67,28,1,0,0,0,68,69,5,92,0,0,69,70,7,0,0,0,70,30,1,0,0,0,71,72,8,0,0,0,72,
32,1,0,0,0,73,74,8,1,0,0,74,34,1,0,0,0,75,76,7,2,0,0,76,36,1,0,0,0,77,79,
7,3,0,0,78,77,1,0,0,0,79,80,1,0,0,0,80,78,1,0,0,0,80,81,1,0,0,0,81,82,1,
0,0,0,82,83,6,18,0,0,83,38,1,0,0,0,2,0,80,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class RegexLexer extends antlr4.Lexer {

    static grammarFileName = "Regex.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'|'", "'('", "')'", "'['", "']'", "'{'", 
                         "'}'", "'*'", "'+'", "'?'", "'^'", "'-'", "','" ];
	static symbolicNames = [ null, "PIPE", "LPAREN", "RPAREN", "LBRACK", "RBRACK", 
                          "LBRACE", "RBRACE", "STAR", "PLUS", "QUESTION", 
                          "CARET", "HYPHEN", "COMMA", "ESCAPED_CHAR", "CLASS_ESCAPE", 
                          "CLASS_CHAR", "CHAR", "DIGIT", "WS" ];
	static ruleNames = [ "PIPE", "LPAREN", "RPAREN", "LBRACK", "RBRACK", "LBRACE", 
                      "RBRACE", "STAR", "PLUS", "QUESTION", "CARET", "HYPHEN", 
                      "COMMA", "ESCAPED_CHAR", "CLASS_ESCAPE", "CLASS_CHAR", 
                      "CHAR", "DIGIT", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

RegexLexer.EOF = antlr4.Token.EOF;
RegexLexer.PIPE = 1;
RegexLexer.LPAREN = 2;
RegexLexer.RPAREN = 3;
RegexLexer.LBRACK = 4;
RegexLexer.RBRACK = 5;
RegexLexer.LBRACE = 6;
RegexLexer.RBRACE = 7;
RegexLexer.STAR = 8;
RegexLexer.PLUS = 9;
RegexLexer.QUESTION = 10;
RegexLexer.CARET = 11;
RegexLexer.HYPHEN = 12;
RegexLexer.COMMA = 13;
RegexLexer.ESCAPED_CHAR = 14;
RegexLexer.CLASS_ESCAPE = 15;
RegexLexer.CLASS_CHAR = 16;
RegexLexer.CHAR = 17;
RegexLexer.DIGIT = 18;
RegexLexer.WS = 19;



