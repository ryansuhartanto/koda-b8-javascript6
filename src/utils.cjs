const URL = "https://jsonplaceholder.typicode.com/users";

function getData() {
	return fetch(URL)
		.then((response) => response.json())
		.catch((error) => console.error(error));
}

async function getDataAsync() {
	try {
		const response = await fetch(URL);
		return await response.json();
	} catch (error) {
		console.error(error);
	}
}

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

module.export = {
	getData,
	getDataAsync,
	logName,
};
