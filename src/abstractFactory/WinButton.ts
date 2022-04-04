import { Button } from './Button';

export class WinButton implements Button {
  constructor(
    public width: number,
    public height: number,
    public innerText: string,
  ) {}
}
