import { browser } from 'protractor';
import { MenuContentPage, 
  ProductListPage,
  ProductDetailPage,
  ProductAddedModalPage,
  SummaryStepPage,
  SignInStepPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
  BankPaymentPage,
  OrderResumePage
} from '../src/page';

describe('Open page in browser',  () => {
  it('getting a specify URL', async () => {
    await browser.get('http://automationpractice.com/');
  });
});

describe('Selecting Tshirt to buy', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productDetailPage: ProductDetailPage = new ProductDetailPage;
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage;
  const summaryStepPage: SummaryStepPage = new SummaryStepPage;

  it('going through process to buy it', async () => {
    await menuContentPage.goToTShirtMenu();
    await productListPage.goToTShirtList();
    await productDetailPage.addToCart();
    await productAddedModalPage.proceedToCheckout();
    await summaryStepPage.proceedToCheckout();
  });

});

describe('Logging in', () => {
  const signInStepPage: SignInStepPage = new SignInStepPage;

  it('typing user and password', async() => {
    await signInStepPage.signIn('aperdomobo@gmail.com', 'WorkshopProtractor');  
  });
});

describe('Confirm the default address', () => {
  const addressStepPage: AddressStepPage = new AddressStepPage;
  const shippingStepPage: ShippingStepPage = new ShippingStepPage;

  it('shipping and address ready', async () => {
    await addressStepPage.proceedToCheckout();
    await shippingStepPage.proceedToCheckout();
  });
});

describe('Bank payment', async () => {
  const paymentStepPage: PaymentStepPage = new PaymentStepPage;
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage;
  const orderResumePage: OrderResumePage = new OrderResumePage;

  it('payment ok and order completed', async () => {
    await paymentStepPage.selectPaymentMethod();
    await bankPaymentPage.confirmOrder();
    await expect(orderResumePage.getConfirmationText())
     .toBe('Your order on My Store is complete.');
  });

});

