enum Prioridade {
  MUITO_BAIXA = 1,
  BAIXA,
  NORMAL,
  ALTA,
  MUITO_ALTA
}

export class PriorityQueue<T> {
  private filas: Map<Prioridade, T[]> = new Map();
  private capacidadeMaxima: number;

  constructor(capacidadeMaxima: number) {
    this.capacidadeMaxima = capacidadeMaxima;

    for (let p = 1; p <= 5; p++) {
      this.filas.set(p, []);
    }
  }

  inserir(elemento: T, prioridade: Prioridade): boolean {
    if (this.estaCheia()) {
      throw new Error("Fila cheia");
    }

    this.filas.get(prioridade)!.push(elemento);
    return true;
  }

  remover(): T {
    if (this.estaVazia()) {
      throw new Error("Fila vazia");
    }

    for (let p = 5; p >= 1; p--) {
      const fila = this.filas.get(p)!;
      if (fila.length > 0) {
        return fila.shift()!;
      }
    }

    throw new Error("Erro inesperado");
  }

  proximo(): T {
    if (this.estaVazia()) {
      throw new Error("Fila vazia");
    }

    for (let p = 5; p >= 1; p--) {
      const fila = this.filas.get(p)!;
      if (fila.length > 0) {
        return fila[0];
      }
    }

    throw new Error("Erro inesperado");
  }

  estaVazia(): boolean {
    return this.quantidade() === 0;
  }

  estaCheia(): boolean {
    return this.quantidade() >= this.capacidadeMaxima;
  }

  quantidade(): number {
    let total = 0;
    for (const fila of this.filas.values()) {
      total += fila.length;
    }
    return total;
  }

  limpar(): void {
    for (const fila of this.filas.values()) {
      fila.length = 0;
    }
  }
}
