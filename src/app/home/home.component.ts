import { Component } from '@angular/core';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OffersService],
})
export class HomeComponent {
  constructor(private offersService: OffersService) {}

  ngOnInit() {
    console.log(this.offersService.getOffers());
  }
}
