import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/models/Produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {


  // atributos do produto à ser criado
  nomeProduto?: string;
  descricaoProduto?: string;
  valorProduto?: string;

  // lista vinda do get
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
    this.produtoService.listarProdutos().subscribe(
      // tenho acesso ao conteúdo dentro do Observable
      (listaResultado) => {
        this.listaRecebida = listaResultado;
      }
    );
    console.log(this.listaRecebida);
  }

  // enviar um produto para criar no banco
  enviarProduto(): void {
    let produto: Produto = new Produto();
    console.log(produto);

    produto.nome = this.nomeProduto;
    produto.descricao = this.descricaoProduto;
    produto.valor = this.valorProduto;

    console.log(produto);
  }

}
