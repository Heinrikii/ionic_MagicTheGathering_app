import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {CardsService} from "../cards.service";
import {Card} from "../../shared/model";

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.page.html',
  styleUrls: ['./cards-list.page.scss'],
})
export class CardsListPage implements OnInit {

  cards!: Card[];

  constructor(private service: CardsService, private navCtrl: NavController) {
  }

  ngOnInit() {
    this.service.listar().subscribe(response => {
      this.cards = response.cards;
      console.log(this.cards);
    })
  }

  irParaCardDetail(id: string) {
    this.navCtrl.navigateForward(`/cards/${id}`);
  }

}
