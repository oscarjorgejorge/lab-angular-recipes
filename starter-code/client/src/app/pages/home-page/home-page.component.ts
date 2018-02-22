import { Component, OnInit } from '@angular/core';

import { DishesService} from '../../services/dishes.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  dishes: any;

  constructor(private dishesService: DishesService) { }

  ngOnInit() {
    this.dishesService.getList()
    .then((dishes) => this.dishes = dishes);
  }

}
