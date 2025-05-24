import { Component } from '@angular/core';
import { WeatherService } from './weather/weather.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // ✅ Import this
import { CommonModule } from '@angular/common';


@Component({
    standalone: true, // ✅ Important for standalone setup
    imports: [FormsModule,HttpClientModule,CommonModule], // ✅ Add FormsModule here
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {
  city = '';
  weatherData: any;
  error = '';
  currentDate: string = '';
 
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    const now = new Date();
    this.currentDate = now.toLocaleDateString('en-US', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
  }

  fetchWeather() {
    if (!this.city) return;
    this.weatherService.getWeather(this.city).subscribe({
      next: data => {
        this.weatherData = data;
        this.error = '';
      },
      error: err => {
        this.weatherData = null;
        this.error = 'City not found or API error';
      }
    });
  }
}
