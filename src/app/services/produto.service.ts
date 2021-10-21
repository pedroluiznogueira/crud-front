import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  listaProdutos: Produto[] = [];

  constructor(
    private http: HttpClient
  ) { }

  listarProdutos(): Observable<Produto[]> {
    // realizar uma requisição get
    return this.http.get<Produto[]>("http://localhost:8080/produto");
  }
}
