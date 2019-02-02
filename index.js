var esprima = require('esprima');

function smart(g) {
    return function (coll) {
        var ast = esprima.parseScript(g.toString());
        var name = getParamName(ast);

        if (name === "add") {
            return map(coll, x => x + g());
        }

        if (name === "mul") {
            return map(coll, x => x * g());
        }

        if (name === "map") {
            return map(coll, g);
        }

        if (name === "flatMap") {
            return flatMap(coll, g);
        }

        throw new Error("Unknown function: " + name)
    }
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

module.exports = smart;
