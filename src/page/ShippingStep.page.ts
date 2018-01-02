import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private get checkTermsService(): ElementFinder {
    return $('#cgv');
  }
  
  private get checkoutButton(): ElementFinder {
    return $('.cart_navigation > button');
  }

  public async proceedToCheckout(): Promise<void> {
    await this.checkTermsService.click();
    await this.checkoutButton.click();
  }
}
