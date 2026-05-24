const URL = "https://jsonplaceholder.typicode.com/users";

function getData() {
	return fetch(URL)
		.then((response) => response.text())
		.catch((error) => console.error(error));
}

async function getDataAsync() {
	try {
		const response = await fetch(URL);
		return await response.text();
	} catch (error) {
		console.error(error);
	}
}

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

getData().then(processData);
processData(await getDataAsync());
