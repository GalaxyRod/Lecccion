import { Routes } from '@angular/router';
import path from 'path';
import { CarouselComponent } from './body/carousel/carousel.component';
import { RecetasComponent } from './body/recetas/recetas.component';
import { Component } from '@angular/core';

export const routes: Routes = [
    {path: 'Home', component: CarouselComponent},
    {path: 'Platos', component: RecetasComponent},
    {path: '', redirectTo: '/Home', pathMatch: 'full'}
];
