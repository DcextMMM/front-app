import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Pedidos } from './pedidos';

@Injectable({ providedIn: 'root' })
export class PedidosService {
  public pedidos: Observable<Pedidos>;
    private pedidosSubject: BehaviorSubject<Pedidos>;

    constructor(
        private router: Router,
        private http: HttpClient,
    ) {
      this.pedidosSubject = new BehaviorSubject<Pedidos>(JSON.parse(localStorage.getItem('pedidos')));
      this.pedidos = this.pedidosSubject.asObservable();
    }

    public get pedidosValue(): Pedidos {
        return this.pedidosSubject.value;
    }

    listPedidos() {
      const headers = new Headers();
      const token = localStorage['auth@token'];

      headers.append('Content-Type', 'application/json');
      headers.append('authentication', `${token}`);


      return this.http.get<[]>(`${environment.api}/products`, { headers: {
        authorization: `Bearer ${token}`
      }});
    }

    listRequests() {
      const headers = new Headers();
      const token = localStorage['auth@token'];

      headers.append('Content-Type', 'application/json');
      headers.append('authentication', `${token}`);

      return this.http.get<[]>(`${environment.api}/requests`, { headers: {
        authorization: `Bearer ${token}`
      }});
    }

    register(pedidos: Pedidos) {
      const headers = new Headers();
      const token = localStorage['auth@token'];

      headers.append('Content-Type', 'application/json');
      headers.append('authentication', `${token}`);

      return this.http.post<[]>(`${environment.api}/products`, pedidos, { headers: {
        authorization: `Bearer ${token}`
      }}).subscribe(resp => {
        this.router.navigate(['minhas-ofertas']);
        }, error => {
        console.log(error);
      });
    }

    update(id: number, changes: Pedidos) {
        return this.http.put(`${environment.api}/pedidoss/${id}`, changes)
            .pipe(map(x => {
                // update stored pedidos if the logged in pedidos updated their own record
                if (id === +this.pedidosValue.id) {
                    // update local storage
                    const pedidos = { ...this.pedidosValue, ...changes };
                    localStorage.setItem('pedidos', JSON.stringify(pedidos));

                    // publish updated pedidos to subscribers
                    this.pedidosSubject.next(pedidos);
                }
                return x;
            }));
    }

    delete(id: string) {
        return this.http.delete(`${environment.api}/pedidoss/${id}`)
            .pipe(map(x =>
                // auto logout if the logged in pedidos deleted their own record
                x
            ));
    }
}
