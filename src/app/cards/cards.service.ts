import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {Card, ModelCard, ModelCardSingle} from "../shared/model";
import {HttpClient} from "@angular/common/http";
import {AbstractService} from "./abstract.service";


@Injectable()
export class CardsService extends AbstractService<ModelCard, number>{
  constructor(private http: HttpClient) {
    super();
  }

  listar(): Observable<ModelCard> {
    return this.http.get<ModelCard>(this.url);
  }

  buscar(id: string): Observable<ModelCard> {
    const httpCall = this.http.get<Card>(`${this.url}/${id}`);

    return httpCall.pipe(
      map((card: Card) => {
        const modelCard: ModelCard = {
          cards: [card]
        };
        return modelCard;
      })
    );
  }

  buscarCard(id: string): Observable<ModelCardSingle> {
    console.log(`${this.url}/${id}`);
    return this.http.get<ModelCardSingle>(`${this.url}/${id}`);
  }

  criar(objeto: ModelCard): Observable<ModelCard> {
    return this.http.post<ModelCard>(this.url, objeto);
  }
  atualizar(objeto: ModelCard): Observable<ModelCard> {
    return this.http.post<ModelCard>(this.url, objeto);
  }

  deletar(id: number): void {
    this.http.delete(`${this.url}/${id}`);
  }
}
