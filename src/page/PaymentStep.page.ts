import { $, ElementFinder, promise } from 'protractor';

export class PaymentStepPage {
  private get paymentMethodOption(): ElementFinder {
    return $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }
  
  public selectPaymentMethod(): promise.Promise<void> {
    return this.paymentMethodOption.click();
  }
}