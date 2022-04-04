import { GUIFactory } from './GUIFactory';
import { MacButton } from './MacButton';
import { MacCheckbox } from './MacCheckbox';

export class MacFactory implements GUIFactory {
  createButton(): MacButton {
    return new MacButton(125, 250, 'This is macOS button');
  }

  createCheckbox(): MacCheckbox {
    return new MacCheckbox(10, 10, false);
  }
}
