"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(req, res) {
    var _a = req.query.name, name = _a === void 0 ? 'World' : _a;
    res.send("Hello " + name + "!");
}
exports.default = default_1;
module.exports = function (req, res) {
    var who = 'anonymous';
    if (req.body && req.body.who) {
        who = req.body.who;
    }
    else if (req.query.who) {
        who = req.query.who;
    }
    else if (req.cookies.who) {
        who = req.cookies.who;
    }
    res.status(200).send("Hello " + who + "!");
};
//# sourceMappingURL=coba.js.map