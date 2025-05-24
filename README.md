# WeatherApp

This project is a simple Angular application that displays the current weather and forecast for a searched city using the [OpenWeatherMap API](https://openweathermap.org/api).

## Features

- Search for any city to view its current weather conditions.
- Displays temperature, weather description, and country.
- Shows the current date.
- Fetches and displays a multi-day weather forecast in a table.
- Responsive and user-friendly UI.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [Angular CLI](https://angular.io/cli) (v17+)

## Setup

1. **Clone the repository:**

2. **Install dependencies:**

3. **Configure OpenWeatherMap API Key:**
- Open `src/app/weather/weather.service.ts`.
   - Replace `'YOUR_API_KEY'` with your actual OpenWeatherMap API key.



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
