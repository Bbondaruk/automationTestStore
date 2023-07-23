import BasePage from "./BasePage";

class SearchProductPage extends BasePage {
    // visit() {
    //     cy.visit('/index.php?rt=product/search&keyword=i&category_id=0');
    // }

    getProductsList() {
        return cy.get('.contentpanel [class="thumbnails grid row list-inline"]');
    }

    getPaginationBloc(){
        return cy.get('.pagination');
    }

    // ProductCell(){
    //  return cy.get('[class="col-md-3 col-sm-6 col-xs-12"]');
    // }

   
}
export default new SearchProductPage();