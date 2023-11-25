import {Component, OnInit} from '@angular/core';
import {CardServiceService} from "../services/card-service.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public cards: any[] = [];
  constructor(
    private httpService: CardServiceService
  ) {}



  getCards(){
    this.httpService.getCards()
      .subscribe((data: any) => this.cards = data)
  }

  ngOnInit(): void {
    this.getCards()
  }

}
