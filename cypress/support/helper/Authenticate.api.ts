import { AuthType, type Auth, type RequestData } from './types/AuthenticateTypes.api';

export class AuthenticateAPI {
	private authMethod: AuthType = AuthType.bearer;

	private strConnToken: string = '';

	constructor() {}

	public buildUrl(_template: string, _replacements: Record<string, string | null>): string {
		let builtUrl = _template;

		for (const [key, value] of Object.entries(_replacements)) {
			// eslint-disable-next-line no-negated-condition
			builtUrl = builtUrl.replace(`{{${key}}}`, value !== null ? value : '');
		}

		return builtUrl;
	}

	public setCredentials(_auth: Auth, _method?: AuthType) {
		this.authMethod = _method ?? AuthType.bearer;

		switch (_method) {
			case AuthType.bearer:
			default:
				this.strConnToken = _auth.token;
				break;
		}
	}

	private authenticateWithBearer(): Cypress.Chainable<any> {
		if (!this.strConnToken) {
			throw new Error('Bearer Token no está definido.');
		}

		const authHeader = `Bearer ${this.strConnToken}`;
		return cy.wrap(authHeader);
	}

	public authenticate(_requestData: RequestData): Cypress.Chainable<any> {
		switch (this.authMethod) {
			case AuthType.bearer:
			default:
				return this.authenticateWithBearer();
		}
	}
}
