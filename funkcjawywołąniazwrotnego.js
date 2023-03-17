function greet(name2) {
	console.log(`Pozdrawiam ${name2}.`);
	return name2;
}

function registerGuest(name, parametr) {
	console.log(`Rejestracja gościa ${name}.`);

	parametr(name);
}

greet("Kiwi");
console.log(greet("Kiwi"));
console.log(greet);

registerGuest("Mango", greet);
