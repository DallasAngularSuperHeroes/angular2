import { Dash10Page } from './app.po';

describe('dash10 App', () => {
  let page: Dash10Page;

  beforeEach(() => {
    page = new Dash10Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
