// Generated from c:/Users/Mariano/regex-analyzer/grammars/Regex.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class RegexParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		PIPE=1, LPAREN=2, RPAREN=3, LBRACK=4, RBRACK=5, LBRACE=6, RBRACE=7, STAR=8, 
		PLUS=9, QUESTION=10, CARET=11, HYPHEN=12, COMMA=13, ESCAPED_CHAR=14, CLASS_ESCAPE=15, 
		CLASS_CHAR=16, CHAR=17, DIGIT=18, WS=19;
	public static final int
		RULE_regex = 0, RULE_term = 1, RULE_factor = 2, RULE_base = 3, RULE_group = 4, 
		RULE_class = 5, RULE_class_item = 6, RULE_range = 7, RULE_quantifier = 8, 
		RULE_number = 9, RULE_char = 10, RULE_class_char = 11;
	private static String[] makeRuleNames() {
		return new String[] {
			"regex", "term", "factor", "base", "group", "class", "class_item", "range", 
			"quantifier", "number", "char", "class_char"
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

	@Override
	public String getGrammarFileName() { return "Regex.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public RegexParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class RegexContext extends ParserRuleContext {
		public TermContext term() {
			return getRuleContext(TermContext.class,0);
		}
		public TerminalNode PIPE() { return getToken(RegexParser.PIPE, 0); }
		public RegexContext regex() {
			return getRuleContext(RegexContext.class,0);
		}
		public RegexContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_regex; }
	}

	public final RegexContext regex() throws RecognitionException {
		RegexContext _localctx = new RegexContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_regex);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(24);
			term();
			setState(27);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==PIPE) {
				{
				setState(25);
				match(PIPE);
				setState(26);
				regex();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TermContext extends ParserRuleContext {
		public List<FactorContext> factor() {
			return getRuleContexts(FactorContext.class);
		}
		public FactorContext factor(int i) {
			return getRuleContext(FactorContext.class,i);
		}
		public TermContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_term; }
	}

	public final TermContext term() throws RecognitionException {
		TermContext _localctx = new TermContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_term);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(30); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(29);
				factor();
				}
				}
				setState(32); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 147476L) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FactorContext extends ParserRuleContext {
		public BaseContext base() {
			return getRuleContext(BaseContext.class,0);
		}
		public QuantifierContext quantifier() {
			return getRuleContext(QuantifierContext.class,0);
		}
		public FactorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_factor; }
	}

	public final FactorContext factor() throws RecognitionException {
		FactorContext _localctx = new FactorContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_factor);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(34);
			base();
			setState(36);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1856L) != 0)) {
				{
				setState(35);
				quantifier();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BaseContext extends ParserRuleContext {
		public CharContext char_() {
			return getRuleContext(CharContext.class,0);
		}
		public GroupContext group() {
			return getRuleContext(GroupContext.class,0);
		}
		public ClassContext class_() {
			return getRuleContext(ClassContext.class,0);
		}
		public BaseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_base; }
	}

	public final BaseContext base() throws RecognitionException {
		BaseContext _localctx = new BaseContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_base);
		try {
			setState(41);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ESCAPED_CHAR:
			case CHAR:
				enterOuterAlt(_localctx, 1);
				{
				setState(38);
				char_();
				}
				break;
			case LPAREN:
				enterOuterAlt(_localctx, 2);
				{
				setState(39);
				group();
				}
				break;
			case LBRACK:
				enterOuterAlt(_localctx, 3);
				{
				setState(40);
				class_();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class GroupContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(RegexParser.LPAREN, 0); }
		public RegexContext regex() {
			return getRuleContext(RegexContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(RegexParser.RPAREN, 0); }
		public GroupContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_group; }
	}

	public final GroupContext group() throws RecognitionException {
		GroupContext _localctx = new GroupContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_group);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(43);
			match(LPAREN);
			setState(44);
			regex();
			setState(45);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ClassContext extends ParserRuleContext {
		public TerminalNode LBRACK() { return getToken(RegexParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(RegexParser.RBRACK, 0); }
		public TerminalNode CARET() { return getToken(RegexParser.CARET, 0); }
		public List<Class_itemContext> class_item() {
			return getRuleContexts(Class_itemContext.class);
		}
		public Class_itemContext class_item(int i) {
			return getRuleContext(Class_itemContext.class,i);
		}
		public ClassContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_class; }
	}

	public final ClassContext class_() throws RecognitionException {
		ClassContext _localctx = new ClassContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_class);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(47);
			match(LBRACK);
			setState(49);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CARET) {
				{
				setState(48);
				match(CARET);
				}
			}

			setState(52); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(51);
				class_item();
				}
				}
				setState(54); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==CLASS_ESCAPE || _la==CLASS_CHAR );
			setState(56);
			match(RBRACK);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Class_itemContext extends ParserRuleContext {
		public Class_charContext class_char() {
			return getRuleContext(Class_charContext.class,0);
		}
		public RangeContext range() {
			return getRuleContext(RangeContext.class,0);
		}
		public Class_itemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_class_item; }
	}

	public final Class_itemContext class_item() throws RecognitionException {
		Class_itemContext _localctx = new Class_itemContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_class_item);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(60);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				{
				setState(58);
				class_char();
				}
				break;
			case 2:
				{
				setState(59);
				range();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class RangeContext extends ParserRuleContext {
		public List<Class_charContext> class_char() {
			return getRuleContexts(Class_charContext.class);
		}
		public Class_charContext class_char(int i) {
			return getRuleContext(Class_charContext.class,i);
		}
		public TerminalNode HYPHEN() { return getToken(RegexParser.HYPHEN, 0); }
		public RangeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_range; }
	}

	public final RangeContext range() throws RecognitionException {
		RangeContext _localctx = new RangeContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_range);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(62);
			class_char();
			setState(63);
			match(HYPHEN);
			setState(64);
			class_char();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class QuantifierContext extends ParserRuleContext {
		public TerminalNode STAR() { return getToken(RegexParser.STAR, 0); }
		public TerminalNode PLUS() { return getToken(RegexParser.PLUS, 0); }
		public TerminalNode QUESTION() { return getToken(RegexParser.QUESTION, 0); }
		public TerminalNode LBRACE() { return getToken(RegexParser.LBRACE, 0); }
		public List<NumberContext> number() {
			return getRuleContexts(NumberContext.class);
		}
		public NumberContext number(int i) {
			return getRuleContext(NumberContext.class,i);
		}
		public TerminalNode RBRACE() { return getToken(RegexParser.RBRACE, 0); }
		public TerminalNode COMMA() { return getToken(RegexParser.COMMA, 0); }
		public QuantifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_quantifier; }
	}

	public final QuantifierContext quantifier() throws RecognitionException {
		QuantifierContext _localctx = new QuantifierContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_quantifier);
		int _la;
		try {
			setState(79);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STAR:
				enterOuterAlt(_localctx, 1);
				{
				setState(66);
				match(STAR);
				}
				break;
			case PLUS:
				enterOuterAlt(_localctx, 2);
				{
				setState(67);
				match(PLUS);
				}
				break;
			case QUESTION:
				enterOuterAlt(_localctx, 3);
				{
				setState(68);
				match(QUESTION);
				}
				break;
			case LBRACE:
				enterOuterAlt(_localctx, 4);
				{
				setState(69);
				match(LBRACE);
				setState(70);
				number();
				setState(75);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMMA) {
					{
					setState(71);
					match(COMMA);
					setState(73);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==DIGIT) {
						{
						setState(72);
						number();
						}
					}

					}
				}

				setState(77);
				match(RBRACE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NumberContext extends ParserRuleContext {
		public List<TerminalNode> DIGIT() { return getTokens(RegexParser.DIGIT); }
		public TerminalNode DIGIT(int i) {
			return getToken(RegexParser.DIGIT, i);
		}
		public NumberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_number; }
	}

	public final NumberContext number() throws RecognitionException {
		NumberContext _localctx = new NumberContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_number);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(82); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(81);
				match(DIGIT);
				}
				}
				setState(84); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==DIGIT );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CharContext extends ParserRuleContext {
		public TerminalNode CHAR() { return getToken(RegexParser.CHAR, 0); }
		public TerminalNode ESCAPED_CHAR() { return getToken(RegexParser.ESCAPED_CHAR, 0); }
		public CharContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_char; }
	}

	public final CharContext char_() throws RecognitionException {
		CharContext _localctx = new CharContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_char);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(86);
			_la = _input.LA(1);
			if ( !(_la==ESCAPED_CHAR || _la==CHAR) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Class_charContext extends ParserRuleContext {
		public TerminalNode CLASS_ESCAPE() { return getToken(RegexParser.CLASS_ESCAPE, 0); }
		public TerminalNode CLASS_CHAR() { return getToken(RegexParser.CLASS_CHAR, 0); }
		public Class_charContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_class_char; }
	}

	public final Class_charContext class_char() throws RecognitionException {
		Class_charContext _localctx = new Class_charContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_class_char);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(88);
			_la = _input.LA(1);
			if ( !(_la==CLASS_ESCAPE || _la==CLASS_CHAR) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u0013[\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0003\u0000\u001c\b\u0000\u0001\u0001\u0004"+
		"\u0001\u001f\b\u0001\u000b\u0001\f\u0001 \u0001\u0002\u0001\u0002\u0003"+
		"\u0002%\b\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003*\b\u0003"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005"+
		"\u0003\u00052\b\u0005\u0001\u0005\u0004\u00055\b\u0005\u000b\u0005\f\u0005"+
		"6\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0003\u0006=\b\u0006"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0001\b\u0003\bJ\b\b\u0003\bL\b\b\u0001\b\u0001"+
		"\b\u0003\bP\b\b\u0001\t\u0004\tS\b\t\u000b\t\f\tT\u0001\n\u0001\n\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0000\u0000\f\u0000\u0002\u0004\u0006\b"+
		"\n\f\u000e\u0010\u0012\u0014\u0016\u0000\u0002\u0002\u0000\u000e\u000e"+
		"\u0011\u0011\u0001\u0000\u000f\u0010\\\u0000\u0018\u0001\u0000\u0000\u0000"+
		"\u0002\u001e\u0001\u0000\u0000\u0000\u0004\"\u0001\u0000\u0000\u0000\u0006"+
		")\u0001\u0000\u0000\u0000\b+\u0001\u0000\u0000\u0000\n/\u0001\u0000\u0000"+
		"\u0000\f<\u0001\u0000\u0000\u0000\u000e>\u0001\u0000\u0000\u0000\u0010"+
		"O\u0001\u0000\u0000\u0000\u0012R\u0001\u0000\u0000\u0000\u0014V\u0001"+
		"\u0000\u0000\u0000\u0016X\u0001\u0000\u0000\u0000\u0018\u001b\u0003\u0002"+
		"\u0001\u0000\u0019\u001a\u0005\u0001\u0000\u0000\u001a\u001c\u0003\u0000"+
		"\u0000\u0000\u001b\u0019\u0001\u0000\u0000\u0000\u001b\u001c\u0001\u0000"+
		"\u0000\u0000\u001c\u0001\u0001\u0000\u0000\u0000\u001d\u001f\u0003\u0004"+
		"\u0002\u0000\u001e\u001d\u0001\u0000\u0000\u0000\u001f \u0001\u0000\u0000"+
		"\u0000 \u001e\u0001\u0000\u0000\u0000 !\u0001\u0000\u0000\u0000!\u0003"+
		"\u0001\u0000\u0000\u0000\"$\u0003\u0006\u0003\u0000#%\u0003\u0010\b\u0000"+
		"$#\u0001\u0000\u0000\u0000$%\u0001\u0000\u0000\u0000%\u0005\u0001\u0000"+
		"\u0000\u0000&*\u0003\u0014\n\u0000\'*\u0003\b\u0004\u0000(*\u0003\n\u0005"+
		"\u0000)&\u0001\u0000\u0000\u0000)\'\u0001\u0000\u0000\u0000)(\u0001\u0000"+
		"\u0000\u0000*\u0007\u0001\u0000\u0000\u0000+,\u0005\u0002\u0000\u0000"+
		",-\u0003\u0000\u0000\u0000-.\u0005\u0003\u0000\u0000.\t\u0001\u0000\u0000"+
		"\u0000/1\u0005\u0004\u0000\u000002\u0005\u000b\u0000\u000010\u0001\u0000"+
		"\u0000\u000012\u0001\u0000\u0000\u000024\u0001\u0000\u0000\u000035\u0003"+
		"\f\u0006\u000043\u0001\u0000\u0000\u000056\u0001\u0000\u0000\u000064\u0001"+
		"\u0000\u0000\u000067\u0001\u0000\u0000\u000078\u0001\u0000\u0000\u0000"+
		"89\u0005\u0005\u0000\u00009\u000b\u0001\u0000\u0000\u0000:=\u0003\u0016"+
		"\u000b\u0000;=\u0003\u000e\u0007\u0000<:\u0001\u0000\u0000\u0000<;\u0001"+
		"\u0000\u0000\u0000=\r\u0001\u0000\u0000\u0000>?\u0003\u0016\u000b\u0000"+
		"?@\u0005\f\u0000\u0000@A\u0003\u0016\u000b\u0000A\u000f\u0001\u0000\u0000"+
		"\u0000BP\u0005\b\u0000\u0000CP\u0005\t\u0000\u0000DP\u0005\n\u0000\u0000"+
		"EF\u0005\u0006\u0000\u0000FK\u0003\u0012\t\u0000GI\u0005\r\u0000\u0000"+
		"HJ\u0003\u0012\t\u0000IH\u0001\u0000\u0000\u0000IJ\u0001\u0000\u0000\u0000"+
		"JL\u0001\u0000\u0000\u0000KG\u0001\u0000\u0000\u0000KL\u0001\u0000\u0000"+
		"\u0000LM\u0001\u0000\u0000\u0000MN\u0005\u0007\u0000\u0000NP\u0001\u0000"+
		"\u0000\u0000OB\u0001\u0000\u0000\u0000OC\u0001\u0000\u0000\u0000OD\u0001"+
		"\u0000\u0000\u0000OE\u0001\u0000\u0000\u0000P\u0011\u0001\u0000\u0000"+
		"\u0000QS\u0005\u0012\u0000\u0000RQ\u0001\u0000\u0000\u0000ST\u0001\u0000"+
		"\u0000\u0000TR\u0001\u0000\u0000\u0000TU\u0001\u0000\u0000\u0000U\u0013"+
		"\u0001\u0000\u0000\u0000VW\u0007\u0000\u0000\u0000W\u0015\u0001\u0000"+
		"\u0000\u0000XY\u0007\u0001\u0000\u0000Y\u0017\u0001\u0000\u0000\u0000"+
		"\u000b\u001b $)16<IKOT";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}