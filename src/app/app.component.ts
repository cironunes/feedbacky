import { Component, OnInit } from '@angular/core';

import { Feedback, FeedbackService } from './feedback';

@Component({
  selector: 'fy-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FeedbackService]
})
export class AppComponent implements OnInit {
  feedbacks: Feedback[];

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit() {
    this.feedbackService.getFeedbacks()
      .subscribe(feedbacks => this.feedbacks = feedbacks);
  }
}
