import { $, ElementFinder, promise } from 'protractor';

export class PaymentStepPage {
  private get paymentMethodOption(): ElementFinder {
    return $('.bankwire');
  }
  
  public selectPaymentMethod(): promise.Promise<void> {
    return this.paymentMethodOption.click();
  }
}
