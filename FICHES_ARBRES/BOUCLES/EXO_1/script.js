// for (let i = 0; i < 100; i++) {
//     console.log(i);
// }



// let i = 0;

// while (i < 100) {
//     console.log(i);
//     i++;
// }



// Je pense que le for est plus efficace et on voit les conditions en une ligne



// for (let i = 50; i < 100; i++) {
//     console.log(i);
// }



for (let i = 49; i > 0; i--) {
    console.log(i);
}































const movies = [
    {
        id: 1,
        title: 'Les Évadés',
        rating: 8.1,
        categories: ['Drame'],
    },
    {
        id: 2,
        title: 'The Dark Knight',
        rating: 8,
        categories: ['Action', 'Policier', 'Thriller'],
    },
    {
        id: 3,
        title: 'La Cité de Dieu',
        rating: 8,
        categories: ['Gangster', 'Drame'],
    },
    {
        id: 4,
        title: 'Pulp Fiction',
        rating: 8.3,
        categories: ['Gangster', 'Comédie'],
    },
    {
        id: 5,
        title: "Le Fabuleux Destin d'Amélie Poulain (2001)",
        rating: 7.1,
        categories: ['Comédie romantique'],
    },
];


const getMoviesIds = (list, sortBy, cate) => {
    let newArray = [];
    if (cate) {
    cate.forEach(c => console.log(list.filter((film) => film.categories === cate)))
    } else {
        console.log(list)
    }
    // items.toSorted((a, b) => a - b)
}

// recupérer des films par categories (si pas de cat, tous)
// les trier par un critère
// puis return leur ID


getMoviesIds(movies, 'title', ['Gangster']); // retourne [3, 4]
getMoviesIds(movies, 'rating', ['Gangster']); // retourne [4, 3]
getMoviesIds(movies, 'title', ['Action', 'Drame']); // retourne [3, 1, 2]
getMoviesIds(movies, 'title'); // retourne [3, 5, 1, 4, 2]
getMoviesIds(movies, 'rating'); // retourne [4, 1, 2, 3, 5]