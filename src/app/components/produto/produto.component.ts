import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/Produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  listaRecebida?: Produto[];

  // injetar o serviço aqui
  constructor(
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
    this.receberListaProdutos();
  }

  // fazer com que a lista chegue aqui
  receberListaProdutos(): void {
    // armazenar a lista vinda do serviço
    
    console.log(this.listaRecebida);
  }

}
