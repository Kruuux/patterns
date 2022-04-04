import { Button } from './Button';

export class MacButton implements Button {
  constructor(
    public width: number,
    public height: number,
    public innerText: string,
  ) {}
}
