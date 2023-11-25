import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractService <T, N> {

  url: string = "https://api.magicthegathering.io/v1/cards";

  abstract listar(): Observable<T>;

  abstract buscar(id: string): Observable<T>;

  abstract criar(objeto: T): Observable<T>;

  abstract atualizar(objeto: T): Observable<T>;

  abstract deletar(id: N): void;
}
