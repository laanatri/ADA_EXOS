class Director {
    firstname: string;
    lastname: string;
    birthYear: number;
    age: number;

    constructor(firstname: string, lastname: string, birthYear: number, age: number) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthYear = birthYear;
        this.age = (new Date().getFullYear()) - birthYear;
    }
}

enum TypeCategorie {
    FICTION = "fiction",
    DOCUMENTAIRE = "documentaire",
    HEROICFANTAISY = "héroïque fantansie"
}

class Categorie {
    name: string;
    type: TypeCategorie;

    constructor(name: string, type: TypeCategorie) {
        this.name = name;
        this.type = type;
    }
}

class Film {
    title: string;
    releaseYear: number;
    director: Director;
    categories: Categorie[];

    constructor(title: string, releaseYear: number, director: Director, categories: Categorie[]) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.director = director;
        this.categories = categories
    }

    pitch() {
        console.log(`Le film ${this.title} est sorti en ${this.releaseYear} et est réalisé par ${this.director.firstname} ${this.director.lastname}.`)
    }
}

class Customer {
    firstname: string;
    lastname: string;
    movies: Film[];

    constructor(firstname: string, lastname: string, movies: Film[]) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.movies = movies
    }

    addRent(film: Film) {
        this.movies.push(film);
    }
}

let PJ = new Director("Peter", "Jackson", 1961, this.age);

let fictionCategory = new Categorie("fiction", TypeCategorie.FICTION);
let documentaireCategory = new Categorie("documentaire", TypeCategorie.DOCUMENTAIRE);
let heroicfantaisyCategory = new Categorie("héroïque fantansie", TypeCategorie.HEROICFANTAISY);

let film1 = new Film("Fantômes contre fantômes", 1996, PJ, [fictionCategory]);
let film2 = new Film("Le retour du roi", 2003, PJ, [fictionCategory, heroicfantaisyCategory]);
let film3 = new Film("Lovely Bones", 2009, PJ, [fictionCategory]);

film1.pitch();
film2.pitch();
film3.pitch();

let customer1 = new Customer("Adé", "Laana", [film2]);
console.log(customer1.movies);

customer1.addRent(film3);
console.log(customer1.movies);
