**Se realizará corrección sobre los fallos encontrados en los test a ejecutar**

**Test results:**

 ```
 ✖  1 of 7 failed
 ```

```Suites/GX-277/Stickers.AddSticker.cy.js ✖```<br>
**Error:** CypressError: Timed out after waiting `60000ms` for your remote page to load. Your page did not fire its `load` event within `60000ms`.<br>
**FIX:** no se ha podido arreglar<br>

```Suites/GX-2968//widgets.Tool-Tips.cy.js ✖```<br>
    **Error:** .realHover() is not a function<br>
    **FIX:** Se cambia por .trigger('mouseover') <br>

```Suites/GX-3016/Menu.BurgerMenu.cy.js ✖```<br>
**Error:** cy.click() failed because this element:cy.get("[id='about_sidebar_link']") is being covered by another element:<br>
**FIX:** cy.get("[id='about_sidebar_link']").click({force:true})<br>

```Suites/GX-4103/BookStore.AccessBookPageAndBookToCollection.cy.js ✖```<br>
   **Error:** cy.click() failed because this element:cy.contains('Login').click() is being covered by another element<br>
   **Error:** cy.click() failed because this element:cy.get('[id=submit]').click() is being covered by another element<br>
   **FIX:** se añade .click({force:true}) a ambas sentencias<br>

```Suites/GX-47/Widgets.Autocomplete.cy.js ✖```<br>
**Error:** error en el type=module <br>
**FIX:** se exportan las page usando export;<br>

```Suites/GX-726/BookStoreApplications.Register.cy.js ✖```<br>
**Error:** error en el type=module <br>
**FIX:** import registerPage, { capFirst } from "./pages/registerPage" se modifica a import {registerPage} from "./pages/registerPage.js" y import loginPage from "./pages/loginPage.js" y se reemplaza el module.exports = new loginPage(); por export const loginPage = new LoginPage();<br>

```Suites/GX-781/Widgets.ToolTips.cy.js ✖```<br>
**Error:** Timed out retrying after 4000ms"<br>
**Error:** TypeError: cy.get(...).realHover is not a function<br>
**FIX:** se elimina {pageLoadTimeout:90000} del beforeEach, se cambia el nombre del fixture a .Page.Json y se cambio el .realHover() se cambia por .trigger('mouseover')<br>