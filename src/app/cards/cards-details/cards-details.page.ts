import {Component, OnInit} from '@angular/core';
import {Card, ModelCardSingle} from "../../shared/model";
import {ActivatedRoute} from "@angular/router";
import {CardsService} from "../cards.service";

@Component({
  selector: 'app-cards-details',
  templateUrl: './cards-details.page.html',
  styleUrls: ['./cards-details.page.scss'],
})
export class CardsDetailsPage implements OnInit {
  id: string = "";
  card!: Card;
  modelCardSingle!: ModelCardSingle;
  dataLoaded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private cardsService: CardsService
  ) {
    console.log("deu certo card detail");
  }

  ngOnInit() {
    const idDaRota = this.route.snapshot.paramMap.get('id');

    if (idDaRota !== null) {
      //obtem o valor do parametro cardId da url
      this.id = idDaRota;
      console.log(`id: ${this.id}`);
      this.cardsService.buscarCard(this.id)
        .subscribe(res => {
          this.modelCardSingle = res;
          this.dataLoaded = true;
          console.log(`Dados carregados: ${res}`);
        });
      console.log(this.modelCardSingle);
    }
  }
}
