# Uso de la Clase AuthenticateAPI

Este documento explica cómo utilizar la clase `AuthenticateAPI`, que permite la autenticación en las pruebas de Cypress utilizando el token de autenticación de Trello.

## Métodos

### `buildUrl(_template: string, _replacements: Record<string, string | null>): string`

Este método genera una URL dinámica a partir de una plantilla y un objeto de reemplazos. Los elementos reemplazables en la plantilla están marcados con `{{}}`.

#### Ejemplo

```typescript
const newUrl = authTrello.buildUrl('{{basepath}}/{{credentials}}', { basepath: 'http://pagina_de_ejemplo.com', credentials: miscredenciales });
```

### `setCredentials(_auth: Auth, _method?: AuthType)`

Este método establece las credenciales de autenticación y el tipo de autenticación a utilizar.

#### Ejemplo

```typescript
authTrello.setCredentials({ key: 'your-key', token: 'your-token' });
```

### `authenticate(_requestData: RequestData): Cypress.Chainable<any>`

Este método maneja la autenticación según el tipo de autenticación especificado. Devuelve un encabezado de autorización que se puede usar en solicitudes API.

#### Ejemplo

```typescript
authTrello.authenticate({
    url: '<http://api.trello.com>',
    data: { method: 'GET' }
}).then((authHeader: string) => {
    cy.api({
        method: 'GET',
        url: '<http://api.trello.com>',
        headers: { authorization: authHeader }
    });
});
```

## Tipos de Datos

### `Auth`

El tipo `Auth` define las credenciales de autenticación necesarias. Tiene la siguiente estructura:

```typescript
export interface Auth {
  key: string;
  token: string;
}
```

- `key`: La clave de la API de Trello.
- `token`: El token de autenticación de Trello.

### `RequestData`

El tipo `RequestData` representa los datos de la solicitud para la autenticación y la llamada a la API. Tiene la siguiente estructura:

```typescript
export interface RequestData {
  url: string;
  data?: {
    method?: string;
    [key: string]: any;
  };
}
```

- `url`: La URL a la que se realizará la solicitud.
- `data`: Los datos de la solicitud, como el método HTTP y otros parámetros.

### `AuthType`

El tipo `AuthType` enumera los métodos de autenticación disponibles. Actualmente, solo está definido el tipo `bearer`:

```typescript
export enum AuthType {
  bearer = 'Bearer'
}
```

- `bearer`: El tipo de autenticación basado en un token.

## Ejemplo Completo

Aquí tienes un ejemplo muy básico que usa todos los métodos:

```typescript
const authTrello = new AuthenticateAPI();
authTrello.setCredentials({ key: 'your-key', token: 'your-token' });

const url = authTrello.buildUrl('{{basepath}}/{{credentials}}', { basepath: 'http://pagina_de_ejemplo.com', credentials: 'miscredenciales' });

authTrello.authenticate({ url: url, data: { method: 'GET' } }).then((authHeader: string) => {
    cy.api({
        method: 'GET',
        url: url,
        headers: { authorization: authHeader }
    });
});
```
