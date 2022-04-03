export class Light {
  private isOn = false;

  public turnOn(): void {
    this.isOn = true;
  }

  public turnOff(): void {
    this.isOn = false;
  }

  public isTurnedOn(): boolean {
    return this.isOn;
  }
}
