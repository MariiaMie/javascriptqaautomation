const user = {
	name: "Jacques Gluke",
	tag: "jgluke",
	location: {
		country: "Jamaica",
		city: "Ocho Rios",
	},
	hobbies: ["swiming", "music", "sci-fi"],
	getName() {
		console.log("Witaj użytkowniku " + this.name);
	},
};

user.name = " Maria ";
user.getName();
const loc = user.location;
console.log(loc);

const country = user.location.country;
console.log(country);

const user = {
	name: "",
	tag: "",
	location: {
		country: "Jamaica",
		city: "Ocho Rios",
	},
	hobbies: ["swiming", "music", "sci-fi"],
	setName(aaa) {
		this.name = aaa;
	},
	getName() {
		console.log("Witaj uzytkowniku: " + this.name);
	},
};

user.setName("Krzysiu");
user.getName();
