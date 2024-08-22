"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function mul(a, b) {
    return a * b;
}
function saudacao(nome) {
    return `Olá ${nome}`;
}
function lerNumero(pergunta) {
    return new Promise((resolve, reject) => {
        rl.question(pergunta, (input) => {
            try {
                const numero = parseFloat(input);
                if (isNaN(numero)) {
                    throw new Error('Por favor insira uma entrada valida.');
                }
                resolve(numero);
            }
            catch (error) {
                reject(error);
            }
        });
    });
}
function lerString(pergunta) {
    return new Promise((resolve) => {
        rl.question(pergunta, (input) => {
            resolve(input.trim());
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let num1;
            let num2;
            let nome;
            do {
                try {
                    num1 = yield lerNumero('Entre com o valor A: ');
                    break;
                }
                catch (error) {
                    if (error instanceof Error) {
                        console.error(error.message);
                    }
                    else {
                        console.error('Erro desconhecido:', error);
                    }
                }
            } while (true);
            do {
                try {
                    num2 = yield lerNumero('Entre com o Valor B: ');
                    break;
                }
                catch (error) {
                    if (error instanceof Error) {
                        console.error(error.message);
                    }
                    else {
                        console.error('Erro desconhecido:', error);
                    }
                }
            } while (true);
            nome = yield lerString('Insira Seu Nome: ');
            const resultadoMultiplicacao = mul(num1, num2);
            const mensagemSaudacao = saudacao(nome);
            const resposta = `O Resultado da multiplicação é: ${resultadoMultiplicacao}, ${mensagemSaudacao}`;
            console.log(resposta);
        }
        catch (error) {
            if (error instanceof Error) {
                console.error('Erro inesperado:', error.message);
            }
            else {
                console.error('Erro inesperado:', error);
            }
        }
        finally {
            rl.close();
        }
    });
}
main();
