import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  // injetar o serviço aqui
  constructor(
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {}

  // fazer com que a lista chegue aqui

}
