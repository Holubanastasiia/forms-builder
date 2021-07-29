import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Text } from '../app.component';

@Component({
  selector: 'app-gen-styles-section',
  templateUrl: './gen-styles-section.component.html',
  styleUrls: ['./gen-styles-section.component.scss'],
})
export class GenStylesSectionComponent {
  inputValue = '';
  placeHolder = '';
  title = '';

  @Output() onAdd: EventEmitter<Text> = new EventEmitter<Text>();
  @Input()
  place!: Text;

  constructor() {}

  onInput(event: any) {
    console.log(event);
    this.inputValue = event.target.value;
  }

  onChange() {}

  addTitle() {
    if (this.title.trim()) {
      const text: Text = {
        placeholder: this.title,
      };
      this.onAdd.emit(text);
      console.log('title ', text.placeholder);

      this.title = '';
    }
  }
}
