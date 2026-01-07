"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FilaPrioridade_1 = require("./FilaPrioridade");
const fila = new FilaPrioridade_1.PriorityQueue(5);
fila.inserir("Paciente A", 3);
fila.inserir("Paciente B", 5);
fila.inserir("Paciente C", 1);
fila.inserir("Paciente D", 4);
console.log(fila.proximo()); // Paciente B
console.log(fila.remover()); // Paciente B
console.log(fila.remover()); // Paciente D
console.log(fila.quantidade()); // 2
