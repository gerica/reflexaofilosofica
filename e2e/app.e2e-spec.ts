import { ReflexaoFilosoficaPage } from './app.po';

describe('reflexao-filosofica App', function() {
  let page: ReflexaoFilosoficaPage;

  beforeEach(() => {
    page = new ReflexaoFilosoficaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('refFil works!');
  });
});
