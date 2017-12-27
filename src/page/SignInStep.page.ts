import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private get emailInput(): ElementFinder {
    return $('#email');
  }
  private get passwordInput(): ElementFinder {
    return $('#passwd');
  }
  private get submitButton(): ElementFinder {
    return $('#SubmitLogin > span');
  }

  public async signIn(email: string, password: string): Promise<void> {
    await this.emailInput.sendKeys(email);
    await this.passwordInput.sendKeys(password);
    await this.submitButton.click();
  }
}
