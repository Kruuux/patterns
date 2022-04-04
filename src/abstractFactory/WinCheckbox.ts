import { Checkbox } from './Checkbox';

export class WinCheckbox implements Checkbox {
  constructor(
    public width: number,
    public height: number,
    public isChecked: boolean,
  ) {}
}
