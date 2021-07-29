import { Component } from '@angular/core';

export interface Text {
  placeholder: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'form-builder';

  text: Text[] = [
    {
      placeholder: 'some',
    },
    {
      placeholder: 'another',
    },
  ];

  apdateTitle(text: Text) {
    console.log('title', text);
  }
}

/** @title Form field with prefix & suffix */

export class FormFieldPrefixSuffixExample {
  hide = true;
}
