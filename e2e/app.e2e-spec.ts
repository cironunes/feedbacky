import { FeedbackyPage } from './app.po';

describe('feedbacky App', function() {
  let page: FeedbackyPage;

  beforeEach(() => {
    page = new FeedbackyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
