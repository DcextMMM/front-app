import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  perfil() {
    this.router.navigate(['perfil']);
  }

  minhasOfertas() {
    this.router.navigate(['minhas-ofertas']);
  }
  ofertar() {
    this.router.navigate(['ofertar']);
  }

}
