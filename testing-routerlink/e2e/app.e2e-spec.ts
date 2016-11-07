import { TestingRouterlinkPage } from './app.po';

describe('testing-routerlink App', function() {
  let page: TestingRouterlinkPage;

  beforeEach(() => {
    page = new TestingRouterlinkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
