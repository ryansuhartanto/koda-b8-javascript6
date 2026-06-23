const { getData, getDataAsync } = require("./utils");

function processEmail(email) {
	return email.toLowerCase();
}

function processData(data) {
	const emails = data.map((user) => processEmail(user.email));
	console.log(emails);
}

(async function () {
	getData().then(processData);
	processData(await getDataAsync());
})();
