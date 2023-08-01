import { Component } from '@angular/core';
import { Options } from './dropdown/dropdown.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-components-app';

  options = [
    { key: '1', value: 'Option 1' },
    { key: '2', value: 'Option 2' },
    { key: '3', value: 'Option 3' },
    { key: '4', value: 'Option 4' },
    { key: '5', value: 'Option 5' },
    { key: '6', value: 'Option 6' },
  ];

  selected: Options | undefined;

  constructor() {
    this.selected = this.options[2];
    window.onfocus = () => {
      console.log('Tab in focus');
    };
    window.onblur = () => {
      console.log('Tab in background');
    };
  }

  addOption() {
    this.options.forEach((item) => {
      const newNo = parseInt(item.value.split(' ')[1]);
      item.value = `Option ${newNo + 1}`;
    });
  }
}
