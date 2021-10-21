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
      (resultado) => {
        console.log(resultado);
      }
    );
    
    return obs;
  }
}
