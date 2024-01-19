import TestSuite from './GX3-1313-DatePicker.TestSuite';

class Main {
	constructor() {
		this.testSuite = new TestSuite();
	}

	run() {
		describe('GX3-1313 | TS: ⚡️ToolsQA | Widgets | Date Picker', () => {
			this.testSuite.run();
		});
	}
}

export default Main;
