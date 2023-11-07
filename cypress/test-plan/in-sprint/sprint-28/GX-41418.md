GX-41418 | TS: 🪶ToolsQA | Elements | Text Box: Fill form and Submit

Business rules

For: “Full Name”, “Current Address” and “Permanent Address”

These fields can be empty or filled.

IF field is empty = No log message is displayed after submitting.

IF field is filled = String is displayed below as a paragraph after submitting.

For: “Email”

This field can be invalid, empty or filled.

This field is invalid when:

Does not contain “@”

Does not contain (minimum) 1 alphanumeric character before “@”

Does not contain (minimum) 1 alphanumeric character after “@”

Does not contain “.” after: 1 alphanumeric character after “@”.

Does not contain (minimum) 2 alphanumeric characters after “.”

Mockup: “x@x.xx”

IF field is invalid = class="mr-sm-2 field-error form-control" is displayed as a red border.

IF field is empty = No log message is displayed after submitting.

IF field is filled = String is displayed below as a paragraph after submitting.

Validaciones:

41426| TC1: Validar  ingresar al formulario con datos validos

41426| TC2: Validar no poder ingresar el formulario cuando el “email” no contenga @

41426| TC3 Validar no poder ingresar el formulario cuando el “email” no contenga un 1 carácter alfanuméricos antes del “@”

41426| TC4 Validar no poder ingresar el formulario cuando el “email” no contenga 1 carácter alfanuméricos  después del @

41426 TC5 Validar no poder ingresar el formulario cuando el “email” no contenga 1 carácter alfanuméricos  antes del “.”

41426| TC6 Validar no poder ingresar el formulario cuando el “email” no contenga 1 carácter alfanuméricos  después del “.”
