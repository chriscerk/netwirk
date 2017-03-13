import { NetwirkPage } from './app.po';

describe('netwirk App', () => {
  let page: NetwirkPage;

  beforeEach(() => {
    page = new NetwirkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
