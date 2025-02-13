import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarouselComponent } from './body/carousel/carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { InfoComponent } from './head/info/info.component';
import { MenuComponent } from './body/menu/menu.component';
import { RecetasComponent } from './body/recetas/recetas.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CarouselComponent, HttpClientModule,InfoComponent,MenuComponent, RecetasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Leccion';
}
