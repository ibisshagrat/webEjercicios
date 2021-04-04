import { Injectable } from '@angular/core';
import { CultureConverter } from '../models/culture-converter';

@Injectable({
  providedIn: 'root'
})
export class CultureConverterService implements CultureConverter {
  sourceCulture: string;
  targetCulture: string;


  constructor() { }

  convertDistance: (source: number) => number;

  convertTemperature: (source: number) => number;
}
