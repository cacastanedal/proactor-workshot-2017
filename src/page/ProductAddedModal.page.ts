import { $, ElementFinder, ExpectedConditions, browser } from 'protractor';

export class ProductAddedModalPage {

  private get proceedToCheckoutButton(): ElementFinder {
    return $('[style*="display: block;"] .button-container > a');
  }

  private get isButtonReady(): any {
    return ExpectedConditions.elementToBeClickable(this.proceedToCheckoutButton);
  }

  public async proceedToCheckout(): Promise<void> {
    await browser.wait(this.isButtonReady, 4000);
    await this.proceedToCheckoutButton.click();
  }
}
