import { $, ElementFinder, ExpectedConditions, browser } from 'protractor';

export class ProductAddedModalPage {

  private get proceedToCheckoutButton(): ElementFinder {
    return $('a[title="Proceed to checkout"]');
  }

  public async proceedToCheckout(): Promise<void> {
    const isButtonReady = ExpectedConditions.elementToBeClickable(this.proceedToCheckoutButton);
    await browser.wait(isButtonReady, 4000);
    await this.proceedToCheckoutButton.click();
  }
}
