// Precondiciones:
//		* Instalar dependencia: cypress-file-upload
// 		* Tener un file en un folder de Fixture (en este caso tenemos el folder "images" y dentro un file)
// Para subir un archivo usamos el método ".attachFile()" o mejor ".selectFile()"
// Esto lo hacemos luego de localizar el elemento botón para hacerlo.
// Tomen en cuenta que: se puede subir varios elementos a la vez, se puede hacer Drag-Drop y más!

//	 FORMAS DE REALIZAR UN UPLOAD DE ARCHIVO:

describe('Ejemplo para demostrar cómo cargar un archivo con Cypress', () =>
{
	before(() =>
	{
		cy.visit('https://the-internet.herokuapp.com/upload')
	})
	it('File Upload using cypress-file-upload npm package', () =>
	{
		const filepath = 'images/upex.png'
		cy.get('input[type="file"]').attachFile(filepath)
		// Aquí usamos la sintaxis Método(directorioDelArchivo)
		cy.get('#file-submit').click()
		cy.get('#uploaded-files').contains('upex.png')
	})
})

describe('También se puede usar el método .selectFile() ya que viene con más opciones', () =>
{
	before(() =>
	{
		cy.visit('https://the-internet.herokuapp.com/upload')
	})
	it('File Upload using cypress-file-upload npm package', () =>
	{
		const filepath = 'cypress/fixtures/images/upex.png' //Usamos el Relative Path del archivo
		cy.get('#file-upload').selectFile(filepath)
		// Aquí usamos la sintaxis Método(directorioDelArchivo)
		cy.get('#file-submit').click()
		cy.get('#uploaded-files').contains('upex.png')
	})
})

describe('Ejemplo de .selectFile() con la opción de Drag-Drop', () =>
{
	before(() =>
	{
		cy.visit('https://the-internet.herokuapp.com/upload')
	})
	it('File Upload using cypress-file-upload npm package', () =>
	{
		const filepath = 'cypress/fixtures/images/upex.png' //Usamos el Relative Path del archivo
		cy.get('#file-upload').selectFile(filepath,{action: "drag-drop"})
		// Aquí usamos la sintaxis Método(directorioDelArchivo, {opciónDeInteracción})
		cy.get('#file-submit').click()
		cy.get('#uploaded-files').contains('upex.png')
	})
})

describe('Ejemplo de .selectFile() con la opción Múltiples archivos', () =>
{
	before(() =>
	{
		cy.visit('https://the-internet.herokuapp.com/upload')
	})
	it('File Upload using cypress-file-upload npm package', () =>
	{
		const file1 = 'cypress/fixtures/images/upex.png' //Usamos el Relative Path del archivo
		const file2 = 'cypress/fixtures/images/upexgalaxy.gif' //Usamos el Relative Path del archivo
		cy.get('#file-upload').selectFile([file1,file2]) //Si vamos a agregar más de un File, usamos un Array
		// Aquí usamos la sintaxis Método(directorioDelArchivo, {opciónDeInteracción})
		cy.get('#file-submit').click()
		cy.get('#uploaded-files').contains('upexgalaxy.gif')
	})
})