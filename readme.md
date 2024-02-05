

[![vscode-logo]][vscode-site] [![cypress-logo]][cypress-site] [![javascript-logo]][javascript-site] [![typescript-logo]][typescript-site]

# 🧪Testing Automation - Cypress 13👨🏻‍🚀 PRO

![UPEX's Banners (linkedin) (1)](https://user-images.githubusercontent.com/91127281/189470339-acea5782-16f1-4f06-9ce0-df54fd3ead9d.png)

Cypress es el MEJOR FRAMEWORK DE AUTOMATION E2E actualmente! No hay rival! Además de que es el framework más amigable para aprender! Aunque no es el
único E2E en el mercado, y tampoco es el más usado como sí lo es Selenium. Pero es el MÁS POPULAR!

Cypress es un Framework de Automatización de Next Generation construido para web modernas. Esto es im simple proyecto el cual puedes usarlo para
comenzar tu viaje por la Galaxia de la Automatización!

## ESTRUCTURA DE PROYECTO

Ahora el Directorio de UPEX Galaxy, será mucho más simple.

-   Para la carpeta `Tests`:

    -   Cada Suite de US, deberá ser guardado en una carpeta del Componente correspondiente del SUT (ej: ShoppingCart),
    -   y la nomenclatura de archivos cambia a ser más directa:

    ```
    {GX-ID}_{NombreCortoDeLaStory}

    como ejemplo: "GX3-50_shoppingCart.cy.js".

    ejemplo de estructura:
    /Tests
    	├───Checkout
    	│       GX3-50_shoppingCart.cy.js
    ```

### RESUMEN:

![image](https://user-images.githubusercontent.com/91127281/209617125-ec3b7ed9-0495-4860-adba-547ed2d3a243.png)

# CÓMO EMPEZAR:

**Precondición**:
- Asegúrate de usar el Gestor de Paquete "YARN" en este proyecto en lugar de npm; para un mejor rendimiento de control de dependencias.
- Si aún no tienes instalado `yarn` en tu maquina, puedes hacerlo simplemente corriendo en la terminal: `npm i -g yarn` 


1. **Clona el Proyecto**:
    ```
    git clone https://github.com/upex-galaxy/L1-cypex-demo.git
    ```

---

2. **Instala todas las dependencias del proyecto (incluyendo Cypress) con yarn**:
    ```
    yarn
    ```
    - (correr `yarn` así solo, es para instalar todas las Dependencias Locked del Proyecto por el yarn.lock y el package.json)

---

3. **IMPORTANTE antes de continuar, ABRE CYPRESS, para verificar sus dependencias**:
    ```
    yarn test
    ```
    - también puede usar `npx cypress open` (ya que en Package.json tenemos la variable "test" como el "cypress open") para abrir Cypress.

---

4. **Para correr pruebas y generar Reportes XML y HTML, ejecuta**:
    ```
    yarn test:run <coloca_aqui_tu_path_archivo_de_prueba>
    ```
    - cuyo script "test:run" es:
      `cypress run --browser electron --spec`, 
      el cual es un atajo es para que podamos correr las pruebas de un directorio que especifiquemos, usando el navegador de electron, generando 1 Reporte XML y HTML para posteriormente
      importar a Jira con el XML y generar un hermoso Reporte en el navegador con el HTML.
---

5. **Para correr una REGRESIÓN y generar un solo Reporte HTML global, ejecuta**:
    ```
    yarn test:ci:regression
    ```
    Luego ejecuta:
    ```
    yarn report
    ```
    - Gracias a esto se va a generar un único Reporte mochawesome HTML para evaluar TODOS los Resultados de Prueba de la Regresión.

---

7. **AHORA CON CYPRESS DASHBOARD**, puedes ver todas las ejecuciones y resultados de prueba del proyecto! 
    - Este Proyecto de los Repos de UPEX Galaxy es público. Puedes visitarlo:
   [CYPRESS DASHBOARD](https://dashboard.cypress.io/projects/2pw67q/analytics/runs-over-time)

---

# PLAN DE PRUEBA: ESTRATEGIA Y DISEÑO

### 🚩NORMATIVAS A SEGUIR:

1. **Perfecta Nomenclatura del nombre de Archivo de prueba**: <br> `{GX-ID}_{FeatureName}.{cy.js/ts}` ejemplo: `GX3-50_checkout.cy.ts`. <br> 
    **IMPORTANTE**: Realmente un archivo de prueba debería verse como `checkout.cy.ts` y alojar aquí todas las US relacionadas a la feature del Checkout por cada "describe" de cypress. PERO al ser un Repo "EDUCATIVO", y tenemos muchos estudiantes trabajando en misma US, trabajamos con esta específica nomenclatura, mientras que todo lo demás es completamente realista.
2. **Archivo de Prueba dentro del directorio del Componente correspondiente**, ejemplo: <br> `cypress/e2e/Tests/Elements/GX3-116_buttons.cy.ts`.
3. **Buen diseño del Test Suite elaborado** (Esto implica que se vean bien el código en general, que al menos funcione).
4. **Tener el Markdown de la US** en la carpeta `coverage` en su correspondiente carpeta Sprint, ejemplo: <br>
   `coverage/S34/GX3-1476.md`<br> Esto implica que cada vez que se trabaje en un Sprint nuevo, se debería crear la carpeta correspondiente "S" + número del sprint, como se muestra en el ejemplo arriba.
5. **NO usar fixture como PageObjectModel** sino como Data (es decir, no agarrar elementos Web por fixtures, sino usar el Fixture para iterar Data o reutilizar variables).
6. **Los "Cypress Commands" no es un uso obligatorio**; pero si se quiere usar, debería aplicarse para hacer funciones de algoritmos para múltiples suites o para generar precondiciones repetitivas (Background).
7. **En caso de usar Fixtures**: Chequear que el archivo ".json" esté dentro de la carpeta correspondiente al componente, ejemplo: <br>
   `cypress/fixtures/account/example.json`.
8. **En caso de usar PageObjectModel**: Chequear que el "Page.js" esté dentro de la carpeta "pages" en la de "support", ejemplo: <br>
   `cypress/support/pages/Example.Page.ts`.
9. **En caso de usar Commands**: Asegurarse de aplicarlo para crear pasos de Precondiciones o Scripts de Algoritmos complejos (NO USAR como Pasos de
   Acción, eso sería tarea para el POM).
10. **En caso de usar el CI Pipeline**: Sigue las instrucciones del archivo `sanityTemplate.yml`, para que copies el código del mismo y lo pegues en tu propio archivo yml con la terminología: `sanityTuNombre.yml` y asegurarse de modificarlo correctamente
    (Solo cambiar el Path del Test Suite y el parámetro de Importación TX para Jira) y no borrar o cambiar nada más, que funcione y pase los Checks.
    En cambio, el archivo `regression.yml` se ejecutará automaticamente cuando los cambios hayan mergeado a QA.

---

# 🚩NIVELES DE TESTER QA en UPEX Galaxy:

El programa **UPEX Galaxy** está diseñado para guiar a los Testers a través de "Niveles Estelares" de Galaxy. Cada Nivel conlleva ciertas **Prácticas** que el Tester debe dominar para reconocer el recorrido que lleva y hasta dónde puede llegar para alcanzar a su mayor **SENIORITY**.
Comenzando con los Niveles L1 y L2 que son de un Tester Manual (QA Engineer sin herramientas de Automatización), luego sigue los Niveles L3, L4 y L5 para QA Automation Engineer, los cales son:

## ✅ Nivel L3
En este nivel, el Tester es capaz de realizar tareas de pruebas de performance, automatizar pruebas UI de historias implementadas o diseñar nuevas Historias de Usuario como Analista Funcional, además del nivel anterior.

### Prácticas:
- Diseña y ajusta casos de prueba complejos basados en cambios de requisitos.
- Identifica y reporta problemas de rendimiento utilizando herramientas básicas.
- Realiza pruebas exploratorias avanzadas e identificar áreas no cubiertas.
- Gestiona los Planes de Prueba (Cobertura, Regresión, Sanity, Smoke) de manera efectiva.
- Ofrece guía y mentoría a Testers de niveles inferiores (Capacidad de ser Tutor).
- Tiene una comprensión básica sobre automatización de pruebas.
- Maneja el flujo de QA Automation completo de trabajo ordinario.
- Realiza pruebas Frontend con datos sin iteración (hardcodeados).
- Implementa el modelo Page-Object-Model a nivel básico.
- Tiene Habilidades básicas de GIT (control de versionado de código).

> A partir de L3, se abre el segundo camino de UPEX Galaxy, que se centra en especializarse en pruebas automatizadas de cualquier especialidad como "QA Automation Engineer". A partir de aquí se abre su camino hacia el L4.

## 🛡️ El 2do camino: Especialización como “QA Automation Engineer” (Pruebas Automatizadas)
Capacidad de analizar, planificar, ejecutar y gestionar:
- Pruebas Automatizadas de E2E
- Pruebas Automatizadas de Integration Testing
- Pruebas Automatizadas de Performance.
- Etc.

## 🐲 NIVELES:

### ✅ Nivel L4
Capaz de realizar tareas de Deuda Técnica (TD) para Automatizar pruebas complejas de historias implementadas y pruebas de Integración. Además de lo anterior también posee habilidades adicionales.

#### Prácticas:
- Resuelve problemas y conflictos de pruebas (Debugging).
- Realiza pruebas E2E con datos en iteración (Parametrizadas).
- Escribe código con excelentes prácticas y principios (POM, "DRY", etc.).
- Escribe scripts de prueba con estructura de datos, condicionales, bucles, etc.
- Entiende y ejecuta Pipelines de Regresión en Continuous Integration (CI).
- Escribe scripts de prueba para intercepción y assertions de API Testing.
- Puede ser Tutor de Tester L1, L2 y L3.

### ✅ Nivel L5
Capaz de realizar cualquier tarea (TD) de Automatización y gestionar los Planes de Prueba.

#### Prácticas:
- Resuelve conflictos de GIT con facilidad.
- Resuelve problemas de ambientes y errores de configuración del Repositorio.
- Realiza Planes de Prueba generales y para Automatización de pruebas.
- Planifica, arma y hace funcionar los Repositorios de Automatización de Prueba.
- Configura integraciones de aplicaciones de Reporte de Prueba con el Repositorio.
- Realiza pruebas automatizadas de rendimiento (con ciertas herramientas).
- Puede ser Tutor de cualquier nivel de Tester, incluso de otro L5.

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
[typescript-logo]: https://img.shields.io/badge/TypeScript-black?logo=typescript&style=for-the-badge
[typescript-site]: https://www.typescriptlang.org/
