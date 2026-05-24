/**
 * Log a name after a specified delay in seconds
 * @param {string} name Displayed name
 * @param {number} delay Delay in seconds
 */
function logName(name, delay) {
	return new Promise((resolve, reject) => {
		if (typeof delay !== "number" || delay < 0) {
			reject("Delay must be a positive number.");
			return;
		}

		setTimeout(() => {
			console.log(name);
			resolve();
		}, delay * 1000);
	});
}

function main() {
	logName("John", 1.5)
		.then(() => logName("Ed", 1.0))
		.then(() => logName("Jane", 0.5))
		.catch((message) => {
			console.log(`Error: ${message}`);
		});
}

main();
