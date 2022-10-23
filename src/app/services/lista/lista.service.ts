import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Lista } from './lista';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListaService {


  private readonly api = `${environment.api}products`;
  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Lista[]>(this.api).pipe(tap());
  }
}
