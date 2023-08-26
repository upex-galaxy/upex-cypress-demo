Challenge para QA:

QA Automation deberá de rellenar el formulario con datos aleatorios realizando solo el happy path.

La cobertura de los casos de prueba los podrá realizar aleatorios o estaticos.

Deberá presentar sus comentarios (Jira y Github) haciendo uso de reportes y generación de evidencias.

Deberá realizar aserciones de lo ingresado en cada input y que estos se encuentren registrados en el formulario.

El test deberá de ser realizado con POM (Page Object Model) y se aplicará el uso de la librería Faker para obtener palabras y número aleatorios (guía,
documentación)

Ten en cuenta que hay valores que no será necesario Faker para realizar una acción aleatoria (array’s por ejemplo)

As a QA learner,

I want to test:

Filling out a form with:

First Name

Last Name

Email

Mobile Number

Subjects

Current Address

Radio Buttons to choose Gender

Date Picker

Check Boxes to choose Hobbies

Upload picture

Select menu to chooise State and City

Button Register

And Submit it.

So that I can improve my testing skills for this scenario.

¡Recuerda aplicar buenas prácticas en tus commits! Realiza un commit por cada avance significativo y mantén los mensajes descriptivos y concisos.
Además, es fundamental mantener la nomenclatura de tu User Story de Jira en los commits para garantizar la trazabilidad de los cambios realizados.
Esto nos ayudará a mantener un historial de commits limpio y bien organizado, y facilitará la correlación entre tus contribuciones y los requisitos
del proyecto. Sigue trabajando para mantener una trazabilidad clara y completa en nuestro flujo de trabajo. ¡Avanzaremos al nivel 2 de Galaxy!

✅ACCEPTANCE CRITERIA

(This feature doesn’t need BDD AC - Please take a look into the BRS tab)

Attachments (2)

Subtasks

60% Done Issue type: Task GX-25825 Priority: Medium Elyer Maldonado

ACTIVE Issue type: Task GX-25826 Priority: Medium Karina Monzon

ACTIVE Issue type: Task GX-25827 Priority: Medium Elyer Maldonado

CLOSE Issue type: Task GX-25828 Priority: Medium Elyer Maldonado

CLOSE Issue type: Task GX-25829 Priority: Medium Elyer Maldonado

CLOSE Linked issues

is tested by Issue type: Test Set GX-25823 Priority: High Karina Monzon

DESIGNING

Issue type: Test Execution GX-25824 Priority: Medium Karina Monzon

ACTIVE

Test Coverage

Activity Show:

All

Comments

History

Work log

Estimate (async mode)

Newest first Profile image of Karina Monzon

Business rules spec FEATURE: Practice Form-Student Registration Form

Required fields to submit Form: “First Name”, “Last Name“, “Gender“, “Mobile Number” and “Date of Birth”.

For: “First Name”, “Last Name“

These fields cannot be empty

IF field is empty = No message is displayed after submitting and the field turns red

IF the field is filled = A popup appears with information uploaded when the data is submitted

For: “Email”

This field can be invalid, empty or filled.

This field is invalid when:

Does not contain “@”

Does not contain (minimum) 1 alphanumeric character before “@”

Does not contain (minimum) 1 alphanumeric character after “@”

Does not contain “.” after 1 alphanumeric character after “@”.

Does not contain (minimum) 2 alphanumeric characters after “.”

Mockup: “x@x.xx”

IF field is invalid = No message is displayed after submitting and the field turns red

IF field is empty = No message is displayed after submitting.

IF the field is filled correctly = A popup appears with information uploaded when the data is submitted

Radio Buttons to choose “Gender” (Gender is a required field to submit form)

Each Radio Buttons must have the following label, there are a total of 3:

Male

Female

Other

A popup appears with the information chosen when the data is submitted

For “Mobile Number”

This field cannot be empty and only can contain exactly 10 numbers

IF field is empty OR invalid = No message is displayed after submitting and the field turns red

IF the field is filled correctly = A popup appears with information uploaded when the data is submitted

Date Picker

The default value is Current Date

When a user makes clicks on the date appear a menu to choose the date of birth

For “Subjects”

These fields can´t be empty

IF field is empty = No message is displayed after submitting

IF the field is filled =A popup appears with information uploaded when the data is submitted

Check Boxes to choose Hobbies

Each Check Boxes must have the following label, there are a total of 3:

Sports

Reading

Music

A popup appears with the information chosen when the data is submitted

Upload picture

IF the user makes clicks on “Select picture” button

THEN The Explorer is opened to select the file to upload

WHEN the user chooses the picture AND makes clicks to open

THEN the picture is uploaded in the form

IF the picture is uploaded =A popup appears with picture uploaded when the data is submitted

Select the menu to choose State and City

For “Current Address”

These fields can be empty

IF field is empty = No message is displayed after submitting

IF the field is filled =A popup appears with information uploaded when the data is submitted
