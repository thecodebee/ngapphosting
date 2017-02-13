import { NgapphostingPage } from './app.po';

describe('ngapphosting App', function() {
  let page: NgapphostingPage;

  beforeEach(() => {
    page = new NgapphostingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
