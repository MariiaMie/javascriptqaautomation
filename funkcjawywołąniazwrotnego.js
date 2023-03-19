// function greet(name2) {
// 	console.log(`Pozdrawiam ${name2}.`);
// 	return name2;
// }

// function registerGuest(name, parametr) {
// 	console.log(`Rejestracja gościa ${name}.`);

// 	parametr(name);
// }

// greet("Kiwi");
// console.log(greet("Kiwi"));
// console.log(greet);

// registerGuest("Mango", greet);

const planets = ["Ziemia", "Mars", "Wenus", "Jowisz"];

const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
console.log(planetsInUpperCase);

const planetsInLowerCase = planets.map((planet) => planet.toLowerCase());
console.log(planetsInLowerCase);

// Oryginalna tablica się nie zmieniła
console.log(planets);

//

function studentsMap() {
	const students = [
		{ name: "Mango", score: 83 },
		{ name: "Poly", score: 59 },
		{ name: "Ajax", score: 37 },
		{ name: "Kiwi", score: 94 },
		{ name: "Houston", score: 64 },
	];

	const names = students.map((student) => student.name);
	return names;
}

function studentsFlatMap() {
	const students = [
		{ name: "Mango", courses: ["matematyka", "fizyka"] },
		{ name: "Poly", courses: ["informatyka", "matematyka"] },
		{ name: "Kiwi", courses: ["fizyka", "biologia"] },
	];

	const allCourses = students.flatMap((student) => student.courses);
	return allCourses;
}
