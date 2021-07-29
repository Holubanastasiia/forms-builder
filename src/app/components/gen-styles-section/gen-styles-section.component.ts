import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import { Text } from '../../app.component';

@Component({
  selector: 'app-gen-styles-section',
  templateUrl: './gen-styles-section.component.html',
  styleUrls: ['./gen-styles-section.component.scss'],
})
export class GenStylesSectionComponent implements OnInit, OnDestroy {
  inputValue = '';
  placeHolder = '';
  title = '';

  @ViewChild('inputTitle', { static: false })
  inputRef!: ElementRef;
  @Output()
  onAdd: EventEmitter<Text> = new EventEmitter<Text>();
  @Output() onRemove = new EventEmitter<string>();
  @Input()
  place!: Text;

  constructor() {}

  removeBtn() {
    this.onRemove.emit(this.place.placeholder);
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    console.log('init');
  }
  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
  }

  OnInit(): void {
    console.log('onInit');
  }

  OnDestroy(): void {
    console.log();
  }

  onInput(event: any) {
    console.log(event);
    this.inputValue = event.target.value;
  }

  onChange() {
    this.placeHolder = 'some' ? 'anything' : 'some';
  }

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

  onFocus() {
    this.inputRef.nativeElement.focus();
  }
}
