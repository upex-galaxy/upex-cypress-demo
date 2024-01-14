[![🤖CI Regression in QA🧪](https://github.com/upex-galaxy/cypress-js/actions/workflows/regression.yml/badge.svg)](https://github.com/upex-galaxy/cypress-js/actions/workflows/regression.yml)

[![vscode-logo]][vscode-site] [![cypress-logo]][cypress-site] [![javascript-logo]][javascript-site]

# 🧪Testing Automation - Cypress 13👨🏻‍🚀 + Cucumber

![UPEX's Banners (linkedin) (1)](https://user-images.githubusercontent.com/91127281/189470339-acea5782-16f1-4f06-9ce0-df54fd3ead9d.png)

Cypress es el MEJOR FRAMEWORK DE AUTOMATION E2E actualmente! No hay rival! Además de que es el framework más amigable para aprender! Aunque no es el
único E2E en el mercado, y tampoco es el más usado como sí lo es Selenium. Pero es el MÁS POPULAR!

Cypress es un Framework de Automatización de Next Generation construido para web modernas. Esto es im simple proyecto el cual puedes usarlo para
comenzar tu viaje por la Galaxia de la Automatización!

## NUEVA ESTRUCTURA DE PROYECTO

Ahora el Directorio de UPEX Galaxy, será mucho más simple.

-   Para la carpeta `Tests`:

    -   Cada Suite de US, deberá ser guardado en una carpeta del Componente correspondiente del SUT (ej: ShoppingCart),
    -   y la nomenclatura de archivos cambia a ser más directa:

    ```
    {GX-ID}-{NombreCortoDeLaStory}

    como ejemplo: "GX-5-AgregarItemAlCart.cy.js".

    ejemplo de estructura:
    /Tests
    	├───BookStore
    	│       GX-6309-CrearObtenerLibros.cy.js
    ```

-   En cuanto a la carpeta `cucumber-tests`:

    -   Tendrán una mejor distribución de archivos; por carpetas separadas: Todos los archivos `.feature` dentro de la carpeta "Gherkin" y los
        archivos `.js` dentro de "stepDefinitions" como tiene que ser.

    ```
    * ejemplo de Estructura Cucumber:

    /cucumber-test
    	├───Gherkin
    	│       GX-2_StoryTestSuite.feature
    	│
    	└───stepDefinitions
    			GX-2_StoryTestSuite.js
    ```

    -   La Nomenclatura de éste tipo de prueba se mantiene igual al normal (la misma nomenclatura mencionada arriba).

### RESUMEN:

![image](https://user-images.githubusercontent.com/91127281/209617125-ec3b7ed9-0495-4860-adba-547ed2d3a243.png)

# CÓMO EMPEZAR:

1. **Clona el Proyecto**:
    ```
    git clone https://github.com/upex-galaxy/L1-cypex-demo.git
    ```

---

2. **Instala todas las dependencias**:
    ```
    npm ci
    ```
    - (el commando `ci` es para instalar todas las Dependencias Locked del Proyecto)

---

3. **Para abrir la App de Cypress, corre el comando**:
    ```
    npm test
    ```
    - también puede usar `npx cypress open` (ya que en Package.json tenemos la variable "test" como el "cypress open") para abrir Cypress.

---

4. **Para correr pruebas y generar Reportes XML y HTML, ejecuta**:
    ```
    npm run file */**/<filename>
    ```
    - donde la variable "file" es:
      `cypress run --browser chrome --reporter cypress-multi-reporters --reporter-options configFile=jsconfig.json --record --key {key} --spec`, cuyo
      atajo es para que podamos correr las pruebas de un directorio que especifiquemos, usando el navegador de Chrome, generando 1 Reporte XML para
      importar a Jira y otro para generar un hermoso html, y adicionalmente actualizar el Cypress Dashboard del Proyecto.

---

5. **Para generar el archivo JSON Cucumber y Reporte HTML,**
    - _Primero Descarga el Formatter según tu OS:_
        - [Json-Formatter for Windows](https://github.com/cucumber/json-formatter/releases/download/v19.0.0/cucumber-json-formatter-windows-amd64)
        - [Json-Formatter for Linux](https://github.com/cucumber/json-formatter/releases/download/v19.0.0/cucumber-json-formatter-linux-amd64)
        - [Json-Formatter for MacOs](https://github.com/cucumber/json-formatter/releases/download/v19.0.0/cucumber-json-formatter-darwin-amd64)
    - _Luego mueve el archivo descargado a la carpeta `cucumber-formatter` de este proyecto en tu repositorio local_
    - _y Sigue estas instrucciones de instalación:_ [github.com/cucumber/json-formatter](https://github.com/cucumber/json-formatter)
    - _Modifica el archivo: `.cypress-cucumber-preprocessorrc.json`, para cambiar el nombre del formatter:_
        - Renombra: `cucumber-json-formatter.exe` por `cucumber-json-formatter` si usas Linux o MacOs.
    - _Luego podrás generar archivo JSON de Cucumber para Importar las Pruebas a Jira._
    - _Para poder generar archivos HTML de Cucumber luego de correr las pruebas, Ejecuta:_
        ```
        npm run report:cucumber
        ```
        - donde la variable "report:cucumber" es igual a: `node ./cucumber-html-report.js` cuyo atajo es para generar el Reporte Cucumber index.html
          en la carpeta `reports/cucumber-html-report` para evaluar TODOS el Resultado de Prueba Cucumber.

---

6. **Para correr una REGRESIÓN y generar un solo Reporte HTML global, ejecuta**:
    ```
    npm run regression:report
    ```
    Luego ejecuta estos comandos, uno por uno:
    ```
    npm run report:json
    npm run report:html
    ```
    - Gracias a esto se va a generar un único Reporte mochawesome HTML para evaluar TODOS los Resultados de Prueba de la Regresión.

---

7. **AHORA CON CYPRESS DASHBOARD**, puedes ver todas las ejecuciones y resultados de prueba del proyecto! Visita:
   [CYPRESS DASHBOARD](https://dashboard.cypress.io/projects/2pw67q/analytics/runs-over-time)

---

# PLAN DE PRUEBA: ESTRATEGIA Y DISEÑO

### 🚩NORMATIVAS A SEGUIR:

1. Perfecta Nomenclatura del nombre de Archivo de prueba: <br> `{GX-ID}-{StoryShortName}.{extensionFile} ej: GX-50-AgregarItemsAlCart.cy.js`
2. Archivo de Prueba dentro del directorio del Componente correspondiente, ejemplo: <br> `cypress/e2e/Tests/ComponentName/GX-1-StoryTestSuite.cy.js`.
3. Buen diseño del Test Suite elaborado (Esto implica que se vean bien el código en general, que al menos funcione).
4. Tener el Markdown de la US en la carpeta Test-Plan en su correspondiente carpeta Sprint, ejemplo: <br>
   `cypress/test-plan/in-sprint/sprint-9/userStory.md`<br> Esto implica que cada vez que se trabaje en un Sprint nuevo, se debería crear la carpeta
   correspondiente "sprint-" + número del sprint, como se muestra en el ejemplo arriba.
5. NO usar fixture como PageObjectModel sino como Data (es decir, no agarrar elementos Web por fixtures, sino usar el Fixture para iterar Data o
   reutilizar variables).
    - Previamente en GX, se usaba el patrón Fixture como POM, porque era fácil de aprender, pero hoy en día las entrevistas técnicas piden PageObject
      Model de la manera tradicional, sin usar Commands.
6. Los "Cypress Commands" no es un uso obligatorio; pero si se quiere usar, debería aplicarse para hacer funciones de algoritmos para múltiples suites
   o para generar precondiciones repetitivas (Background).

7. **En caso de usar Fixtures**: Chequear que el archivo ".json" esté dentro de la carpeta correspondiente al componente, ejemplo: <br>
   `cypress/fixtures/account/example.json`.
8. **En caso de usar PageObjectModel**: Chequear que el "Page.js" esté dentro de la carpeta "pages" en la de "support", ejemplo: <br>
   `cypress/support/pages/example.Page.js`.
9. **En caso de usar Commands**: Asegurarse de aplicarlo para crear pasos de Precondiciones o Scripts de Algoritmos complejos (NO USAR como Pasos de
   Acción, eso sería tarea para el POM).
10. **En caso de usar el CI Pipeline**: Usar únicamente el archivo predeterminado del proyecto `sanity.yml`, y asegurarse de modificarlo correctamente
    (Solo cambiar el Path del Test Suite y el parámetro de Importación TX para Jira) y no borrar o cambiar nada más, que funcione y pase los Checks.
    El archivo `regression.yml` se ejecutará automaticamente cuando los cambios hayan mergeado a QA.
11. **En caso de usar Cucumber**: Chequear que el archivo Gherkin (.feature) y los StepDefinitions (.js) estén correctamente diseñados y que la
    Ejecución en CI funcione y pase los Checks.

---

# 🚩NIVELES DE TESTER QA en UPEX Galaxy:

El programa **UPEX Galaxy** está diseñado para guiar a los Testers a través de 2 Etapas (Career Paths). Cada Etapa conlleva ciertos **NIVELES** que el
Tester debe alcanzar para llegar a su mayor **SENIORITY**:

## QA Engineer (Pruebas Manuales)

Capacidad de realizar análisis, planificación, ejecución y gestión de:

-   Pruebas Manuales de UI
-   Bases de Datos
-   API Testing

### 🧪L1

Capaz de realizar tareas (US) sencillas de frontend sin mucha complejidad.

##### Prácticas:

-   Entiende y puede seguir guías y protocolos de prueba previamente definidos.
-   Identifica errores obvios en la interfaz y reporta con claridad.
-   Familiarizado con herramientas básicas de testing y reporting.
-   Capaz de realizar pruebas de regresión siguiendo casos de prueba definidos.

### 🧪L2

Capaz de realizar tareas (US) avanzadas de frontend y también tareas de Backend (Pruebas de Bases de Datos y Pruebas de API).

##### Prácticas:

-   Realiza pruebas exploratorias identificando puntos críticos en las aplicaciones.
-   Puede diseñar casos de prueba simples basados en requisitos.
-   Familiarizado con SQL básico para realizar pruebas en Bases de Datos.
-   Inicia pruebas básicas en APIs usando herramientas como Postman o similares.
-   Entiende la importancia de ciclos de vida de defectos y los gestiona correctamente.

### 🧪L3

Capaz de realizar tareas (US) de performance y/o diseñar nuevas Historias de Usuario.

##### Prácticas:

-   Diseña y ajusta casos de prueba complejos basados en cambios de requisitos.
-   Identifica y reporta problemas de rendimiento usando herramientas básicas.
-   Realiza pruebas exploratorias avanzadas e identifica áreas no cubiertas.
-   Gestiona los Planes de Prueba (Cobertura, Regresión, Sanity, Smoke) de manera efectiva.
-   Ofrece guía y mentoría a testers de niveles inferiores (Capacidad de ser Tutor).
-   Tiene una comprensión básica sobre automatización de pruebas.

## QA Automation Engineer (Pruebas Automatizadas)

Capacidad de realizar análisis, planificación, ejecución y gestión de:

-   Pruebas Automatizadas de E2E
-   Integration Testing (Aplicando para cualquiera de los Frameworks de automatización de Browsers/Apps)

### 🧪L3

Capaz de realizar tareas (TechDept) para Automatizar pruebas UI de historias implementadas.

##### Prácticas:

-   Capaz de manejar el flujo completo de trabajo ordinario.
-   Capaz de realizar pruebas Frontend con data sin iteración (hardcodeada).
-   Capaz de realizar Page-Object-Model básico.
-   Capaz de realizar controles de versionado de código (conocimiento básico en GIT).

### 🧪L4

Capaz de realizar tareas (TD) para Automatizar pruebas complejas y de integración de historias implementadas.

##### Prácticas:

-   Capacidad de resolución de problemas y conflictos de pruebas (Debugging).
-   Capaz de realizar pruebas E2E con data en iteración (Parametrizadas).
-   Capaz de escribir código con Excelentes prácticas y principios (POM, “DRY”, etc.).
-   Capaz de escribir scripts de prueba con Estructura de Datos, condicionales, bucles, etc.
-   Capaz de entender y ejecutar Pipelines de Regresión en Continuous Integration (CI).
-   Capaz de escribir scripts de prueba para intercepción y assertions de API Testing.

### 🧪L5

Capaz de realizar cualquier tarea (TD) de Automatización y gestionar los Planes de Prueba.

##### Prácticas:

-   Capacidad de resolución de conflictos de GIT con facilidad.
-   Capacidad de resolución de problemas de ambientes y errores de config del Repo.
-   Capaz de realizar Planes de Prueba generales y para Automatización de pruebas.
-   Capaz de planificar, armar y hacer funcionar los Repositorios de Automatización de Prueba.
-   Capaz de configurar integraciones de aplicaciones de Reporte de Prueba con el Repo.
-   Capaz de realizar pruebas automatizadas de Performance (con ciertas herramientas).

---

### 🧙🏻‍♂️APRENDE Y GANA EXPERIENCIA COMO QA AUTOMATION EN UPEX GALAXY🚀

Suscríbete a un Sprint y trabaja como un QA Automation Engineer!

### 🚩ENTRA EN [UPEXDOCU](https://linktree.com/upexjira) Y BUSCA LAS GUÍAS DE CYPRESS AL GRANO!

---

## CURSO YOUTUBE DE CYPRESS AL GRANO:

-   [🛸SUPER RUTA: "AUTOMATION AL GRANO" (UPEX GALAXY)](https://www.youtube.com/playlist?list=PLLYWsphuMYKvqh3-hv2yVjTPJPoFSFOzg/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[vscode-logo]: https://img.shields.io/badge/VSCode-black?logo=visualstudiocode&style=for-the-badge
[vscode-site]: https://code.visualstudio.com/
[cypress-logo]: https://img.shields.io/badge/Cypress-black?logo=cypress&style=for-the-badge
[cypress-site]: https://www.cypress.io
[javascript-logo]: https://img.shields.io/badge/JavaScript-black?logo=javascript&style=for-the-badge
[javascript-site]: https://www.javascript.com/
