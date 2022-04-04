import { GUIFactory } from './GUIFactory';
import { WinButton } from './WinButton';
import { WinCheckbox } from './WinCheckbox';

export class WinFactory implements GUIFactory {
  createButton(): WinButton {
    return new WinButton(100, 200, 'This is Windows button');
  }

  createCheckbox(): WinCheckbox {
    return new WinCheckbox(15, 15, false);
  }
}
