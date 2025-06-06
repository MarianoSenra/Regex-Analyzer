// Generated from grammars/Regex.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import RegexListener from './RegexListener.js';
import RegexVisitor from './RegexVisitor.js';

const serializedATN = [4,1,19,91,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,0,1,0,
3,0,28,8,0,1,1,4,1,31,8,1,11,1,12,1,32,1,2,1,2,3,2,37,8,2,1,3,1,3,1,3,3,
3,42,8,3,1,4,1,4,1,4,1,4,1,5,1,5,3,5,50,8,5,1,5,4,5,53,8,5,11,5,12,5,54,
1,5,1,5,1,6,1,6,3,6,61,8,6,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,
8,74,8,8,3,8,76,8,8,1,8,1,8,3,8,80,8,8,1,9,4,9,83,8,9,11,9,12,9,84,1,10,
1,10,1,11,1,11,1,11,0,0,12,0,2,4,6,8,10,12,14,16,18,20,22,0,2,2,0,14,14,
17,17,1,0,15,16,92,0,24,1,0,0,0,2,30,1,0,0,0,4,34,1,0,0,0,6,41,1,0,0,0,8,
43,1,0,0,0,10,47,1,0,0,0,12,60,1,0,0,0,14,62,1,0,0,0,16,79,1,0,0,0,18,82,
1,0,0,0,20,86,1,0,0,0,22,88,1,0,0,0,24,27,3,2,1,0,25,26,5,1,0,0,26,28,3,
0,0,0,27,25,1,0,0,0,27,28,1,0,0,0,28,1,1,0,0,0,29,31,3,4,2,0,30,29,1,0,0,
0,31,32,1,0,0,0,32,30,1,0,0,0,32,33,1,0,0,0,33,3,1,0,0,0,34,36,3,6,3,0,35,
37,3,16,8,0,36,35,1,0,0,0,36,37,1,0,0,0,37,5,1,0,0,0,38,42,3,20,10,0,39,
42,3,8,4,0,40,42,3,10,5,0,41,38,1,0,0,0,41,39,1,0,0,0,41,40,1,0,0,0,42,7,
1,0,0,0,43,44,5,2,0,0,44,45,3,0,0,0,45,46,5,3,0,0,46,9,1,0,0,0,47,49,5,4,
0,0,48,50,5,11,0,0,49,48,1,0,0,0,49,50,1,0,0,0,50,52,1,0,0,0,51,53,3,12,
6,0,52,51,1,0,0,0,53,54,1,0,0,0,54,52,1,0,0,0,54,55,1,0,0,0,55,56,1,0,0,
0,56,57,5,5,0,0,57,11,1,0,0,0,58,61,3,22,11,0,59,61,3,14,7,0,60,58,1,0,0,
0,60,59,1,0,0,0,61,13,1,0,0,0,62,63,3,22,11,0,63,64,5,12,0,0,64,65,3,22,
11,0,65,15,1,0,0,0,66,80,5,8,0,0,67,80,5,9,0,0,68,80,5,10,0,0,69,70,5,6,
0,0,70,75,3,18,9,0,71,73,5,13,0,0,72,74,3,18,9,0,73,72,1,0,0,0,73,74,1,0,
0,0,74,76,1,0,0,0,75,71,1,0,0,0,75,76,1,0,0,0,76,77,1,0,0,0,77,78,5,7,0,
0,78,80,1,0,0,0,79,66,1,0,0,0,79,67,1,0,0,0,79,68,1,0,0,0,79,69,1,0,0,0,
80,17,1,0,0,0,81,83,5,18,0,0,82,81,1,0,0,0,83,84,1,0,0,0,84,82,1,0,0,0,84,
85,1,0,0,0,85,19,1,0,0,0,86,87,7,0,0,0,87,21,1,0,0,0,88,89,7,1,0,0,89,23,
1,0,0,0,11,27,32,36,41,49,54,60,73,75,79,84];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class RegexParser extends antlr4.Parser {

    static grammarFileName = "Regex.g4";
    static literalNames = [ null, "'|'", "'('", "')'", "'['", "']'", "'{'", 
                            "'}'", "'*'", "'+'", "'?'", "'^'", "'-'", "','" ];
    static symbolicNames = [ null, "PIPE", "LPAREN", "RPAREN", "LBRACK", 
                             "RBRACK", "LBRACE", "RBRACE", "STAR", "PLUS", 
                             "QUESTION", "CARET", "HYPHEN", "COMMA", "ESCAPED_CHAR", 
                             "CLASS_ESCAPE", "CLASS_CHAR", "CHAR", "DIGIT", 
                             "WS" ];
    static ruleNames = [ "regex", "term", "factor", "base", "group", "class", 
                         "class_item", "range", "quantifier", "number", 
                         "char", "class_char" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = RegexParser.ruleNames;
        this.literalNames = RegexParser.literalNames;
        this.symbolicNames = RegexParser.symbolicNames;
    }



	regex() {
	    let localctx = new RegexContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, RegexParser.RULE_regex);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.term();
	        this.state = 27;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 25;
	            this.match(RegexParser.PIPE);
	            this.state = 26;
	            this.regex();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, RegexParser.RULE_term);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 29;
	            this.factor();
	            this.state = 32; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 147476) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, RegexParser.RULE_factor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.base();
	        this.state = 36;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1856) !== 0)) {
	            this.state = 35;
	            this.quantifier();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	base() {
	    let localctx = new BaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, RegexParser.RULE_base);
	    try {
	        this.state = 41;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	        case 17:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 38;
	            this.char_();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 39;
	            this.group();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 40;
	            this.class_();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	group() {
	    let localctx = new GroupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, RegexParser.RULE_group);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.match(RegexParser.LPAREN);
	        this.state = 44;
	        this.regex();
	        this.state = 45;
	        this.match(RegexParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	class_() {
	    let localctx = new ClassContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, RegexParser.RULE_class);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.match(RegexParser.LBRACK);
	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11) {
	            this.state = 48;
	            this.match(RegexParser.CARET);
	        }

	        this.state = 52; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 51;
	            this.class_item();
	            this.state = 54; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===15 || _la===16);
	        this.state = 56;
	        this.match(RegexParser.RBRACK);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	class_item() {
	    let localctx = new Class_itemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, RegexParser.RULE_class_item);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 58;
	            this.class_char();
	            break;

	        case 2:
	            this.state = 59;
	            this.range();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	range() {
	    let localctx = new RangeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, RegexParser.RULE_range);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.class_char();
	        this.state = 63;
	        this.match(RegexParser.HYPHEN);
	        this.state = 64;
	        this.class_char();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	quantifier() {
	    let localctx = new QuantifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, RegexParser.RULE_quantifier);
	    var _la = 0;
	    try {
	        this.state = 79;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 66;
	            this.match(RegexParser.STAR);
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 67;
	            this.match(RegexParser.PLUS);
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 68;
	            this.match(RegexParser.QUESTION);
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 69;
	            this.match(RegexParser.LBRACE);
	            this.state = 70;
	            this.number();
	            this.state = 75;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===13) {
	                this.state = 71;
	                this.match(RegexParser.COMMA);
	                this.state = 73;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===18) {
	                    this.state = 72;
	                    this.number();
	                }

	            }

	            this.state = 77;
	            this.match(RegexParser.RBRACE);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, RegexParser.RULE_number);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 81;
	            this.match(RegexParser.DIGIT);
	            this.state = 84; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===18);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	char_() {
	    let localctx = new CharContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, RegexParser.RULE_char);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        _la = this._input.LA(1);
	        if(!(_la===14 || _la===17)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	class_char() {
	    let localctx = new Class_charContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, RegexParser.RULE_class_char);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        _la = this._input.LA(1);
	        if(!(_la===15 || _la===16)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

RegexParser.EOF = antlr4.Token.EOF;
RegexParser.PIPE = 1;
RegexParser.LPAREN = 2;
RegexParser.RPAREN = 3;
RegexParser.LBRACK = 4;
RegexParser.RBRACK = 5;
RegexParser.LBRACE = 6;
RegexParser.RBRACE = 7;
RegexParser.STAR = 8;
RegexParser.PLUS = 9;
RegexParser.QUESTION = 10;
RegexParser.CARET = 11;
RegexParser.HYPHEN = 12;
RegexParser.COMMA = 13;
RegexParser.ESCAPED_CHAR = 14;
RegexParser.CLASS_ESCAPE = 15;
RegexParser.CLASS_CHAR = 16;
RegexParser.CHAR = 17;
RegexParser.DIGIT = 18;
RegexParser.WS = 19;

RegexParser.RULE_regex = 0;
RegexParser.RULE_term = 1;
RegexParser.RULE_factor = 2;
RegexParser.RULE_base = 3;
RegexParser.RULE_group = 4;
RegexParser.RULE_class = 5;
RegexParser.RULE_class_item = 6;
RegexParser.RULE_range = 7;
RegexParser.RULE_quantifier = 8;
RegexParser.RULE_number = 9;
RegexParser.RULE_char = 10;
RegexParser.RULE_class_char = 11;

class RegexContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegexParser.RULE_regex;
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	PIPE() {
	    return this.getToken(RegexParser.PIPE, 0);
	};

	regex() {
	    return this.getTypedRuleContext(RegexContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterRegex(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitRegex(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitRegex(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegexParser.RULE_term;
    }

	factor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FactorContext);
	    } else {
	        return this.getTypedRuleContext(FactorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitTerm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegexParser.RULE_factor;
    }

	base() {
	    return this.getTypedRuleContext(BaseContext,0);
	};

	quantifier() {
	    return this.getTypedRuleContext(QuantifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitFactor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitFactor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BaseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegexParser.RULE_base;
    }

	char_() {
	    return this.getTypedRuleContext(CharContext,0);
	};

	group() {
	    return this.getTypedRuleContext(GroupContext,0);
	};

	class_() {
	    return this.getTypedRuleContext(ClassContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterBase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitBase(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitBase(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class GroupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegexParser.RULE_group;
    }

	LPAREN() {
	    return this.getToken(RegexParser.LPAREN, 0);
	};

	regex() {
	    return this.getTypedRuleContext(RegexContext,0);
	};

	RPAREN() {
	    return this.getToken(RegexParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterGroup(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitGroup(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitGroup(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ClassContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegexParser.RULE_class;
    }

	LBRACK() {
	    return this.getToken(RegexParser.LBRACK, 0);
	};

	RBRACK() {
	    return this.getToken(RegexParser.RBRACK, 0);
	};

	CARET() {
	    return this.getToken(RegexParser.CARET, 0);
	};

	class_item = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Class_itemContext);
	    } else {
	        return this.getTypedRuleContext(Class_itemContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterClass(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitClass(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitClass(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Class_itemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegexParser.RULE_class_item;
    }

	class_char() {
	    return this.getTypedRuleContext(Class_charContext,0);
	};

	range() {
	    return this.getTypedRuleContext(RangeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterClass_item(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitClass_item(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitClass_item(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RangeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegexParser.RULE_range;
    }

	class_char = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Class_charContext);
	    } else {
	        return this.getTypedRuleContext(Class_charContext,i);
	    }
	};

	HYPHEN() {
	    return this.getToken(RegexParser.HYPHEN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterRange(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitRange(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitRange(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class QuantifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegexParser.RULE_quantifier;
    }

	STAR() {
	    return this.getToken(RegexParser.STAR, 0);
	};

	PLUS() {
	    return this.getToken(RegexParser.PLUS, 0);
	};

	QUESTION() {
	    return this.getToken(RegexParser.QUESTION, 0);
	};

	LBRACE() {
	    return this.getToken(RegexParser.LBRACE, 0);
	};

	number = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NumberContext);
	    } else {
	        return this.getTypedRuleContext(NumberContext,i);
	    }
	};

	RBRACE() {
	    return this.getToken(RegexParser.RBRACE, 0);
	};

	COMMA() {
	    return this.getToken(RegexParser.COMMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterQuantifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitQuantifier(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitQuantifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegexParser.RULE_number;
    }

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RegexParser.DIGIT);
	    } else {
	        return this.getToken(RegexParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitNumber(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CharContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegexParser.RULE_char;
    }

	CHAR() {
	    return this.getToken(RegexParser.CHAR, 0);
	};

	ESCAPED_CHAR() {
	    return this.getToken(RegexParser.ESCAPED_CHAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterChar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitChar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitChar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Class_charContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegexParser.RULE_class_char;
    }

	CLASS_ESCAPE() {
	    return this.getToken(RegexParser.CLASS_ESCAPE, 0);
	};

	CLASS_CHAR() {
	    return this.getToken(RegexParser.CLASS_CHAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterClass_char(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitClass_char(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitClass_char(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




RegexParser.RegexContext = RegexContext; 
RegexParser.TermContext = TermContext; 
RegexParser.FactorContext = FactorContext; 
RegexParser.BaseContext = BaseContext; 
RegexParser.GroupContext = GroupContext; 
RegexParser.ClassContext = ClassContext; 
RegexParser.Class_itemContext = Class_itemContext; 
RegexParser.RangeContext = RangeContext; 
RegexParser.QuantifierContext = QuantifierContext; 
RegexParser.NumberContext = NumberContext; 
RegexParser.CharContext = CharContext; 
RegexParser.Class_charContext = Class_charContext; 
