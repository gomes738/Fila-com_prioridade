"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityQueue = void 0;
var Prioridade;
(function (Prioridade) {
    Prioridade[Prioridade["MUITO_BAIXA"] = 1] = "MUITO_BAIXA";
    Prioridade[Prioridade["BAIXA"] = 2] = "BAIXA";
    Prioridade[Prioridade["NORMAL"] = 3] = "NORMAL";
    Prioridade[Prioridade["ALTA"] = 4] = "ALTA";
    Prioridade[Prioridade["MUITO_ALTA"] = 5] = "MUITO_ALTA";
})(Prioridade || (Prioridade = {}));
class PriorityQueue {
    constructor(capacidadeMaxima) {
        this.filas = new Map();
        this.capacidadeMaxima = capacidadeMaxima;
        for (let p = 1; p <= 5; p++) {
            this.filas.set(p, []);
        }
    }
    inserir(elemento, prioridade) {
        if (this.estaCheia()) {
            throw new Error("Fila cheia");
        }
        this.filas.get(prioridade).push(elemento);
        return true;
    }
    remover() {
        if (this.estaVazia()) {
            throw new Error("Fila vazia");
        }
        for (let p = 5; p >= 1; p--) {
            const fila = this.filas.get(p);
            if (fila.length > 0) {
                return fila.shift();
            }
        }
        throw new Error("Erro inesperado");
    }
    proximo() {
        if (this.estaVazia()) {
            throw new Error("Fila vazia");
        }
        for (let p = 5; p >= 1; p--) {
            const fila = this.filas.get(p);
            if (fila.length > 0) {
                return fila[0];
            }
        }
        throw new Error("Erro inesperado");
    }
    estaVazia() {
        return this.quantidade() === 0;
    }
    estaCheia() {
        return this.quantidade() >= this.capacidadeMaxima;
    }
    quantidade() {
        let total = 0;
        for (const fila of this.filas.values()) {
            total += fila.length;
        }
        return total;
    }
    limpar() {
        for (const fila of this.filas.values()) {
            fila.length = 0;
        }
    }
}
exports.PriorityQueue = PriorityQueue;
