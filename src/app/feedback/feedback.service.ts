import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Feedback } from './feedback';

@Injectable()
export class FeedbackService {
  private feedbacksUrl = 'http://localhost:4222/feedbacks';

  constructor(private http: Http) { }

  getFeedbacks(): Observable<Feedback[]> {
    return this.http.get(this.feedbacksUrl)
      .map(this.extractData);
  }

  private extractData(res: Response) {
    return res.json() || [];
  }
}
