import { Observable } from './Observable';
import { Observer } from './Observer';

export class Thermometer implements Observable {
  private temperature = 0;
  private observers: Observer[] = [];

  public setTemperature(temperature: number): void {
    if (this.temperature === temperature) return;
    this.temperature = temperature;
    this.notify();
  }

  public getTemperature(): number {
    return this.temperature;
  }

  public add(observer: Observer): void {
    this.observers.push(observer);
  }

  public remove(observer: Observer): void {
    const index = this.observers.indexOf(observer, 0);
    if (index > -1) this.observers.splice(index, 1);
  }

  public notify(): void {
    this.observers.forEach((observer) => {
      observer.update();
    });
  }
}
