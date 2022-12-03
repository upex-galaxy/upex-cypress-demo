[![CYPEX L1 DEMO](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/detailed/2pw67q&style=for-the-badge&logo=cypress)](https://dashboard.cypress.io/projects/2pw67q/runs)

# 🧪Testing Automation: Cypress 10.9.0 + Cucumber

![UPEX's Banners (linkedin) (1)](https://user-images.githubusercontent.com/91127281/189470339-acea5782-16f1-4f06-9ce0-df54fd3ead9d.png)

Cypress es el MEJOR FRAMEWORK DE AUTOMATION E2E actualmente! No hay rival! Además de que es el framework más amigable para aprender! Aunque no es el único E2E en el mercado, y tampoco es el más usado como sí lo es Selenium. Pero es el MÁS POPULAR!

Cypress es un Framework de Automatización de Next Generation construido para web modernas. Esto es im simple proyecto el cual puedes usarlo para comenzar tu viaje por la Galaxia de la Automatización!

# CÓMO EMPEZAR:

1. **Clona el Proyecto**: 
    ```
    git clone https://github.com/upex-galaxy/L1-cypex-demo.git
    ````
___
2. **Instala todas las dependencias**: 
    ```
    npm i
    ``` 
    * (la letra `i` es de `install`)
    o puedes usar:
        ```
        npm i -f
        ``` 
        * (usa el parámetro `-f` de force) por si estás teniendo conflictos al instalar.
___
3. **Para abrir la App de Cypress, corre el comando**: 
    ```
    npm test
    ``` 
    * también puede usar `npx cypress open` (ya que en Package.json tenemos la variable "test" como el "cypress open") para abrir Cypress!
___
4. **Para correr pruebas y generar Reportes XML y HTML, ejecuta**: 
    ```
    npm run file */**/<filename>
    ```
    * donde la variable "file" es:
     `cypress run --browser chrome --reporter cypress-multi-reporters --reporter-options configFile=jsconfig.json --record --key {key} --spec`, 
     cuyo atajo es para que podamos correr las pruebas de un directorio que especifiquemos, usando el navegador de Chrome, generando 1 Reporte XML para importar a Jira y otro para generar un hermoso html, y adicionalmente actualizar el Cypress Dashboard del Proyecto.
___
5. **Para correr una REGRESIÓN y generar un solo Reporte HTML global, ejecuta**: 
    ```
    npm run regression:report
    ```
    Luego ejecuta este comando, y luego el otro:
    ````
    npm run report:json
    npm run report:html
    ````
    * Gracias a esto se va a generar un único Reporte mochawesome HTML para evaluar TODOS los Resultados de Prueba de la Regresión.
___
6. **AHORA CON CYPRESS DASHBOARD**, puedes ver todas las ejecuciones y resultados de prueba del proyecto!
Visita: [CYPRESS DASHBOARD](https://dashboard.cypress.io/projects/2pw67q/analytics/runs-over-time)
___

## APRENDE Y GANA EXPERIENCIA TRABAJANDO COMO QA AUTOMATION EN GALAXY: 
# LEE ESTA GUÍA: [CYPRESS AL GRANO](https://upexgalaxy6.atlassian.net/wiki/spaces/UG/pages/918130)

# Algunos Artículos de Cypress que puede interesarte:

-   [How to Install Cypress](https://testersdock.com/how-to-install-cypress/)
-   [Understanding Cypress Folder Structure](https://testersdock.com/cypress-folder-structure/)
-   [How to execute Cypress Tests using Test Runner and CLI](https://testersdock.com/cypress-test-runner-cli/)
-   [Writing your First Test in Cypress](https://testersdock.com/first-cypress-test/)
-   [How to use Fixtures in Cypress Tests](https://testersdock.com/cypress-fixtures/)
-   [How to use readFile() and writeFile() in Cypress](https://testersdock.com/cypress-writefile-readfile/)
-   [How to interact with multiple elements using each()](https://testersdock.com/cypress-each/)
-   [Conditional Testing (If Else) in Cypress](https://testersdock.com/cypress-conditional-if-else-testing/)
-   [How to upload a file in Cypress](https://testersdock.com/cypress-file-upload/)
-   [How to download a file in Cypress](https://testersdock.com/cypress-file-download/)
-   [API Testing in Cypress](https://testersdock.com/cypress-api-testing/)
-   [How to chain Multiple APIs in Cypress](https://testersdock.com/cypress-chain-multiple-api/)
-   [Mock API Response in Cypress using cy.server() and cy.route()](https://testersdock.com/cypress-mock-api/)
-   [How to handle JS Alert, Confirm and Prompt in Cypress](https://testersdock.com/cypress-javascript-alert-confirm-prompt/)
-   [How to use Skip and Only in Cypress](https://testersdock.com/skip-only-cypress/)
-   [How to execute Cypress Tests in order](https://testersdock.com/cypress-execute-tests-in-order/)
-   [How to handle Shadow DOM in Cypress](https://testersdock.com/cypress-shadow-dom/)
-   [How to retry tests X number of times in Cypress](https://testersdock.com/test-retries-in-cypress/)
-   [How to handle Iframes in Cypress](https://testersdock.com/iframes-cypress/)
-   [How to generate HTML reports in Cypress](https://testersdock.com/html-reports-cypress/)
-   [How to Add Tags like Smoke,E2E to Cypress Tests](https://testersdock.com/cypress-test-tags/)
-   [Cypress Page Object with Locator Functions and Custom Commands](https://testersdock.com/cypress-page-object-with-locator-function-and-custom-command/)
-   [Cypress Dashboard](https://testersdock.com/cypress-dashboard/)
-   [How to visually generate tests with no coding in Cypress Studio](https://testersdock.com/cypress-studio/)
-   [How to mock an API using cy.intercept()](https://testersdock.com/cypress-mock-api-intercept/)
-   [How to integrate cypress with cucumber](https://testersdock.com/cypress-cucumber-bdd/)
-   [How to hover over elements in Cypress](https://testersdock.com/cypress-hover/)
-   [How to perform Database Testing(SQL) in Cypress](https://testersdock.com/cypress-database-testing/)
-   [How to use parents(), parent() and children() commands in Cypress](https://testersdock.com/cypress-parents-parent-children/)
-   [How to perform Drag and Drop on HTML and Angular sites with Cypress](https://testersdock.com/cypress-drag-and-drop-html-angular/)
-   [How to handle new browser tab and window in Cypress](https://testersdock.com/cypress-new-window/)
-   [How to use filter(), find() and within() commands in Cypress](https://testersdock.com/cypress-filter-find-within/)
-   [Commonly used JQuery commands in Cypress](https://testersdock.com/cypress-jquery/)
-   [How to do recursion in Cypress](https://testersdock.com/cypress-recursion/)
-   [How to handle basic auth in Cypress](https://testersdock.com/cypress-basic-auth/)
-   [Cypress 10 Upgrade](https://testersdock.com/cypress-10-upgrade/)
