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

function processEmail(email) {
	return email.toLowerCase();
}

function processData(data) {
	const emails = data.map((user) => processEmail(user.email));
	console.log(emails);
}

getData().then(processData);
processData(await getDataAsync());
