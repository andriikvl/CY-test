/// <reference types="cypress" />

import {onRegisterPage} from "../../support/page_object/register_page";
import {register} from "../../fixtures/expexted.json"
import {validData, invalidData} from "../../fixtures/example.json"

describe("Functional", () => {
    before("", ()=> {
        onRegisterPage.open()
    })

    describe("Register Page / url", () => {

        it('Verify that url = host/user/register',  () => {
            cy.url().should("eq", register.urlRegister)
        });

    })

    describe("Register Page / Kompot ERP button", () => {

        after("", () => {
            onRegisterPage.open()

        })


        it('Verify redirection Kompot ERP button',  () => {
            onRegisterPage.kompotButton().click()
            cy.url().should("eq", register.urlHome)
        });

    })


    describe("Register Page / Terms and agreements", () => {


        it('"Terms and agreements" is clickable',  () => {
            onRegisterPage.buttonTermsAgreements().should("be.enabled")
        });


        it('"Terms and agreements" after clock shows Terms and agreements informations in the drawer ',  () => {
            onRegisterPage.buttonTermsAgreements().click()
            onRegisterPage.drawerTermsAgreements().should("exist")
            onRegisterPage.buttonDrawerCross().dblclick({force: true})
        });

        it('Terms and agreements cross (close) button close the drawer',  () => {
            onRegisterPage.buttonTermsAgreements().click()
            onRegisterPage.buttonDrawerCross().dblclick({force: true})
            onRegisterPage.drawerTermsAgreementsClosed().should("exist")
        });

        it('Verify that drawer Terms and agreements could be closed by the clicking outside of the drawer',  () => {
            onRegisterPage.buttonTermsAgreements().click()
            onRegisterPage.drawerTermsAgreementsOutside().dblclick({force: true})
            onRegisterPage.drawerTermsAgreementsClosed().should("exist")
        });

        it('Verify that section Terms and agreements checkbox is checkable after check',  () => {
            onRegisterPage.checkboxTermsAgreements().click()
            onRegisterPage.checkboxTermsAgreements().should("have.class", register.checked)
            onRegisterPage.checkboxTermsAgreements().click()
        });

    })

    describe("Register Page / Already have an account?", () => {

        it('Verify that section Already have an account? link "Log in." is clickable and redirect on login page',  () => {
            onRegisterPage.linkAlreadyHaveAccount().click()
            cy.url().should("eq", register.urlLogin)
            onRegisterPage.open()
        });

    })

    describe("Register page / First Name field", () => {

        afterEach("", () => {
            cy.reload()
        })

        it('Verify that field First name accept Upper and Lower case letters',  () => {
            onRegisterPage.fieldFirstName().type(validData.firstNameUpperLowerCase)
            onRegisterPage.fieldFirstName().should("have.value", validData.firstNameUpperLowerCase)

        });

        it('After insert valid input in First Name field should appear GREEN circle with white check mark',  () => {
            onRegisterPage.fieldFirstName().type(validData.firstNameUpperLowerCase)
            onRegisterPage.greenCheckFirstName().should("exist")
        });

        it('Verify that after delete all input from the First Name field border color = RED ',  () => {
            onRegisterPage.fieldFirstName().type(validData.firstNameUpperLowerCase)
            onRegisterPage.fieldFirstName().clear()
            onRegisterPage.fieldFirstName().should("have.css", "border-color", register.redBorder)
        });

        it('After delete all input from the First Name field should appear RED circle',  () => {
            onRegisterPage.fieldFirstName().type(validData.firstNameUpperLowerCase)
            onRegisterPage.fieldFirstName().clear()
            onRegisterPage.redCrossFirstName().should("exist")
        });

        it('After delete all input from the First Name field should appear RED error message',  () => {
            onRegisterPage.fieldFirstName().type(validData.firstNameUpperLowerCase)
            onRegisterPage.fieldFirstName().clear()
            onRegisterPage.errorMessageFirstName().should("have.text", register.errorMessageReq)
            onRegisterPage.errorMessageFirstName().should("have.css", "color", register.redErrorMessage)
        });

        it('Verify that field First name don\'t accept numbers',  () => {
            onRegisterPage.fieldFirstName().type(invalidData.firstNameNumbers)
            onRegisterPage.errorMessageFirstName().should("have.text", register.errorMessageFirstName)
            onRegisterPage.errorMessageFirstName().should("have.css", "color", register.redErrorMessage)
            onRegisterPage.redCrossFirstName().should("exist")
        });

    })


})
