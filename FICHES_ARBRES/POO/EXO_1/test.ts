class Director {
    public firstname: string;
    public lastname: string;
    public birthYear: number;
    public age: number;

    public constructor(firstname: string, lastname: string, birthYear: number, age: number) {
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
    private name: string;
    private type: TypeCategorie;

    public constructor(name: string, type: TypeCategorie) {
        this.name = name;
        this.type = type;
    }
}

class Film {
    private title: string;
    private releaseYear: number;
    private director: Director;
    private categories: Categorie[];

    public constructor(title: string, releaseYear: number, director: Director, categories: Categorie[]) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.director = director;
        this.categories = categories
    }

    public pitch() {
        console.log(`Le film ${this.title} est sorti en ${this.releaseYear} et est réalisé par ${this.director.firstname} ${this.director.lastname}.`)
    }
}

class Rental {
    private movie: Film;
    private date: Date;

    public constructor(movie : Film) {
        this.movie = movie;
        this.date = new Date();
    }
}

class Customer {
    private firstname: string;
    private lastname: string;
    public rentedMovies: Rental[];

    public constructor(firstname: string, lastname: string) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.rentedMovies = [];
    }

    public addRent(movie: Film): void {
        this.rentedMovies.push(new Rental(movie));
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

let customer1 = new Customer("Adé", "Laana");
console.log(customer1.rentedMovies);

customer1.addRent(film3);
console.log(customer1.rentedMovies);
