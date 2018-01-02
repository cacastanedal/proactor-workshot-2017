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
  
  it('look for Tshirts', async () => {
    const menuContentPage: MenuContentPage = new MenuContentPage();
    await menuContentPage.goToTShirtMenu();
  });

  it('select first tshirt', async () => {
    const productListPage: ProductListPage = new ProductListPage();
    await productListPage.goToTShirtList();
  });

  it('add to cart', async () => {
    const productDetailPage: ProductDetailPage = new ProductDetailPage;
    await productDetailPage.addToCart();
  });

  it('proceed to checkout', async () => {
    const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage;
    await productAddedModalPage.proceedToCheckout();
  });

  it('confirm summary', async () => {
    const summaryStepPage: SummaryStepPage = new SummaryStepPage;
    await summaryStepPage.proceedToCheckout();
  });
});

describe('Logging in', () => {
  it('typing user and password', async() => {
    const signInStepPage: SignInStepPage = new SignInStepPage;
    await signInStepPage.signIn('aperdomobo@gmail.com', 'WorkshopProtractor');  
  });
});

describe('Confirm the default address', () => {
  it('proceed to checkout', async () => {
    const addressStepPage: AddressStepPage = new AddressStepPage;
    await addressStepPage.proceedToCheckout();
  });
});

describe('Shipping options', () => {
  it('agree with terms and proceed', async () => {
    const shippingStepPage: ShippingStepPage = new ShippingStepPage;
    await shippingStepPage.proceedToCheckout();
  });
});

describe('Bank payment', async () => {
  it('pay through wire transfer', async () => {
    const paymentStepPage: PaymentStepPage = new PaymentStepPage;
    await paymentStepPage.selectPaymentMethod();
  });

  it('confirm payment', async () => {
    const bankPaymentPage: BankPaymentPage = new BankPaymentPage;
    await bankPaymentPage.confirmOrder();
  });
});

describe('Tshirt bought', () => {
  it('confirmation message', async () => {
    const orderResumePage: OrderResumePage = new OrderResumePage;
    await expect(orderResumePage.getConfirmationText())
     .toBe('Your order on My Store is complete.');
  });
});

