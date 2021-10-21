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

  // instanciando um novo produto
  produto?: Produto = new Produto();

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
  }

  // enviar um produto para criar no banco
  enviarProduto(): void {

    // fazendo o produto chegar aqui 
    this.produto!.nome = this.nomeProduto;
    this.produto!.descricao = this.descricaoProduto;
    this.produto!.valor = this.valorProduto;

    // levar esse produto que chegou aqui para o serviço
    this.produtoService.receberProduto(this.produto!);
  }

}
