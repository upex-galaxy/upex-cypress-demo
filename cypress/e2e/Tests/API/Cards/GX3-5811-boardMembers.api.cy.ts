import { AuthenticateAPI } from '@helper/Authenticate.api';
import { AuthType } from '@helper/types/AuthenticateTypes.api';

import { BoardMembersPage } from '@pages/GX3-5811_boardMembersPage.api';
import { type UserData, type ApiResponse } from '@pages/types/GX3-5811_boardMembersTypes.api';

describe('GX3-5811 | Trello (API) | Members | API Endpoint: Get the Members of a Board', () => {
	const authTrello = new AuthenticateAPI();
	const boardMembersPage = new BoardMembersPage();

	let fixtureData: UserData;
	let authHeader: string = '';

	before('PRC: El usuario tiene que tener boards con miembros y estar conectado', function () {
		cy.fixture('data/API/GX3-5811-boardMembers')
			.then((data: UserData) => {
				fixtureData = data;
			})
			.then(() => {
				const token = Cypress.env('TRELLO_TOKEN') as string;
				const key = Cypress.env('TRELLO_KEY') as string;

				if (!token || !key) {
					throw new Error('Las variables de entorno TRELLO_TOKEN o TRELLO_KEY no están definidas.');
				}

				fixtureData.auth.token = token;
				fixtureData.auth.key = key;

				authTrello.setCredentials(fixtureData.auth, AuthType.bearer);

				const urlGetMemberId = authTrello.buildUrl(fixtureData.url.get.userIdMember, {
					protocol: fixtureData.url.protocol,
					host: fixtureData.url.host,
					basePath: fixtureData.url.basePath,
					username: fixtureData.data.username,
					endPath: fixtureData.url.endPath,
					myKey: fixtureData.auth.key,
					myToken: fixtureData.auth.token
				});

				const requestData = {
					url: urlGetMemberId,
					data: {
						method: 'GET'
					}
				};

				authTrello.authenticate(requestData).then((header: string) => {
					authHeader = header;

					boardMembersPage.getUserId(authHeader, urlGetMemberId).then(idUser => {
						fixtureData.data.idUser = idUser;
					});

					const urlPostBoard = authTrello.buildUrl(fixtureData.url.post.board, {
						protocol: fixtureData.url.protocol,
						host: fixtureData.url.host,
						basePath: fixtureData.url.basePath,
						boardName: fixtureData.data.boardName,
						endPath: fixtureData.url.endPath,
						myKey: fixtureData.auth.key,
						myToken: fixtureData.auth.token
					});

					boardMembersPage.createBoard(authHeader, urlPostBoard).then(idBoard => {
						fixtureData.data.idBoard = idBoard;

						const urlPutMemberToBoard = authTrello.buildUrl(fixtureData.url.put.memberToBoard, {
							protocol: fixtureData.url.protocol,
							host: fixtureData.url.host,
							basePath: fixtureData.url.basePath,
							idBoard: fixtureData.data.idBoard,
							idMember: fixtureData.data.idUser,
							endPath: fixtureData.url.endPath,
							myKey: fixtureData.auth.key,
							myToken: fixtureData.auth.token
						});

						boardMembersPage.assignMemberToBoard(authHeader, urlPutMemberToBoard);
					});
				});
			});
	});

	after('PSC: Delete created board.', () => {
		const urlDeleteBoard = authTrello.buildUrl(fixtureData.url.delete.board, {
			protocol: fixtureData.url.protocol,
			host: fixtureData.url.host,
			basePath: fixtureData.url.basePath,
			idBoard: fixtureData.data.idBoard,
			endPath: fixtureData.url.endPath,
			myKey: fixtureData.auth.key,
			myToken: fixtureData.auth.token
		});

		const requestData = {
			url: urlDeleteBoard,
			data: {
				method: 'DELETE'
			}
		};

		authTrello.authenticate(requestData).then((header: string) => {
			authHeader = header;

			boardMembersPage.deleteBoard(authHeader, urlDeleteBoard);
		});
	});

	it('GX3-5812 | TC01: Validar obtener miembros del tablero exitosamente.', () => {
		const URL_MEMBERS_BOARD = authTrello.buildUrl(fixtureData.url.get.membersBoard, {
			protocol: fixtureData.url.protocol,
			host: fixtureData.url.host,
			basePath: fixtureData.url.basePath,
			idBoard: fixtureData.data.idBoard,
			endPath: fixtureData.url.endPath,
			myKey: fixtureData.auth.key,
			myToken: fixtureData.auth.token
		});

		const requestData = {
			url: URL_MEMBERS_BOARD,
			data: {
				method: 'GET',
				idBoard: fixtureData.data.idBoard
			}
		};

		authTrello.authenticate(requestData).then((authHeader: string) => {
			cy.api({
				method: 'GET',
				url: URL_MEMBERS_BOARD,
				headers: {
					authorization: authHeader
				},
				failOnStatusCode: false
			}).then(response => {
				expect(response.status).to.eq(200);
			});
		});
	});

	it('GX3-5812 | TC02: Validar No obtener miembros del tablero cuando el IDBOARD es inexistente.', () => {
		const ID_BOARD = 'nonexistent';

		const URL_MEMBERS_BOARD = authTrello.buildUrl(fixtureData.url.get.membersBoard, {
			protocol: fixtureData.url.protocol,
			host: fixtureData.url.host,
			basePath: fixtureData.url.basePath,
			idBoard: ID_BOARD,
			endPath: fixtureData.url.endPath,
			myKey: fixtureData.auth.key,
			myToken: fixtureData.auth.token
		});

		const requestData = {
			url: URL_MEMBERS_BOARD,
			data: {
				method: 'GET',
				idBoard: ID_BOARD
			}
		};

		authTrello.authenticate(requestData).then((authHeader: string) => {
			cy.api({
				method: 'GET',
				url: URL_MEMBERS_BOARD,
				headers: {
					authorization: authHeader
				},
				failOnStatusCode: false
			}).then(response => {
				expect(response.status).to.eq(400);
			});
		});
	});

	it('GX3-5812 | TC03: Validar No obtener miembros del tablero cuando el IDBOARD es null.', () => {
		const ID_BOARD = null;

		const URL_MEMBERS_BOARD = authTrello.buildUrl(fixtureData.url.get.membersBoard, {
			protocol: fixtureData.url.protocol,
			host: fixtureData.url.host,
			basePath: fixtureData.url.basePath,
			idBoard: ID_BOARD,
			endPath: fixtureData.url.endPath,
			myKey: fixtureData.auth.key,
			myToken: fixtureData.auth.token
		});

		const requestData = {
			url: URL_MEMBERS_BOARD,
			data: {
				method: 'GET',
				idBoard: ID_BOARD
			}
		};

		authTrello.authenticate(requestData).then((authHeader: string) => {
			cy.api({
				method: 'GET',
				url: URL_MEMBERS_BOARD,
				headers: {
					authorization: authHeader
				},
				failOnStatusCode: false
			}).then(response => {
				expect(response.status).to.eq(400);
			});
		});
	});

	it('GX3-5812 | TC04: Validar obtener detalles de un miembro del tablero exitosamente.', () => {
		const URL_MEMBERS_BOARD = authTrello.buildUrl(fixtureData.url.get.membersBoard, {
			protocol: fixtureData.url.protocol,
			host: fixtureData.url.host,
			basePath: fixtureData.url.basePath,
			idBoard: fixtureData.data.idBoard,
			endPath: fixtureData.url.endPath,
			myKey: fixtureData.auth.key,
			myToken: fixtureData.auth.token
		});

		const requestData = {
			url: URL_MEMBERS_BOARD,
			data: {
				method: 'GET',
				idBoard: fixtureData.data.idBoard
			}
		};

		authTrello.authenticate(requestData).then((authHeader: string) => {
			cy.api({
				method: 'GET',
				url: URL_MEMBERS_BOARD,
				headers: {
					authorization: authHeader
				},
				failOnStatusCode: false
			}).then(response => {
				expect(response.status).to.eq(200);

				const myResponse: ApiResponse[] = response.body as ApiResponse[];

				if (myResponse.length > 0) {
					const URL_MEMBER_DATA = authTrello.buildUrl(fixtureData.url.get.memberData, {
						protocol: fixtureData.url.protocol,
						host: fixtureData.url.host,
						basePath: fixtureData.url.basePath,
						idUser: myResponse[0].id,
						endPath: fixtureData.url.endPath,
						myKey: fixtureData.auth.key,
						myToken: fixtureData.auth.token
					});

					cy.api({
						method: 'GET',
						url: URL_MEMBER_DATA,
						headers: {
							authorization: authHeader
						},
						failOnStatusCode: false
					}).then(response => {
						expect(response.status).to.eq(200);
					});
				}
			});
		});
	});

	it('GX3-5812 | TC05: Validar No obtener detalles de un miembro del tablero cuando el IDMEMBER es inexistente.', () => {
		const URL_MEMBER_DATA = authTrello.buildUrl(fixtureData.url.get.memberData, {
			protocol: fixtureData.url.protocol,
			host: fixtureData.url.host,
			basePath: fixtureData.url.basePath,
			idUser: 'nonexistent',
			endPath: fixtureData.url.endPath,
			myKey: fixtureData.auth.key,
			myToken: fixtureData.auth.token
		});

		const requestData = {
			url: URL_MEMBER_DATA,
			data: {
				method: 'GET',
				id: 'nonexistant'
			}
		};

		authTrello.authenticate(requestData).then((authHeader: string) => {
			cy.api({
				method: 'GET',
				url: URL_MEMBER_DATA,
				headers: {
					authorization: authHeader
				},
				failOnStatusCode: false
			}).then(response => {
				expect(response.status).to.eq(404);
			});
		});
	});

	it('GX3-5812 | TC06: Validar No obtener detalles de un miembro del tablero cuando el IDMEMBER es null.', () => {
		const URL_MEMBER_DATA = authTrello.buildUrl(fixtureData.url.get.memberData, {
			protocol: fixtureData.url.protocol,
			host: fixtureData.url.host,
			basePath: fixtureData.url.basePath,
			idUser: null,
			endPath: fixtureData.url.endPath,
			myKey: fixtureData.auth.key,
			myToken: fixtureData.auth.token
		});

		const requestData = {
			url: URL_MEMBER_DATA,
			data: {
				method: 'GET',
				id: 'nonexistant'
			}
		};

		authTrello.authenticate(requestData).then((authHeader: string) => {
			cy.api({
				method: 'GET',
				url: URL_MEMBER_DATA,
				headers: {
					authorization: authHeader
				},
				failOnStatusCode: false
			}).then(response => {
				expect(response.status).to.eq(404);
			});
		});
	});
});
