
import BasePage from "./base_page";


class RegisterPage extends BasePage {
    open() {
        super.open("/user/register");
    }

    kompotButton = () => cy.xpath('//a[@class="site-name"]')

    title = () => cy.xpath('//h1')

    fieldFirstName = () => cy.xpath('//input[@id="user_login_firstName"]')

    fieldLastName = () => cy.xpath('//input[@id="user_login_lastName"]')

    fieldEmail = () => cy.xpath('//input[@id="user_login_email"]')

    fieldPassword = () => cy.xpath('//input[@id="user_login_password"]')

    lockIcon = () => cy.xpath('//span[@aria-label="lock"]')

    eyeIcon = () => cy.xpath('//span[@aria-label="eye-invisible"]')

    labelTermsAgreements = () => cy.xpath("//span[text()='I have read']/parent::label")

    checkboxTermsAgreements = () => cy.xpath('//input[@id="user_login_agreement"]/parent::span')

    buttonTermsAgreements = () => cy.xpath('//button[@data-qa="termsBtn"]')

    buttonDrawerCross = () => cy.xpath('//button[@class="ant-drawer-close"]')

    buttonRegister = () => cy.get('.ant-btn.ant-btn-primary.ant-btn-lg')

    labelAlreadyHaveAcc = () => cy.xpath('//p')

    linkAlreadyHaveAccount = () => cy.xpath(('//a[@href="/user/login"]'))

    drawerTermsAgreements = () => cy.xpath(('//div[@class="ant-drawer-content"][1]'))

    drawerTermsAgreementsClosed = () => cy.xpath(('//div[@class="ant-drawer-header-no-title"][1]'))

    drawerTermsAgreementsOutside = () => cy.xpath(('//div[@class="ant-drawer-mask"][1]'))

    greenCheckFirstName = () => cy.xpath('//input[@id="user_login_firstName"]/parent::div/parent::div//span[@aria-label="check-circle"]')

    redCrossFirstName = () => cy.xpath('//input[@id="user_login_firstName"]/parent::div/parent::div//span[@aria-label="close-circle"]')
    errorMessageFirstName = () => cy.xpath('//input[@id="user_login_firstName"]/parent::div/parent::div/following-sibling::div/div')

    clearAllFields () {
        this.fieldFirstName().clear();
        this.fieldLastName().clear();
        this.fieldEmail().clear();
        this.fieldPassword().clear();
    }




}

export const onRegisterPage = new RegisterPage();
