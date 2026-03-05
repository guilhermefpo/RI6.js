"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculoBase_1 = __importDefault(require("./calculoBase"));
class Divisao extends calculoBase_1.default {
    calcular() {
        if (this.numero2 === 0)
            throw new Error("Divisão por zero!");
        return this.numero1 / this.numero2;
    }
}
exports.default = Divisao;
