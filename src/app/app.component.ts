import { Component } from '@angular/core';

export interface Text {
  placeholder: string;
}

export interface Title {
  title: any;
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
    // {
    //   placeholder: 'another',
    // },
  ];

  change: Title[] = [
    {
      title: 'changed',
    },
  ];

  apdateTitle(text: Text) {
    this.text.unshift(text);
    console.log('title', text);
  }

  removeButton(title: any) {
    console.log(title);
  }
}
