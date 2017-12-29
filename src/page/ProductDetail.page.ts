import { $, ElementFinder, promise } from 'protractor';

export class ProductDetailPage {
  private get addToCartButton(): ElementFinder {
    return $('button.exclusive');
  }

  public addToCart(): promise.Promise<void> {
    return this.addToCartButton.click();
  }
}
