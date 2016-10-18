import { Component, OnInit } from '@angular/core';

import { Feedback } from './feedback';
import { FeedbackService } from './feedback.service';

import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from "@angular/forms";

@Component({
  selector: 'fy-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  providers: [FeedbackService]
})
export class FeedbackComponent implements OnInit {
  feedbacks: Feedback[];
  rating: number = 1;
  message: string;
  questions: string;
  form: FormGroup;
  showForm: boolean = false;

  constructor(
    private feedbackService: FeedbackService,
    private _fb: FormBuilder
  ) {
    this._setup();
  }

  ngOnInit() {
    this.feedbackService.getFeedbacks()
      .subscribe(feedbacks => this.feedbacks = feedbacks);
  }

  updateRate(rating) {
    this.rating = rating.value;
    this.form.controls['rating'].patchValue(this.rating);
  }

  addFeedback() {
    this.feedbacks.push(this.form.value);
    this._setup();
    this.showForm = false;
  }

  _setup() {
    this.form = this._fb.group({
      message: '',
      questions: '',
      rating: this.rating
    });
  }
}