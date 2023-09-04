# Titulo: GX-31903 🪶Paypal | Comisiones | Calcular las comisiones para enviar y recibir

#### Link US: https://upexgalaxy24.atlassian.net/browse/GX-31903

### Sprint: _Galaxy🚀Sprint #24🪶_

### Epic Link: https://upexgalaxy24.atlassian.net/browse/GX-30037

### _Description:_

-   Como usuario de Paypal
-   Quiero saber:
    -   el monto total de transferencia con la comisión incluida
    -   el monto neto que recibiré sin la comisión
-   Para conocer el monto real de transferencia.

## ✅ACCEPTANCE CRITERIA

_Feature_: Paypal Calculator

    Background:
    Given el usuario está situado en el módulo /calculadora-comisiones-paypal.php
    And existe una comisión definida y actualizada por Paypal:
        "comission": 5,4%
        "fee": 0,30 USD

    Scenario: Usuario obtiene el monto que Hay que Enviar dado el Recibido
        When el usuario ingresa un monto en el campo de texto "Para Recibir"
        Then se calcula automáticamente:
            ("ParaRecibir" + "rate") / (1 - "commission")
        And se expresa el monto "Hay que Enviar"
        And se expresa la comisión establecida.

    Scenario: Usuario obtiene el monto que se Recibe dado el Envío
        When el usuario ingresa un monto en el campo de texto "Si se Envían"
        Then se calcula automáticamente:
            "SiSeEnvían" - (("SiSeEnvían" * "commission") + "rate")
        And se expresa el monto "Se Reciben"
        And se expresa la comisión establecida.

## 🚩BUSINESS RULES SPEC

### Límite de Input Value:

-   IF inputValue está entre 0 a 306 Caracteres:
    -   THEN: el valor de “Hay que Enviar” es numérico.
    -   THEN: el valor de “La Comisión es de” es numérico.
-   IF inputValue es mayor a 307 Caracteres:
    -   THEN: el valor de “Hay que Enviar” NO es numérico, sino “INFINITY”
    -   THEN: el valor de “Hay que Enviar” NO es numérico, sino “NaN”

### Valores permitidos en Input Value:

-   IF inputValue es:
    -   OR numérico(INTEGER o FLOAT)
    -   OR numérico negativo (-1)
    -   OR numérico positivo (+1)
        -   THEN: No se despliega ningún mensaje de error; el valor es válido.
-   IF inputValue es:
    -   Borrado luego de ingresar un valor
        -   THEN: Debe aparecer el mensaje de log “_Indica cuánto vas a Recibir_”
-   IF inputValue es:
    -   Signos de puntuación o cualquier carácter especial no numérico (que no sea “+” o “-”)
        -   THEN: Con cada entrada del valor se elimina automáticamente.
-   IF inputValue es:
    -   Únicamente valores de carácter especial numérico (sea “+” o “-”)
        -   THEN: Debe aparecer el mensaje de log “_Solo puedes introducir Números_”

## ⛳SCOPE

**_QA deberá validar la tasa de comisión usada, la calculadora para enviar y la calculadora para recibir_**

## 🏴‍☠️OOS

-   **No validar la Experiencia de Usuario ni la Interfaz gráfica.**
-   **No calcular la variable por su cuenta. Abstenerse.**
-   **Efectos secundarios: Explotar.**
