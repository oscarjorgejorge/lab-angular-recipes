import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

import { DishesListComponent } from './components/dishes-list/dishes-list.component';

import { DishesService } from './services/dishes.service';
import { SingleDishComponent } from 'app/components/single-dish/single-dish.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'single-dish/:id', component: SingleDishComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DishesListComponent,
    SingleDishComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DishesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
