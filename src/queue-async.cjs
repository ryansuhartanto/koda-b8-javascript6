const { logName } = require("./utils");

async function main() {
	try {
		await logName("John", 1.5);
		await logName("Ed", 1.0);
		await logName("Jane", 0.5);
	} catch (message) {
		console.log(`Error: ${message}`);
	}
}

main();
