import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  products = [
      {name : 'Funko Pop'},
      {name : 'MousePad'},
      {name : 'Mouse'},
      {name : 'Cadeira Gamer'}
    ]
}
