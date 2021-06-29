/// <reference types="cypress" />

import {apiPage} from "../../support/page_object/api_page";

describe("API", () => {



        let token = "";
        cy.intercept({
            method: "POST",
            url: 'https://server-prod.pasv.us/user/login'
        })




})
