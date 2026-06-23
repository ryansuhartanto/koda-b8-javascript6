const { logName } = require("./utils");

function main() {
	logName("John", 1.5)
		.then(() => logName("Ed", 1.0))
		.then(() => logName("Jane", 0.5))
		.catch((message) => {
			console.log(`Error: ${message}`);
		});
}

main();
