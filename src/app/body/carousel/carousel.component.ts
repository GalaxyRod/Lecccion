import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  image: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .subscribe(
        (response) => {
          this.image = response.meals.slice(0, 10);
          console.log('Datos obtenidos:', this.image);

        },
        (error) => {
          console.error('Error al obtener los datos:', error);
        }
      );
  }
}
