/**
 * Weather data for *rooi rose*
 * Canonical source for weather page city data and forecasts.
 *
 * Icons are stored as string identifiers so this file remains
 * a pure data module (no JSX). The consuming component maps
 * these identifiers to Lucide React icons.
 */

export type WeatherIcon = 'sun' | 'cloud-sun' | 'cloud-rain' | 'cloud' | 'cloudy';

export interface ForecastDay {
  day: string;
  high: number;
  low: number;
  icon: WeatherIcon;
  condition: string;
  rain: number;
}

export interface CityWeather {
  name: string;
  province: string;
  temp: number;
  feelsLike: number;
  condition: string;
  wind: number;
  windDir: string;
  humidity: number;
  visibility: number;
  sunrise: string;
  sunset: string;
  icon: WeatherIcon;
  forecast: ForecastDay[];
}

export const CITIES: CityWeather[] = [
  {
    name: 'Kaapstad',
    province: 'Wes-Kaap',
    temp: 28,
    feelsLike: 30,
    condition: 'Sonnig',
    wind: 22,
    windDir: 'SO',
    humidity: 45,
    visibility: 10,
    sunrise: '06:12',
    sunset: '19:48',
    icon: 'sun',
    forecast: [
      { day: 'Ma', high: 29, low: 18, icon: 'sun', condition: 'Sonnig', rain: 0 },
      { day: 'Di', high: 31, low: 19, icon: 'sun', condition: 'Sonnig', rain: 0 },
      { day: 'Wo', high: 27, low: 17, icon: 'cloud-sun', condition: 'Deels bewolk', rain: 10 },
      { day: 'Do', high: 25, low: 16, icon: 'cloud', condition: 'Bewolk', rain: 20 },
      { day: 'Vr', high: 26, low: 17, icon: 'cloud-sun', condition: 'Deels bewolk', rain: 5 },
      { day: 'Sa', high: 28, low: 18, icon: 'sun', condition: 'Sonnig', rain: 0 },
      { day: 'So', high: 30, low: 19, icon: 'sun', condition: 'Sonnig', rain: 0 },
    ],
  },
  {
    name: 'Bloemfontein',
    province: 'Vrystaat',
    temp: 32,
    feelsLike: 33,
    condition: 'Warm en sonnig',
    wind: 12,
    windDir: 'N',
    humidity: 35,
    visibility: 15,
    sunrise: '05:58',
    sunset: '19:22',
    icon: 'sun',
    forecast: [
      { day: 'Ma', high: 33, low: 18, icon: 'sun', condition: 'Sonnig', rain: 0 },
      { day: 'Di', high: 34, low: 19, icon: 'cloud-sun', condition: 'Deels bewolk', rain: 15 },
      { day: 'Wo', high: 30, low: 17, icon: 'cloud-rain', condition: 'Donderstorms', rain: 60 },
      { day: 'Do', high: 28, low: 16, icon: 'cloud-rain', condition: 'Reën', rain: 45 },
      { day: 'Vr', high: 29, low: 17, icon: 'cloud-sun', condition: 'Deels bewolk', rain: 20 },
      { day: 'Sa', high: 31, low: 18, icon: 'sun', condition: 'Sonnig', rain: 5 },
      { day: 'So', high: 32, low: 19, icon: 'sun', condition: 'Sonnig', rain: 0 },
    ],
  },
  {
    name: 'Johannesburg',
    province: 'Gauteng',
    temp: 26,
    feelsLike: 27,
    condition: 'Deels bewolk',
    wind: 15,
    windDir: 'NO',
    humidity: 55,
    visibility: 12,
    sunrise: '05:52',
    sunset: '19:10',
    icon: 'cloud-sun',
    forecast: [
      { day: 'Ma', high: 27, low: 16, icon: 'cloud-sun', condition: 'Deels bewolk', rain: 20 },
      { day: 'Di', high: 28, low: 17, icon: 'cloud-rain', condition: 'Donderstorms', rain: 55 },
      { day: 'Wo', high: 24, low: 15, icon: 'cloud-rain', condition: 'Reën', rain: 70 },
      { day: 'Do', high: 25, low: 14, icon: 'cloud', condition: 'Bewolk', rain: 30 },
      { day: 'Vr', high: 26, low: 15, icon: 'cloud-sun', condition: 'Deels bewolk', rain: 15 },
      { day: 'Sa', high: 27, low: 16, icon: 'sun', condition: 'Sonnig', rain: 5 },
      { day: 'So', high: 28, low: 16, icon: 'sun', condition: 'Sonnig', rain: 0 },
    ],
  },
  {
    name: 'Pretoria',
    province: 'Gauteng',
    temp: 29,
    feelsLike: 30,
    condition: 'Sonnig',
    wind: 10,
    windDir: 'NW',
    humidity: 40,
    visibility: 14,
    sunrise: '05:50',
    sunset: '19:08',
    icon: 'sun',
    forecast: [
      { day: 'Ma', high: 30, low: 18, icon: 'sun', condition: 'Sonnig', rain: 5 },
      { day: 'Di', high: 31, low: 19, icon: 'cloud-sun', condition: 'Deels bewolk', rain: 25 },
      { day: 'Wo', high: 27, low: 17, icon: 'cloud-rain', condition: 'Donderstorms', rain: 65 },
      { day: 'Do', high: 26, low: 16, icon: 'cloud', condition: 'Bewolk', rain: 35 },
      { day: 'Vr', high: 28, low: 17, icon: 'cloud-sun', condition: 'Deels bewolk', rain: 10 },
      { day: 'Sa', high: 30, low: 18, icon: 'sun', condition: 'Sonnig', rain: 0 },
      { day: 'So', high: 31, low: 19, icon: 'sun', condition: 'Sonnig', rain: 0 },
    ],
  },
  {
    name: 'Durban',
    province: 'KwaZulu-Natal',
    temp: 30,
    feelsLike: 34,
    condition: 'Warm en vogtig',
    wind: 18,
    windDir: 'O',
    humidity: 75,
    visibility: 8,
    sunrise: '05:36',
    sunset: '18:56',
    icon: 'cloudy',
    forecast: [
      { day: 'Ma', high: 31, low: 23, icon: 'cloud-sun', condition: 'Deels bewolk', rain: 30 },
      { day: 'Di', high: 30, low: 22, icon: 'cloud-rain', condition: 'Reënbuie', rain: 50 },
      { day: 'Wo', high: 29, low: 22, icon: 'cloud-rain', condition: 'Reën', rain: 60 },
      { day: 'Do', high: 28, low: 21, icon: 'cloud', condition: 'Bewolk', rain: 40 },
      { day: 'Vr', high: 30, low: 22, icon: 'cloud-sun', condition: 'Deels bewolk', rain: 25 },
      { day: 'Sa', high: 31, low: 23, icon: 'sun', condition: 'Sonnig', rain: 10 },
      { day: 'So', high: 32, low: 23, icon: 'sun', condition: 'Sonnig', rain: 5 },
    ],
  },
  {
    name: 'Paarl',
    province: 'Wes-Kaap',
    temp: 33,
    feelsLike: 34,
    condition: 'Warm en sonnig',
    wind: 14,
    windDir: 'NW',
    humidity: 30,
    visibility: 18,
    sunrise: '06:14',
    sunset: '19:50',
    icon: 'sun',
    forecast: [
      { day: 'Ma', high: 34, low: 19, icon: 'sun', condition: 'Sonnig', rain: 0 },
      { day: 'Di', high: 36, low: 20, icon: 'sun', condition: 'Warm', rain: 0 },
      { day: 'Wo', high: 32, low: 18, icon: 'cloud-sun', condition: 'Deels bewolk', rain: 5 },
      { day: 'Do', high: 29, low: 17, icon: 'cloud', condition: 'Bewolk', rain: 15 },
      { day: 'Vr', high: 31, low: 18, icon: 'sun', condition: 'Sonnig', rain: 0 },
      { day: 'Sa', high: 33, low: 19, icon: 'sun', condition: 'Sonnig', rain: 0 },
      { day: 'So', high: 35, low: 20, icon: 'sun', condition: 'Warm', rain: 0 },
    ],
  },
];
