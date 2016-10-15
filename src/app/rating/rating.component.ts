import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fy-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() rating = 0;

  constructor() { }

  ngOnInit() {
  }

}
