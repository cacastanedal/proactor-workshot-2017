import { $, ElementFinder, promise } from 'protractor';

export class ProductListPage {
  private get tShirtImage(): ElementFinder {
    return $('ul.product_list > li > div > div.left-block > div > a.product_img_link > img');
  }

  public goToTShirtList(): promise.Promise<void> {
    return this.tShirtImage.click();
  }
}
