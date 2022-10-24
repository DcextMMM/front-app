import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../services/pedidos/pedidos.service';

@Component({
  selector: 'app-meus-pedidos',
  templateUrl: './meus-pedidos.page.html',
  styleUrls: ['./meus-pedidos.page.scss'],
})
export class MeusPedidosPage implements OnInit {
  public data: [];
  constructor(private service: PedidosService) { }

  trackItems(index: number, itemObject: any) {
    return itemObject.name;
  }

  ngOnInit() {
    this.service.listRequests().subscribe(resp => {
      this.data = resp;
     }, error => {
      console.log(error);
    });
  }

}
