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
