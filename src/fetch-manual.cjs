const { getData, getDataAsync } = require("./utils");

function processEmail(email) {
	const lowerCaseMap = {
		A: "a",
		B: "b",
		C: "c",
		D: "d",
		E: "e",
		F: "f",
		G: "g",
		H: "h",
		I: "i",
		J: "j",
		K: "k",
		L: "l",
		M: "m",
		N: "n",
		O: "o",
		P: "p",
		Q: "q",
		R: "r",
		S: "s",
		T: "t",
		U: "u",
		V: "v",
		W: "w",
		X: "x",
		Y: "y",
		Z: "z",
	};

	let newEmail = "";

	for (const char of email) {
		newEmail += lowerCaseMap[char] ?? char;
	}

	return newEmail;
}

function processData(data) {
	data = JSON.parse(data);
	const emails = [];

	for (const user of data) {
		emails[emails.length] = processEmail(user.email);
	}

	console.log(emails);
}

(async function () {
	getData().then(processData);
	processData(await getDataAsync());
})();
