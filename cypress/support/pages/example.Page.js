// Página de Login
class LoginPage{

    get = { // Obtener cada elemento de la presente página:
        usernameInput:()=> cy.get("[tabindex='1']"),
        passwordInput:()=> cy.get("[tabindex='2']"),
        loginButton:()=> cy.get("[tabindex='3']")
    }
    // Para que el código sea legible, hay que separar cada acción en una única función.
    // Como si fuera un Caso de Prueba estilo Step-by-Step como se muestra a continuación...
    // Cada función de acción debe estar escrito con un verbo infinitivo + el objetivo del mismo:
    enterUsername(username){ // Ingresar Nombre de Usuario X en el form
        username && this.get.usernameInput().type(username)
    }
    enterPassword(password){ // Ingresar Contraseña X en el form
        password && this.get.passwordInput().type(password)
    }
    submit(){ // hacer Click en el botón LOGIN
        this.get.loginButton().click()
    }
};

export const User = new LoginPage;
