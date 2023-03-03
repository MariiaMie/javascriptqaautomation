function myFunction() {
	const element = document.getElementById("id01");
	element.innerHTML = "New Heading";
}

function myColorChange() {
	const element = document.getElementById("id01");
	element.style.color = "red";
}

const przesylka = {
	name: "",
	ulica: "",
};

const przesylka2 = {
	name: "",
	ulica: "",
};

przesylka2.waga = 20;
przesylka.name = "List";
przesylka2.name = "Paczka";

// function mojaFunkcja1() {
// 	const element = document.getElementById("id01");
// 	informacja = "Typ twojej przesyłki to: " + przesylka.name;
// 	element.innerHTML = informacja;

// 	const element2 = document.getElementById("id02");
// 	informacja = "Waga twojej przesyłki to: " + przesylka.waga + " kg";
// 	element2.innerHTML = informacja;
// }

// function mojaFunkcja2() {
// 	const element = document.getElementById("id01");
// 	informacja = "Typ twojej przesyłki to: " + przesylka2.name;
// 	element.innerHTML = informacja;

// 	const element2 = document.getElementById("id02");
// 	informacja = "Waga twojej przesyłki to: " + przesylka2.waga + " kg";
// 	element2.innerHTML = informacja;
// }

function mojaFunkcja(id) {
	const element = document.getElementById("id01");
	const element2 = document.getElementById("id02");

	if (id === 1) {
		// instrukcja warunkowa dotycząca informacji w sprawie przesyłki 1
		informacja = "Typ twojej przesyłki to: " + przesylka.name;
		element.innerHTML = informacja;

		informacja = "Waga twojej przesyłki to: " + przesylka.waga + " kg";
		element2.innerHTML = informacja;
	} else if (id === 2) {
		// instrukcja warunkowa dotycząca informacji w sprawie przesyłki 2
		informacja = "Typ twojej przesyłki to: " + przesylka2.name;
		element.innerHTML = informacja;

		informacja = "Waga twojej przesyłki to: " + przesylka2.waga + " kg";
		element2.innerHTML = informacja;
	}
}

// const clients = ["Mango", "Poly", "Ajax"];
// let message;

// for (const client of clients) {
// 	if (client === imie) {
// 		message = "Klient z takim imieniem jest w bazie danych!";
// 		break;
// 	}

// 	message = "Nie znaleźliśmy takiego klienta w bazie danych!";
// }

// console.log(message);

//function mojaFunkcja() {
//for (let i = 0; i <= 20; i += 5) {
//console.log(i);
//}
//}

// function mojaFunkcja() {
// 	const target = 4;
// 	let sum = 0;

// 	for (let i = 0; i < target; i += 1) {
// 		console.log("Twoje i wynosi: " + i);
// 		console.log("Obliczenie: " + sum + " + " + i + " =");
// 		sum += i;
// 		console.log("Wynik: " + sum);
// 	}
// 	console.log(sum);
// }

// function mojaFunkcja() {
// 	const clients = ["Mango", "Poly", "Ajax"];

// 	for (let i = 0; i < clients.length; i += 1) {
// 		console.log(clients[i]);
// 	}
// }

// function mojaFunkcja(imie) {
// 	const clients = ["Mango", "Poly", "Ajax"];
// 	let message;

// 	for (const client of clients) {
// 		if (client === imie) {
// 			message = "Klient z takim imieniem jest w bazie danych!";
// 			break;
// 		}

// 		message = "Nie znaleźliśmy takiego klienta w bazie danych!";
// 	}

// 	console.log(message);
// }

// c

// const user = {
// 	name: "Jacques Gluke",
// 	tag: "jgluke",
// 	location: {
// 		country: "Jamaica",
// 		city: "Ocho Rios",
// 	},
// 	hobbies: ["swiming", "music", "sci-fi"],
// 	getName() {
// 		console.log("Witaj użytkowniku " + this.name);
// 	},
// };

// user.name = " Maria ";
// user.getName();
// const loc = user.location;
// console.log(loc);

// const country = user.location.country;
// console.log(country);

// const user = {
// 	name: "",
// 	tag: "",
// 	location: {
// 		country: "Jamaica",
// 		city: "Ocho Rios",
// 	},
// 	hobbies: ["swiming", "music", "sci-fi"],
// 	setName(aaa) {
// 		this.name = aaa;
// 	},
// 	getName() {
// 		console.log("Witaj uzytkowniku: " + this.name);
// 	},
// };

// user.setName("Krzysiu");
// user.getName();

// const przesylka = {
// 	name: "",
// 	ulica: "",
// };

// const przesylka2 = {
// 	name: "",
// 	ulica: "",
// };

// przesylka2.waga = 20;
// przesylka.name = "List";
// przesylka2.name = "Paczka";

// console.log(przesylka.name);
// console.log(przesylka.waga);
// console.log(przesylka2.name);
// console.log(przesylka2.waga);
