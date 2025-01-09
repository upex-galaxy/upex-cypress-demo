export interface Auth {
	key: string;
	token: string;
}

export interface RequestData {
	url: string;
	data?: {
		method?: string;
		[key: string]: any;
	};
}

export enum AuthType {
	bearer = 'Bearer'
}
