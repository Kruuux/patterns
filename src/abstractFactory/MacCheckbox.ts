import { Checkbox } from './Checkbox';

export class MacCheckbox implements Checkbox {
  constructor(
    public width: number,
    public height: number,
    public isChecked: boolean,
  ) {}
}
