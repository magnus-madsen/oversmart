var esprima = require('esprima');

function go(g) {
    var ast = esprima.parseScript(g.toString());
    var name = getParamName(ast);

    if (name === "add") {
        return map(this, x => x + g());
    }

    if (name === "mul") {
        return map(this, x => x * g());
    }

    if (name === "map") {
        return map(this, g);
    }

    if (name === "flatMap") {
        return flatMap(this, g);
    }

    throw new Error("Unknown function: " + name)
}

function map(a, g) {
    return a.map(g)
}

function flatMap(a, g) {
    return [].concat.apply([], a.map(g))
}

function getParamName(ast) {
    return ast.body[0].expression.params[0].name;
}

Object.prototype.go = go;

module.exports = "This is so smart it does not need to export anything.";
