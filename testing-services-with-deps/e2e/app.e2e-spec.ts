import { TestingServicesWithDepsPage } from './app.po';

describe('testing-services-with-deps App', function() {
  let page: TestingServicesWithDepsPage;

  beforeEach(() => {
    page = new TestingServicesWithDepsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
