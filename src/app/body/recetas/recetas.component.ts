import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-recetas',
  imports: [],
  templateUrl: './recetas.component.html',
  styleUrl: './recetas.component.css'
})
export class RecetasComponent {
  data: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .subscribe(
        (response) => {
          this.data = response.meals.slice(0, 10);
        },
        (error) => {
          console.error('Error al obtener los datos:', error);
        }
      );
  }
}
