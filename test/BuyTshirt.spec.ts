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

  it('look for Tshirts', async () => {
    await menuContentPage.goToTShirtMenu();
  });

  it('select first tshirt', async () => {
    await productListPage.goToTShirtList();
  });

  it('add to cart', async () => {
    await productDetailPage.addToCart();
  });

  it('proceed to checkout', async () => {
    await productAddedModalPage.proceedToCheckout();
  });

  it('confirm summary', async () => {
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

  it('proceed to checkout', async () => {
    await addressStepPage.proceedToCheckout();
  });
});

describe('Shipping options', () => {
  const shippingStepPage: ShippingStepPage = new ShippingStepPage;
  
  it('agree with terms and proceed', async () => {
    await shippingStepPage.proceedToCheckout();
  });
});

describe('Bank payment', async () => {
  const paymentStepPage: PaymentStepPage = new PaymentStepPage;
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage;

  it('pay through wire transfer', async () => {
    await paymentStepPage.selectPaymentMethod();
  });

  it('confirm payment', async () => {
    await bankPaymentPage.confirmOrder();
  });
});

describe('Tshirt bought', () => {
  const orderResumePage: OrderResumePage = new OrderResumePage;

  it('confirmation message', async () => {
    await expect(orderResumePage.getConfirmationText())
     .toBe('Your order on My Store is complete.');
  });
});

