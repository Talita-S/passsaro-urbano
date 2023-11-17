import { Component } from '@angular/core';
import { OffersService } from '../offers.service';
import { Offer } from '../shared/offer.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OffersService],
})
export class HomeComponent {
  public offers: Offer[] = [];

  constructor(private offersService: OffersService) {}

  ngOnInit() {
    this.offersService
      .getOffers()
      .then((offers: Offer[]) => {
        this.offers = offers;
      })
      .catch((param: any) => {
        console.log(param);
      });
  }
}
