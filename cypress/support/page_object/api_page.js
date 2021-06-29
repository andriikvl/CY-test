import BasePage from "./base_page";


class ApiPage extends BasePage {
    open() {
        super.open("/user/register");
    }


}

export const apiPage = new ApiPage();
