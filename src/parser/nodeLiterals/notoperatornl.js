

class NotOperatorNl {
  getNode() {
    return {
      operation: this.lexer().next().value,
      body: this.parseExpression(),
    };
  }
}

module.exports = new NotOperatorNl();
