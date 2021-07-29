import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss'],
})
export class ElementComponent implements OnInit {
  backgroundToggle = false;

  ngOnInit(): void {}
}

export class CdkDragDropOverviewExample {}
export class FormFieldOverviewExample {}
