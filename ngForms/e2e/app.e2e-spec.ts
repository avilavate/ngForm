import { NgFormsPage } from './app.po';

describe('ng-forms App', function() {
  let page: NgFormsPage;

  beforeEach(() => {
    page = new NgFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
