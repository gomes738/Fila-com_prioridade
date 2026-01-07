import { PriorityQueue } from "./FilaPrioridade";

const fila = new PriorityQueue<string>(5);

fila.inserir("Paciente A", 3);
fila.inserir("Paciente B", 5);
fila.inserir("Paciente C", 1);
fila.inserir("Paciente D", 4);

console.log(fila.proximo()); // Paciente B
console.log(fila.remover()); // Paciente B
console.log(fila.remover()); // Paciente D
console.log(fila.quantidade()); // 2
