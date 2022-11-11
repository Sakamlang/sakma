
const KEYWORDS = {
  maan: 'ᱪᱟᱞᱟ', // var
  vad: 'ᱚᱞ', // print
  yadi: 'ᱡᱩᱫᱤ', // if
  atha: 'ᱮᱴᱟᱜ', // else
  satya: 'ᱥᱟᱨᱮ', // true
  asatya: 'ᱜᱟᱞᱛᱤ', // false
  sutra: 'ᱝᱩᱱᱪᱛᱤᱚᱱ', // function
  phala: 'ᱨᱩᱟᱨ', // return
  chakra: 'ᱪᱦᱟᱠᱟ', // forloop
  paryantam: 'ᱡᱟᱦᱟᱸ', // whileloop
  viram: 'ᱨᱟᱯᱩᱫ', // break
  nirdesa: 'ᱞᱟᱭ', // Switch
  yada: 'ᱪᱟᱥ', // Case
  yadabhave: 'ᱫᱮᱝᱟᱩᱞᱛ', // Default
  avahan: 'ᱦᱚᱦᱚ', // Import
};

const SYMBOLS = {
  DBL_QUOTE: '"',
  SGL_QUOTE: "'",
  PERIOD: '.',
  OR: '||',
  AND: '&&',
  BINARY_AND: '&',
  L_THAN: '<',
  G_THAN: '>',
  G_THAN_OR_EQ: '>=',
  L_THAN_OR_EQ: '<=',
  NOT_EQ: '!=',
  EQ: '==',
  ASSIGN: '=',
  PLUS: '+',
  MINUS: '-',
  MULTIPLY: '*',
  DIVIDE: '/',
  REMAINDER: '%',
  L_PAREN: '{',
  R_PAREN: '}',
  COMMA: ',',
  COMMENT: '#',
  L_BRACKET: '(',
  R_BRACKET: ')',
  L_SQ_BRACKET: '[',
  R_SQ_BRACKET: ']',
  STATEMENT_TERMINATOR: ';',
  NEW_LINE: '\n',
  TAB_SPACE: '\t',
  EMPTY_SPACE: ' ',
  EXCLAMATION_POINT: '!',
  PIPE: '|',
  COLON: ':',
};

const LIST = {
  PUNCTUATIONS: [
    SYMBOLS.L_BRACKET,
    SYMBOLS.R_BRACKET,
    SYMBOLS.L_PAREN,
    SYMBOLS.R_PAREN,
    SYMBOLS.STATEMENT_TERMINATOR,
    SYMBOLS.COMMA,
    SYMBOLS.L_SQ_BRACKET,
    SYMBOLS.R_SQ_BRACKET,
    SYMBOLS.COLON,
    SYMBOLS.SGL_QUOTE,
  ],
  OPERATORS: [
    SYMBOLS.PLUS,
    SYMBOLS.MINUS,
    SYMBOLS.MULTIPLY,
    SYMBOLS.DIVIDE,
    SYMBOLS.REMAINDER,
    SYMBOLS.L_THAN,
    SYMBOLS.G_THAN,
    SYMBOLS.EQ,
    SYMBOLS.EXCLAMATION_POINT,
    SYMBOLS.PIPE,
    SYMBOLS.BINARY_AND,
    SYMBOLS.ASSIGN,
  ],
  WHITESPACES: [SYMBOLS.EMPTY_SPACE, SYMBOLS.TAB_SPACE, SYMBOLS.NEW_LINE],
  KEYWORDS: [
    KEYWORDS.maan,
    KEYWORDS.paryantam,
    KEYWORDS.yadi,
    KEYWORDS.vad,
    KEYWORDS.atha,
    KEYWORDS.satya,
    KEYWORDS.asatya,
    KEYWORDS.sutra,
    KEYWORDS.chakra,
    KEYWORDS.phala,
    KEYWORDS.viram,
    KEYWORDS.nirdesa,
    KEYWORDS.yada,
    KEYWORDS.yadabhave,
    KEYWORDS.avahan,
    KEYWORDS.pravar,
  ],
};

const REGEX = {
  DIGIT: /[\u1c50\u1c51\u1c52\u1c53\u1c54\u1c55\u1c56\u1c57\u1c58\u1c59]/i,
  IDENTIFIER: /[\u1c5a\u1c5b\u1c5c\u1c5d\u1c5e\u1c5f\u1c60\u1c61\u1c62\u1c63\u1c64\u1c65\u1c66\u1c67\u1c68\u1c69\u1c6a\u1c6b\u1c6c\u1c6d\u1c6e\u1c6f\u1c70\u1c71\u1c72\u1c73\u1c74\u1c75\u1c76\u1c77\u1c78\u1c79\u1c7a\u1c7b\u1c7c\u1c7d\u1c7e\u1c7f]/i,
};

const constants = {
  KW: KEYWORDS,
  SYM: SYMBOLS,
  LIST: LIST,
  REGEX: REGEX,
  KEYWORD: 'keyword',
  VARIABLE: 'variable',
  STRING: 'string',
  SUCHI: 'suchi',
  SUCHI_ELEM: 'suchiElement',
  NUMBER: 'number',
  PROGRAM: 'program',
  PUNCTUATION: 'punctuation',
  OPERATOR: 'operator',
  GET_maan: 'getmaan',
  CALL_sutra: 'callsutra',
  EXP_PUNC: 'expression_punctuations',
  Extensions: ['ba'],
  NEGATIVE_EXPRESSION: 'negative_exp',
};

module.exports = constants;
