import { browser, element, by } from 'protractor';

export class ReflexaoFilosoficaPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('refFil-root h1')).getText();
  }
}
