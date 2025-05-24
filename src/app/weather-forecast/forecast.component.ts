// ...existing imports...
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../weather/weather.service';

@Component({
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherForecastComponent {
  city = '';
  weatherData: any;
  forecastData: any;
  error = '';
  currentDate: string = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    const now = new Date();
    this.currentDate = now.toLocaleDateString('en-US', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
  }

  fetchForecast() {
    if (!this.city) return;
    this.weatherService.getForecast(this.city).subscribe({
      next: (data: any) => {
        this.forecastData = data;
        // You can now use forecastData in your template
      },
      error: (err: any) => {
        this.forecastData = null;
        this.error = 'Forecast not available or API error';
      }
    });
  }
}