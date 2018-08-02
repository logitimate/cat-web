import { CatPartyPage } from './app.po';

describe('cat-party App', () => {
  let page: CatPartyPage;

  beforeEach(() => {
    page = new CatPartyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
