"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculoBase_1 = __importDefault(require("./calculoBase"));
class Subtracao extends calculoBase_1.default {
    calcular() {
        return this.numero1 - this.numero2;
    }
}
exports.default = Subtracao;
