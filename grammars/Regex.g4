grammar Regex;

regex: term (PIPE regex)?;
term: factor+;
factor: base quantifier?;
base: char | group | class;
group: LPAREN regex RPAREN;
class: LBRACK CARET? class_item+ RBRACK;
class_item: (class_char | range);
range: class_char HYPHEN class_char;
quantifier:
	STAR
	| PLUS
	| QUESTION
	| LBRACE number (COMMA number?)? RBRACE;
number: DIGIT+;

char: CHAR | ESCAPED_CHAR;
class_char: (CLASS_ESCAPE | CLASS_CHAR);

PIPE: '|';
LPAREN: '(';
RPAREN: ')';
LBRACK: '[';
RBRACK: ']';
LBRACE: '{';
RBRACE: '}';
STAR: '*';
PLUS: '+';
QUESTION: '?';
CARET: '^';
HYPHEN: '-';
COMMA: ',';

ESCAPED_CHAR: '\\' .;
CLASS_ESCAPE: '\\' [\]\\-];
CLASS_CHAR: ~[\]\\-];
CHAR: ~[|(){}*+?\\];

DIGIT: [0-9];
WS: [ \t\r\n]+ -> skip;