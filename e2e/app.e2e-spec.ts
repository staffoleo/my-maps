import { MyMapsProjPage } from './app.po';

describe('my-maps-proj App', function() {
  let page: MyMapsProjPage;

  beforeEach(() => {
    page = new MyMapsProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
