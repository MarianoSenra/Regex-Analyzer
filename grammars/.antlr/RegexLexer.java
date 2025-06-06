// Generated from c:/Users/Mariano/regex-analyzer/grammars/Regex.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class RegexLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		PIPE=1, LPAREN=2, RPAREN=3, LBRACK=4, RBRACK=5, LBRACE=6, RBRACE=7, STAR=8, 
		PLUS=9, QUESTION=10, CARET=11, HYPHEN=12, COMMA=13, ESCAPED_CHAR=14, CLASS_ESCAPE=15, 
		CLASS_CHAR=16, CHAR=17, DIGIT=18, WS=19;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"PIPE", "LPAREN", "RPAREN", "LBRACK", "RBRACK", "LBRACE", "RBRACE", "STAR", 
			"PLUS", "QUESTION", "CARET", "HYPHEN", "COMMA", "ESCAPED_CHAR", "CLASS_ESCAPE", 
			"CLASS_CHAR", "CHAR", "DIGIT", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'|'", "'('", "')'", "'['", "']'", "'{'", "'}'", "'*'", "'+'", 
			"'?'", "'^'", "'-'", "','"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "PIPE", "LPAREN", "RPAREN", "LBRACK", "RBRACK", "LBRACE", "RBRACE", 
			"STAR", "PLUS", "QUESTION", "CARET", "HYPHEN", "COMMA", "ESCAPED_CHAR", 
			"CLASS_ESCAPE", "CLASS_CHAR", "CHAR", "DIGIT", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public RegexLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Regex.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0013T\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002"+
		"\u0012\u0007\u0012\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001"+
		"\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001"+
		"\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001"+
		"\b\u0001\b\u0001\t\u0001\t\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001"+
		"\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000e"+
		"\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011"+
		"\u0001\u0012\u0004\u0012O\b\u0012\u000b\u0012\f\u0012P\u0001\u0012\u0001"+
		"\u0012\u0000\u0000\u0013\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004"+
		"\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017"+
		"\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011#\u0012%\u0013\u0001"+
		"\u0000\u0004\u0002\u0000--\\]\u0004\u0000(+??\\\\{}\u0001\u000009\u0003"+
		"\u0000\t\n\r\r  T\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001"+
		"\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001"+
		"\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000"+
		"\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000"+
		"\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000"+
		"\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000"+
		"\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000"+
		"\u0000\u0000\u001d\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000\u0000"+
		"\u0000\u0000!\u0001\u0000\u0000\u0000\u0000#\u0001\u0000\u0000\u0000\u0000"+
		"%\u0001\u0000\u0000\u0000\u0001\'\u0001\u0000\u0000\u0000\u0003)\u0001"+
		"\u0000\u0000\u0000\u0005+\u0001\u0000\u0000\u0000\u0007-\u0001\u0000\u0000"+
		"\u0000\t/\u0001\u0000\u0000\u0000\u000b1\u0001\u0000\u0000\u0000\r3\u0001"+
		"\u0000\u0000\u0000\u000f5\u0001\u0000\u0000\u0000\u00117\u0001\u0000\u0000"+
		"\u0000\u00139\u0001\u0000\u0000\u0000\u0015;\u0001\u0000\u0000\u0000\u0017"+
		"=\u0001\u0000\u0000\u0000\u0019?\u0001\u0000\u0000\u0000\u001bA\u0001"+
		"\u0000\u0000\u0000\u001dD\u0001\u0000\u0000\u0000\u001fG\u0001\u0000\u0000"+
		"\u0000!I\u0001\u0000\u0000\u0000#K\u0001\u0000\u0000\u0000%N\u0001\u0000"+
		"\u0000\u0000\'(\u0005|\u0000\u0000(\u0002\u0001\u0000\u0000\u0000)*\u0005"+
		"(\u0000\u0000*\u0004\u0001\u0000\u0000\u0000+,\u0005)\u0000\u0000,\u0006"+
		"\u0001\u0000\u0000\u0000-.\u0005[\u0000\u0000.\b\u0001\u0000\u0000\u0000"+
		"/0\u0005]\u0000\u00000\n\u0001\u0000\u0000\u000012\u0005{\u0000\u0000"+
		"2\f\u0001\u0000\u0000\u000034\u0005}\u0000\u00004\u000e\u0001\u0000\u0000"+
		"\u000056\u0005*\u0000\u00006\u0010\u0001\u0000\u0000\u000078\u0005+\u0000"+
		"\u00008\u0012\u0001\u0000\u0000\u00009:\u0005?\u0000\u0000:\u0014\u0001"+
		"\u0000\u0000\u0000;<\u0005^\u0000\u0000<\u0016\u0001\u0000\u0000\u0000"+
		"=>\u0005-\u0000\u0000>\u0018\u0001\u0000\u0000\u0000?@\u0005,\u0000\u0000"+
		"@\u001a\u0001\u0000\u0000\u0000AB\u0005\\\u0000\u0000BC\t\u0000\u0000"+
		"\u0000C\u001c\u0001\u0000\u0000\u0000DE\u0005\\\u0000\u0000EF\u0007\u0000"+
		"\u0000\u0000F\u001e\u0001\u0000\u0000\u0000GH\b\u0000\u0000\u0000H \u0001"+
		"\u0000\u0000\u0000IJ\b\u0001\u0000\u0000J\"\u0001\u0000\u0000\u0000KL"+
		"\u0007\u0002\u0000\u0000L$\u0001\u0000\u0000\u0000MO\u0007\u0003\u0000"+
		"\u0000NM\u0001\u0000\u0000\u0000OP\u0001\u0000\u0000\u0000PN\u0001\u0000"+
		"\u0000\u0000PQ\u0001\u0000\u0000\u0000QR\u0001\u0000\u0000\u0000RS\u0006"+
		"\u0012\u0000\u0000S&\u0001\u0000\u0000\u0000\u0002\u0000P\u0001\u0006"+
		"\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}