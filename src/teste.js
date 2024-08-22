"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
// Cria uma interface para ler e escrever no terminal
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Função de multiplicação
function multiplicar(a, b) {
    return a * b;
}
// Função de saudação
function saudacao(nome) {
    return "Ol\u00E1 ".concat(nome);
}
// Função para ler uma entrada numérica com validação
function lerNumero(pergunta) {
    return new Promise(function (resolve, reject) {
        rl.question(pergunta, function (input) {
            try {
                var numero = parseFloat(input);
                if (isNaN(numero)) {
                    throw new Error('Entrada inválida. Por favor, insira um número.');
                }
                resolve(numero);
            }
            catch (error) {
                reject(error);
            }
        });
    });
}
// Função para ler uma string com validação
function lerString(pergunta) {
    return new Promise(function (resolve) {
        rl.question(pergunta, function (input) {
            resolve(input.trim());
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var num1, num2, nome, error_1, error_2, resultadoMultiplicacao, mensagemSaudacao, resposta, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 11, 12, 13]);
                    num1 = void 0;
                    num2 = void 0;
                    nome = void 0;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, lerNumero('Digite o primeiro número para multiplicação: ')];
                case 2:
                    num1 = _a.sent();
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1.message);
                    return [3 /*break*/, 4];
                case 4:
                    if (true) return [3 /*break*/, 1];
                    _a.label = 5;
                case 5:
                    _a.trys.push([5, 7, , 8]);
                    return [4 /*yield*/, lerNumero('Digite o segundo número para multiplicação: ')];
                case 6:
                    num2 = _a.sent();
                    return [3 /*break*/, 9];
                case 7:
                    error_2 = _a.sent();
                    console.error(error_2.message);
                    return [3 /*break*/, 8];
                case 8:
                    if (true) return [3 /*break*/, 5];
                    _a.label = 9;
                case 9: return [4 /*yield*/, lerString('Digite seu nome para saudação: ')];
                case 10:
                    // Ler o nome com validação
                    nome = _a.sent();
                    resultadoMultiplicacao = multiplicar(num1, num2);
                    mensagemSaudacao = saudacao(nome);
                    resposta = "Resultado da multiplica\u00E7\u00E3o: ".concat(resultadoMultiplicacao, ", ").concat(mensagemSaudacao);
                    console.log(resposta);
                    return [3 /*break*/, 13];
                case 11:
                    error_3 = _a.sent();
                    console.error('Erro inesperado:', error_3);
                    return [3 /*break*/, 13];
                case 12:
                    rl.close(); // Fecha a interface readline após a execução
                    return [7 /*endfinally*/];
                case 13: return [2 /*return*/];
            }
        });
    });
}
main();
