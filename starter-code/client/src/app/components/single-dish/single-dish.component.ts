import { Component, OnInit } from '@angular/core';

import { DishesService} from '../../services/dishes.service';
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-single-dish',
  templateUrl: './single-dish.component.html',
  styleUrls: ['./single-dish.component.css']
})
export class SingleDishComponent implements OnInit {
singleDish: object;
dishId: string;

  constructor(private dishesService: DishesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
    .subscribe(params => this.dishId = params['id']);

    this.dishesService.getSingle(this.dishId)
    .then(singleDish => this.singleDish = singleDish);
  }

}
