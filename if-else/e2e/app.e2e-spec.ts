import { IfElsePage } from './app.po';

describe('if-else App', () => {
  let page: IfElsePage;

  beforeEach(() => {
    page = new IfElsePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
