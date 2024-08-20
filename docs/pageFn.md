# El Método `page()`

El método `page()` es un comando personalizado que se ha añadido a la interfaz `Chainable` de Cypress. Este método permite utilizar todos los Page Object Models (POM) declarados en el proyecto.

## ¿Qué es un Page Object Model?

Un Page Object Model es una técnica de diseño en pruebas de automatización para crear objetos que representan las páginas de tu aplicación bajo prueba. Estos objetos tienen las propiedades de las páginas y proporcionan una interfaz para interactuar con ellas.

## ¿Qué hace el método `page()`?

El método `page()` devuelve un `Cypress.Chainable` que contiene los Page Object Models `spaceLoginPage` y `spaceProductPage`. Esto significa que puedes encadenar comandos Cypress a este método y utilizar estos POM para interactuar con las páginas de tu aplicación.

## Ejemplo de Uso

Por ejemplo, puedes utilizar el método `page()` de la siguiente manera:

```javascript
cy.page().then(({ spaceLoginPage }) => {
    spaceLoginPage.enterUsername('Admin');
    spaceLoginPage.enterPassword('admin123');
    spaceLoginPage.submitLogin();
});
```

En este ejemplo, estamos utilizando el método `page()` para obtener el POM `spaceLoginPage`. Luego, utilizamos este POM para interactuar con la página de inicio de sesión: ingresamos un nombre de usuario y una contraseña y hacemos clic en el botón de inicio de sesión.

## Desestructuración de Objetos

Gracias a que los Page Object Models están contenidos dentro de un objeto, puedes utilizar la desestructuración de objetos de JavaScript para obtener los POM que necesitas. En el ejemplo anterior, `{ spaceLoginPage }` es una desestructuración del objeto devuelto por `page()`. Esto significa que puedes obtener y utilizar múltiples POM de una sola vez:

```javascript
cy.page().then(({ spaceLoginPage, spaceProductPage }) => {
    // Interactuar con spaceLoginPage
    spaceLoginPage.enterUsername('Admin');
    spaceLoginPage.enterPassword('admin123');
    spaceLoginPage.submitLogin();

    // Interactuar con spaceProductPage
    spaceProductPage.addProductToCart('Product123');
});
```

## Resumen

En resumen, el método page() te permite utilizar y encadenar comandos Cypress a los Page Object Models de tu proyecto, lo que facilita la interacción con las páginas de tu aplicación bajo prueba.
