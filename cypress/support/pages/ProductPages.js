import BasePage from "./BasePage";

class ProductPages extends BasePage {
    //pruductId80Visit() {
    //     cy.visit('/index.php?rt=product/product&product_id=80');
    // }

    getAddToCartButton() {
        return cy.get('.productpagecart .cart');
    }

    

   
}
export default new ProductPages();