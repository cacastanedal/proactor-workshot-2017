import { $, ElementFinder, ExpectedConditions, browser } from 'protractor';

export class ProductAddedModalPage {

  private get proceedToCheckoutButton(): ElementFinder {
    return $('[style*="display: block;"] .button-container > a');
  }

  public async proceedToCheckout(): Promise<void> {
    const isButtonReady = ExpectedConditions.elementToBeClickable(this.proceedToCheckoutButton);
    await browser.wait(isButtonReady, 4000);
    await this.proceedToCheckoutButton.click();
  }
}
