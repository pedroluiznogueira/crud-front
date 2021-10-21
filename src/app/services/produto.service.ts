import { Injectable } from '@angular/core';
import { Produto } from '../models/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  listaProdutos: Produto[] = [
    {
      id : 1,
      nome : "iphone",
      descricao: "celular caro",
      valor : "100"
    }, 
    {
      id : 2,
      nome : "ipad",
      descricao: "tablet caro",
      valor : "200"
    }
  ];

  constructor() { }

  listarProdutos(): Produto[] {
    // despeja a lista
    return this.listaProdutos;
  }
}
