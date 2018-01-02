import { $, ElementFinder, promise } from 'protractor';

export class MenuContentPage {
  private get tShirtMenu(): ElementFinder {
    return $('.sf-menu:last-child');
  }

  public goToTShirtMenu(): promise.Promise<void> {
    return this.tShirtMenu.click();
  }
}
