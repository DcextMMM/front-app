import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ofertar',
  templateUrl: './ofertar.page.html',
  styleUrls: ['./ofertar.page.scss'],
})
export class OfertarPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  criarOferta() {
    this.router.navigate(['criar-oferta']);
  }
}
