import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fy-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  @Input() rating = 0;
  @Output() onRatingUpdate = new EventEmitter();

  constructor() { }

  rate(index) {
    this.rating = index;
    this.onRatingUpdate.emit({
      value: this.rating
    });
  }

}
