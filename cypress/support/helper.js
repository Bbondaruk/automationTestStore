import BasePage from "./pages/BasePage";
import AccountLoginPage from "./pages/AccountLoginPage";
import SearchProductPage from "./pages/SearchProductPage";
import ProductPages from "./pages/ProductPages";
import CheckoutPage from "./pages/CheckoutPage";

export function loginViaUI(user) {
    AccountLoginPage.visit();

    cy.log('**Submit login form ...**');
    AccountLoginPage.getLoginFormLoginNameField().type(user.loginName);
    AccountLoginPage.getLoginFormPasswordField().type(user.password);
    AccountLoginPage.getLoginButton().click();


}

export function login2(user) {
    AccountLoginPage.visit();

    cy.log('**Submit login form ...**');
    user.loginName ? AccountLoginPage.getLoginFormLoginNameField().type(user.loginName) : cy.log('User loginname is empty, skip entering login name');
    user.password ? AccountLoginPage.getLoginFormPasswordField().type(user.password) : cy.log('User loginname is empty, skip entering password');
    AccountLoginPage.getLoginButton().click();

}

export function findProductByName(productName) {
    const visitNextPageIfPossible = () => {
        SearchProductPage.getProductsList().then((products) => {
            if (products.find(`[title="${productName}"]`).length > 0) {
                return
            }
            SearchProductPage.getPaginationBloc().children().contains('>').click()
            visitNextPageIfPossible()
        })
    }

    visitNextPageIfPossible()

    cy.log('**знайшли продукт**')

    SearchProductPage.getProductsList().contains(productName)
        .closest('[class="col-md-3 col-sm-6 col-xs-12"]').find('[class="fa fa-cart-plus fa-fw"]').click()
        //.closest(SearchProductPage.ProductCell()).find('[class="fa fa-cart-plus fa-fw"]').click()

    if (productName == 'Creme Precieuse Nuit 50ml') {
        SearchProductPage.getProductsList().contains(productName)
            .closest('[class="col-md-3 col-sm-6 col-xs-12"]').find('[class="fa fa-shopping-cart fa-fw"]').click()
    } else {
        ProductPages.getAddToCartButton().click()
    }

    cy.log('Verify order')
    CheckoutPage.getShoppingCartList()
        .should('contain', productName)



}