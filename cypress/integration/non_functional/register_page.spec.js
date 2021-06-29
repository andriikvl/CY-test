/// <reference types="cypress" />



 import {onRegisterPage} from "../../support/page_object/register_page";
 import {register} from "../../fixtures/expexted.json"

before("", ()=> {
    onRegisterPage.open()
})

describe("Non-functional", ()=> {

    it('Verify that button Kompot ERP is present ', () => {
        onRegisterPage.kompotButton().should('exist')
    })

     it('Verify that button Kompot ERP text = "Kompot ERP"', () => {
         onRegisterPage.kompotButton().should('have.text', register.kompotBtn)
     })

    it('Verify that title is presend ', () => {
        onRegisterPage.title().should('exist')
    })

    it('Verify that title ext = Create an Account ', () => {
        onRegisterPage.title().should('have.text', register.title )
    })

    it('Verify that field First Name is present ', () => {
        onRegisterPage.fieldFirstName().should('exist' )
    })

    it('Verify that field First Name placeholder text = First Name', () => {
        onRegisterPage.fieldFirstName().should('have.attr', "placeholder", register.placeholderFN )
    })

    it('Verify that field Last Name is present', () => {
        onRegisterPage.fieldLastName().should('exist' )
    })

    it('Verify that field Last Name placeholder text = Last Name', () => {
        onRegisterPage.fieldLastName().should('have.attr', "placeholder", register.placeholderLN )
    })

    it('Verify that field Email is present ', () => {
        onRegisterPage.fieldEmail().should('exist' )
    })

    it('Verify that field Email  placeholder text = Email', () => {
        onRegisterPage.fieldEmail().should('have.attr', "placeholder", register.placeholderEmail )
    })

    it('Verify that field Password is present ', () => {
        onRegisterPage.fieldPassword().should('exist' )
    })

    it('Verify that field Password placeholder text = Password', () => {
        onRegisterPage.fieldPassword().should('have.attr', "placeholder", register.placeholderPassword )
    })

    it('Verify that field Password has icon locker', () => {
        onRegisterPage.lockIcon().should("exist" )
    })

    it('Verify that field Password has icon locker', () => {
        onRegisterPage.eyeIcon().should("exist" )
    })

    it('Verifi that section Terms and agreements is present', () => {
        onRegisterPage.eyeIcon().should("exist" )
    })

    it('Verifi that section Terms and agreements is present', () => {
        onRegisterPage.labelTermsAgreements().should("exist" )
    })

    it('Verifi that section Terms and agreements text = I have read Terms and agreements', () => {
        onRegisterPage.labelTermsAgreements().should("have.text",  register.labelTermsAgreements)
    })

    it('Verify that section Terms and agreements checkbox is present', () => {
        onRegisterPage.checkboxTermsAgreements().should("exist")
    })

    it('Verify that section Terms and agreements checkbox is unchecked', () => {
        onRegisterPage.checkboxTermsAgreements().should("not.have.class", register.unchecked)
    })

    it('Verify that section Terms and agreements has link "Terms and agreements"', () => {
        onRegisterPage.buttonTermsAgreements().should("exist")
    })

    it('Verify that drawer Terms and agreements has cross (close) ', () => {
        onRegisterPage.buttonTermsAgreements().click()
        onRegisterPage.buttonDrawerCross().should("exist")
        onRegisterPage.buttonDrawerCross().dblclick({force: true})
    })

    // it('Verify that button Register is present ', options => {
    //     onRegisterPage.buttonRegister().should("exist")
    //
    // })

    it('erify that section Already have an account? is presend ', () => {
        onRegisterPage.labelAlreadyHaveAcc().should("exist")
    })

    it('erify that section Already have an account? text = Already have an account? Just click Log in.', () => {
        onRegisterPage.labelAlreadyHaveAcc().should("have.text", register.alreadyHaveAccount)
    })

    it('erify that section Already have an account? is presend ', () => {
        onRegisterPage.linkAlreadyHaveAccount().should("have.text", "Log in")
    })

 })

describe("Register Page title", () => {


})
