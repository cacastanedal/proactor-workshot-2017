import { $$, ElementFinder, promise, ElementArrayFinder } from 'protractor';

export class ProductListPage {
  private get productContainerList(): ElementArrayFinder {
    return $$('.product_list > li');
  }

  private findByProduct(name: string): ElementFinder {
    return this.productContainerList
      .filter((item: ElementFinder) => 
        item
          .$('.product-name')
          .getText()
          .then((text: string) => text.includes(name)))
      .first();
  }

  public selectProduct(pruductName: string): promise.Promise<void> {
    return this.findByProduct(pruductName).click();
  }
}
