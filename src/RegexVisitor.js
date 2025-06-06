class RegexVisitor {
    visitBase(ctx) {
        if (ctx.char()) {
            return this.visit(ctx.char());
        }
        return this.visitChildren(ctx);
    }

    visitChar(ctx) {
        if (ctx.CHAR()) {
            return ctx.CHAR().getText();
        }
        if (ctx.ESCAPED_CHAR()) {
            // Elimina la barra invertida del escape
            return ctx.ESCAPED_CHAR().getText().substring(1);
        }
        return '';
    }
}