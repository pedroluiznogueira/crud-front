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
    let obs: Observable<Produto[]> = this.http.get<Produto[]>("http://localhost:8080/produto");
    
    // fazer algo com o Observable
    obs.subscribe(
      // quero fazer isso com o conteúdo do observable
      // o conteúdo do observable só está disponível dentro do escopo de subscribe
      (resultado) => {}
    );
    
    return obs;
  }

  receberProduto(produto: Produto): void {
    console.log(produto)
    this.http.post<Produto>("http://localhost:8080/produto/criar", produto).subscribe(
      (resultado) => {
        console.log("Este produto foi enviado: " + resultado);
      }
    );
  }
}
