[![🤖CI run Regression in QA🧪 After Merging⚡](https://github.com/upex-galaxy/L1-cypex-demo/actions/workflows/CI-regressionQA.yml/badge.svg)](https://github.com/upex-galaxy/L1-cypex-demo/actions/workflows/CI-regressionQA.yml)

# 🧪Testing Automation - Cypress 12👨🏻‍🚀 + Cucumber
![UPEX's Banners (linkedin) (1)](https://user-images.githubusercontent.com/91127281/189470339-acea5782-16f1-4f06-9ce0-df54fd3ead9d.png)

Cypress es el MEJOR FRAMEWORK DE AUTOMATION E2E actualmente! No hay rival! Además de que es el framework más amigable para aprender!
Aunque no es el único E2E en el mercado, y tampoco es el más usado como sí lo es Selenium. Pero es el MÁS POPULAR!

Cypress es un Framework de Automatización de Next Generation construido para web modernas. Esto es im simple proyecto el cual puedes usarlo para comenzar tu viaje por la Galaxia de la Automatización!

## NUEVA ESTRUCTURA DE PROYECTO
Ahora el Directorio de UPEX Galaxy, será mucho más simple. 
- Para la carpeta `Tests`:
    - Cada Suite de US, deberá ser guardado en una carpeta del Componente correspondiente del SUT (ej: ShoppingCart), 
    - y la nomenclatura de archivos cambia a ser más directa: `GX-<ID>-<NombreCortoDeLaStory>` como ejemplo: "GX-5-AgregarItemAlCart.cy.js". 
- En cuanto a la carpeta `cucumber-tests`:
    - Tendrán una mejor distribución de arhcivos; por carpetas separadas: Todos los archivos `.feature` dentro de la carpeta "Gherkin" y los archivos `.js` dentro de "stepDefinitions" como tiene que ser. 
    - La Nomenclatura de éste tipo de prueba se mantiene igual al normal (la misma nomenclatura mencionada arriba).
![image](https://user-images.githubusercontent.com/91127281/209617125-ec3b7ed9-0495-4860-adba-547ed2d3a243.png)


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
    * (la letra `i` es de `install` y `--legacy-peer-deps` es para instalar diferentes dependencias necesarias)
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
5. **Para generar el archivo JSON Cucumber y Reporte HTML,**
    - *Primero Descarga el Formatter según tu OS:*
        - [Json-Formatter for Windows](https://github.com/cucumber/json-formatter/releases/download/v19.0.0/cucumber-json-formatter-windows-amd64)
        - [Json-Formatter for Linux](https://github.com/cucumber/json-formatter/releases/download/v19.0.0/cucumber-json-formatter-linux-amd64)
        - [Json-Formatter for MacOs](https://github.com/cucumber/json-formatter/releases/download/v19.0.0/cucumber-json-formatter-darwin-amd64)
    - *Luego mueve el archivo descargado a la carpeta `cucumber-formatter` de este proyecto en tu repositorio local*
    - *y Sigue estas instrucciones de instalación:* [github.com/cucumber/json-formatter](https://github.com/cucumber/json-formatter)
    - *Modifica el archivo: `.cypress-cucumber-preprocessorrc.json`, para cambiar el nombre del formatter:*
        - Renombra: `cucumber-json-formatter.exe` por `cucumber-json-formatter` si usas Linux o MacOs.
    - *Luego podrás generar archivo JSON de Cucumber para Importar las Pruebas a Jira.*
    - *Para poder generar archivos HTML de Cucumber luego de correr las pruebas, Ejecuta:*
        ```
        npm run report:cucumber
        ```
        * donde la variable "report:cucumber" es igual a:
        `node ./cucumber-html-report.js` cuyo atajo es para generar el Reporte Cucumber index.html en la carpeta `reports/cucumber-html-report` para evaluar TODOS el Resultado de Prueba Cucumber.
___
6. **Para correr una REGRESIÓN y generar un solo Reporte HTML global, ejecuta**: 
    ```
    npm run regression:report
    ```
    Luego ejecuta estos comandos, uno por uno:
    ````
    npm run report:json
    npm run report:html
    ````
    * Gracias a esto se va a generar un único Reporte mochawesome HTML para evaluar TODOS los Resultados de Prueba de la Regresión.
___
7. **AHORA CON CYPRESS DASHBOARD**, puedes ver todas las ejecuciones y resultados de prueba del proyecto!
Visita: [CYPRESS DASHBOARD](https://dashboard.cypress.io/projects/2pw67q/analytics/runs-over-time)
___
## PLAN DE PRUEBA: ESTRATEGIA Y DISEÑO
### 🚩LEVEL ONE (L1):
1. Perfecta Nomenclatura del nombre de Archivo de prueba: {GX-ID}-{StoryShortName}.{extensionFile} ej: GX-50-AgregarItemsAlCart.cy.js
2. Archivo de Prueba dentro del directorio correcto; dentro de la carpeta del Componente correspondiente, ejemplo: `cypress/e2e/Tests/ComponentName/GX-1-StoryTestSuite.cy.js`.
3. Buen diseño del Test Suite elaborado (Esto implica que se vean bien el código en general, que al menos funcione).
4. Tener el Markdown de la US en la carpeta Test-Plan en su correspondiente carpeta Sprint, ejemplo: `cypress/test-plan/in-sprint/sprint-9/userStory.md`. Esto implica que cada vez que se trabaje en un Sprint nuevo, se debería crear la carpeta correspondiente "sprint-" + número del sprint, como se muestra en el ejemplo arriba.
5. NO usar fixture como PageObjectModel sino como Data-Entry (es decir, no agarrar elementos Web por fixtures, sino usar el Fixture para iterar Data o reutilizar variables).
- Antes en GX se usaba Fixture como POM, porque era fácil de aprender, pero hoy en día las entrevistas técnicas piden PageObject Model de la manera tradicional, sin usar Commands (Los Commands se usan para hacer generar algoritmos para múltiples suites o para generar precondiciones repetitivas).
6. En caso de usar Fixtures: Chequear que el archivo ".json" esté dentro de la carpeta correspondiente al componente, ejemplo: `cypress/fixtures/data/example.json`.
7. En caso de usar PageObjectModel: Chequear que el "Page.js" esté dentro de la carpeta "pages" en la de "support", ejemplo: `cypress/support/pages/example.Page.js`.
8. En caso de usar Commands: Asegurarse de aplicarlo para crear pasos de Precondiciones o Scripts de Algoritmos complejos (NO USAR como Pasos de Acción, eso sería tarea para el POM).
9. En caso de usar el CI Pipeline: Usar únicamente el archivo predeterminado del proyecto "CI-buildTest.yml", y asegurarse de modificarlo correctamente (Solo cambiar el Path del Test Suite y el parámetro de Importación TX para Jira) y no borrar o cambiar nada más, que funcione y pase los Checks.
10. En caso de usar Cucumber: Chequear que el archivo Gherkin (.feature) y los StepDefinitions (.js) estén correctamente diseñados y que la Ejecución en CI funcione y pase los Checks.

    ```
    Challenge L2: Si se realiza una tarea completa con POM, CI y Cucumber correctamente, es motivo para subir a Nivel 2 automáticamente mediante un Challenge (una nueva US asignada).
    ```
___
### 🚩LEVEL TWO (L2):
1. Es obligatorio realizar TODO lo anterior declarado, pero adicionalmente:
    - Tener MUCHO mejor código en los Scripts.
2. Obligatoriamente, realizar:
    - PageObjectModel
    - Commands (en caso de Precondiciones)
    - CI Pipeline
3. En caso de ser necesario, realizar:
    - Commands (por Algoritmos)
    - Fixture (por Data entries)
    - Variables de Entorno (Cypress.env)
4. En caso especial (dependiendo de la US) se puede intentar aplicar:
    - Cucumber 
- Chequear que todas estas 4 tareas estén bien hechas.
___
### 🚩LEVEL THREE (L3):
1. Obligatoriamente, realizar todo lo que está correcto (L1 y L2), sin saltarse ninguna instrucción debida.
2. El código tiene que ser bueno, refinado, y con buenas prácticas; el Reviewer de los L3 es más estricto.
3. Elaborar un Plan de Prueba Funcional en caso de que la Historia de Usuario lo necesite. Agregar dicho archivo Markdown en el directorio de Planes de Pruebas. Posibles pruebas:
        - Integration Testing (API)
        - E2E Testing (API + UI)
        - Visual Testing (Applitools, Percy, etc.)
        - Database Testing (SQL)

4. Realizar o Actualizar un Plan de Prueba de Smoke, Sanity o Regression dependiendo de la tarea asignada como L3.
5. Crear un nuevo Pipeline de CI para ejecutar, importar a Jira y Generar Reporte HTML, para las pruebas de Smoke, Sanity o Regression dependiendo de la tarea asignada como L3
6. Libertad para aplicar nuevas estrategias o dependencias para la realización del Plan de Pruebas. Esto implica investigación de acuerdo a la realización de nuevas pruebas.
___

### 🧙🏻‍♂️APRENDE Y GANA EXPERIENCIA COMO QA AUTOMATION EN UPEX GALAXY🚀 
### 🚩ENTRA EN [UPEX DOCUMENTATION](https://linktree.com/upexjira) Y BUSCA LAS GUÍAS DE CYPRESS AL GRANO!
___
## Algunos Artículos de Cypress que puede interesarte:
- [How to Install Cypress](https://testersdock.com/how-to-install-cypress/)
- [Understanding Cypress Folder Structure](https://testersdock.com/cypress-folder-structure/)
- [How to execute Cypress Tests using Test Runner and CLI](https://testersdock.com/cypress-test-runner-cli/)
- [Writing your First Test in Cypress](https://testersdock.com/first-cypress-test/)
- [How to use Fixtures in Cypress Tests](https://testersdock.com/cypress-fixtures/)
- [How to use readFile() and writeFile() in Cypress](https://testersdock.com/cypress-writefile-readfile/)
- [How to interact with multiple elements using each()](https://testersdock.com/cypress-each/)
- [Conditional Testing (If Else) in Cypress](https://testersdock.com/cypress-conditional-if-else-testing/)
- [How to upload a file in Cypress](https://testersdock.com/cypress-file-upload/)
- [How to download a file in Cypress](https://testersdock.com/cypress-file-download/)
- [API Testing in Cypress](https://testersdock.com/cypress-api-testing/)
- [How to chain Multiple APIs in Cypress](https://testersdock.com/cypress-chain-multiple-api/)
- [Mock API Response in Cypress using cy.server() and cy.route()](https://testersdock.com/cypress-mock-api/)
- [How to handle JS Alert, Confirm and Prompt in Cypress](https://testersdock.com/cypress-javascript-alert-confirm-prompt/)
- [How to use Skip and Only in Cypress](https://testersdock.com/skip-only-cypress/)
- [How to execute Cypress Tests in order](https://testersdock.com/cypress-execute-tests-in-order/)
- [How to handle Shadow DOM in Cypress](https://testersdock.com/cypress-shadow-dom/)
- [How to retry tests X number of times in Cypress](https://testersdock.com/test-retries-in-cypress/)
- [How to handle Iframes in Cypress](https://testersdock.com/iframes-cypress/)
- [How to generate HTML reports in Cypress](https://testersdock.com/html-reports-cypress/)
- [How to Add Tags like Smoke,E2E to Cypress Tests](https://testersdock.com/cypress-test-tags/)
- [Cypress Page Object with Locator Functions and Custom Commands](https://testersdock.com/cypress-page-object-with-locator-function-and-custom-command/)
- [Cypress Dashboard](https://testersdock.com/cypress-dashboard/)
- [How to visually generate tests with no coding in Cypress Studio](https://testersdock.com/cypress-studio/)
- [How to mock an API using cy.intercept()](https://testersdock.com/cypress-mock-api-intercept/)
- [How to integrate cypress with cucumber](https://testersdock.com/cypress-cucumber-bdd/)
- [How to hover over elements in Cypress](https://testersdock.com/cypress-hover/)
- [How to perform Database Testing(SQL) in Cypress](https://testersdock.com/cypress-database-testing/)
- [How to use parents(), parent() and children() commands in Cypress](https://testersdock.com/cypress-parents-parent-children/)
- [How to perform Drag and Drop on HTML and Angular sites with Cypress](https://testersdock.com/cypress-drag-and-drop-html-angular/)
- [How to handle new browser tab and window in Cypress](https://testersdock.com/cypress-new-window/)
- [How to use filter(), find() and within() commands in Cypress](https://testersdock.com/cypress-filter-find-within/)
- [Commonly used JQuery commands in Cypress](https://testersdock.com/cypress-jquery/)
- [How to do recursion in Cypress](https://testersdock.com/cypress-recursion/)
- [How to handle basic auth in Cypress](https://testersdock.com/cypress-basic-auth/)
- [Cypress 10 Upgrade](https://testersdock.com/cypress-10-upgrade/)
