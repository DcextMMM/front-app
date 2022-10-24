import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Login, LoginResp } from './login';

@Injectable({ providedIn: 'root' })
export class LoginService {
  public login: Observable<Login>;
  // public resp: Observable<LoginResp>;
    private loginSubject: BehaviorSubject<Login>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.loginSubject = new BehaviorSubject<Login>(JSON.parse(localStorage.getItem('login')));
        this.login = this.loginSubject.asObservable();
    }

    public get loginValue(): Login {
        return this.loginSubject.value;
    }

    userLogin(data: Login) {
        return this.http.post<LoginResp>(`${environment.api}/login`, { ...data }).subscribe(resp => {
          console.log(resp);

          localStorage['auth@token'] = resp.token;
          this.router.navigate(['/perfil']);
         }, error => {
          console.log(error);
        });
    }

    logout() {
        // remove login from local storage and set current login to null
        localStorage.removeItem('login');
        this.loginSubject.next(null);
        this.router.navigate(['/home']);
    }

    register(login: Login) {
        return this.http.post<LoginResp>(`${environment.api}/cadastro`, login).subscribe(resp => {
          this.router.navigate(['/home']);
         }, error => {
          console.log(error);
        });
    }

    update(id: number, changes: Login) {
        return this.http.put(`${environment.api}/logins/${id}`, changes)
            .pipe(map(x => {
                // update stored login if the logged in login updated their own record
                if (id === +this.loginValue.id) {
                    // update local storage
                    const login = { ...this.loginValue, ...changes };
                    localStorage.setItem('login', JSON.stringify(login));

                    // publish updated login to subscribers
                    this.loginSubject.next(login);
                }
                return x;
            }));
    }

    delete(id: string) {
        return this.http.delete(`${environment.api}/logins/${id}`)
            .pipe(map(x => {
                // auto logout if the logged in login deleted their own record
                if (id === this.loginValue.id) {
                    this.logout();
                }
                return x;
            }));
    }
}
