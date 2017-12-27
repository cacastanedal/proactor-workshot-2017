import { $, ElementFinder, promise } from 'protractor';

export class OrderResumePage {
  private get confirmationText(): ElementFinder {
    return $('#center_column > div > p > strong');
  }

  public getConfirmationText(): promise.Promise<string> {
    return this.confirmationText.getText();
  }
}
