import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../services/pedidos/pedidos.service';

@Component({
  selector: 'app-minhas-ofertas',
  templateUrl: './minhas-ofertas.page.html',
  styleUrls: ['./minhas-ofertas.page.scss'],
})
export class MinhasOfertasPage implements OnInit {
  public data: [];
  constructor(private service: PedidosService) { }

  trackItems(index: number, itemObject: any) {
    return itemObject.name;
  }

  ngOnInit() {
    this.service.listPedidos().subscribe(resp => {
      this.data = resp;
      console.log(resp);

     }, error => {
      console.log(error);
    });
  }

}
