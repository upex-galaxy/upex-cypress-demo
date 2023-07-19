Feature: ✅SwagLabs | Account | Iniciar sesión y BR de Accesos

	Background:
		#@PRC_GX-25305
		Given el usuario debe estar situado en la página de Login.

	@TC_GX-25299 @TS_GX-25292 @Login
	Scenario Outline: 25292 | TC1: Validar iniciar sesión con datos válidos
		When el usuario rellena el formulario ingresando Username as '<username>' y Password as '<password>' correcto
		Then el usuario debe ser redirigido al PLP como usuario loggeado
		And debe poder ver todos los items disponibles de la tienda.
		Examples:
			| username                | password     |
			| standard_user           | secret_sauce |
			| problem_user            | secret_sauce |
			| performance_glitch_user | secret_sauce |

	@TC_GX-25300 @TS_GX-25292 @Login
	Scenario Outline: 25292 | TC2: Validar No iniciar sesión con cuenta o datos inválidos
		When el usuario rellena el formulario ingresando Username as '<username>' y Password as '<password>'
		And hace click en el botón "LOGIN"
		Then debe aparecer un mensaje amigable indicando: '<mensaje>'
		And el sistema debe denegar el acceso al PLP
		Examples:
			| username        | password     | mensaje                                                                   |
			| locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out.                       |
			|                 | secret_sauce | Epic sadface: Username is required                                        |
			| standard_user   |              | Epic sadface: Password is required                                        |
			|                 |              | Epic sadface: Username is required                                        |
			| SuperAdmin      | qwerty_sauce | Epic sadface: Username and password do not match any user in this service |

	@TC_GX-25302 @TS_GX-25292 @Login
	Scenario Outline: 25292 | TC3: Validar No iniciar sesión usando solo el endpoint.
		When ingresa a un endpoint as '<endpoint>' interno de la website que requiera autorización
		Then el usuario debe ser redirigido a la página de Login
		And debe desplegarse un mensaje amigable indicando que no puede acceder sin antes iniciar sesión: '<mensaje>'
		Examples:
			| endpoint                                         | mensaje                                                                             |
			| https://www.saucedemo.com/inventory.html         | Epic sadface: You can only access '/inventory.html' when you are logged in.         |
			| https://www.saucedemo.com/cart.html              | Epic sadface: You can only access '/cart.html' when you are logged in.              |
			| https://www.saucedemo.com/checkout-step-two.html | Epic sadface: You can only access '/checkout-step-two.html' when you are logged in. |
			| https://www.saucedemo.com/checkout-complete.html | Epic sadface: You can only access '/checkout-complete.html' when you are logged in. |

