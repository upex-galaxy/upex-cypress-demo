class JsonDataHandler {
	private data: Record<string, any>;
	private allowedKeys: string[] | null;

	constructor() {
		this.data = {};
		this.allowedKeys = null;
	}

	setAllowedKeys(_allowedKeys: string[]): void {
		this.allowedKeys = _allowedKeys;
	}

	setData(_newData: Record<string, any>): void {
		for (const key of Object.keys(_newData)) {
			if (this.allowedKeys === null || this.allowedKeys.includes(key)) {
				this.data[key] = _newData[key];
			} else {
				console.warn(`Key "${key}" is not allowed and will not be set.`);
			}
		}
	}

	getData(): Record<string, any> {
		return this.data;
	}

	readValue(_key: string): any {
		return this.data[_key];
	}

	writeValue(_key: string, _value: any): void {
		if (this.allowedKeys === null || this.allowedKeys.includes(_key)) {
			this.data[_key] = _value;
		} else {
			console.warn(`Key "${_key}" is not allowed and will not be set.`);
		}
	}
}

export const objJsonDataHandler = new JsonDataHandler();
