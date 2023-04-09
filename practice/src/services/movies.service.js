const getMovies = () => {
    const movies =  [
        {
            "title": "The Shawshank Redemption",
            "rank": "1",
            "id": "tt0111161",
            "myRating": false
        },
        {
            "title": "The Godfather",
            "rank": "2",
            "id": "tt0068646",
            "myRating": false
        },
        {
            "title": "The Godfather: Part II",
            "rank": "3",
            "id": "tt0071562",
            "myRating": false
        },
        {
            "title": "Pulp Fiction",
            "rank": "4",
            "id": "tt0110912",
            "myRating": false
        },
        {
            "title": "The Good, the Bad and the Ugly",
            "rank": "5",
            "id": "tt0060196",
            "myRating": false
        },
        {
            "title": "The Dark Knight",
            "rank": "6",
            "id": "tt0468569",
            "myRating": false
        },
        {
            "title": "12 Angry Men",
            "rank": "7",
            "id": "tt0050083",
            "myRating": false
        },
        {
            "title": "Schindler's List",
            "rank": "8",
            "id": "tt0108052",
            "myRating": false
        },
        {
            "title": "The Lord of the Rings: The Return of the King",
            "rank": "9",
            "id": "tt0167260",
            "myRating": false
        },
        {
            "title": "Fight Club",
            "rank": "10",
            "id": "tt0137523",
            "myRating": false
        },
        {
            "title": "Star Wars: Episode V - The Empire Strikes Back",
            "rank": "11",
            "id": "tt0080684",
            "myRating": false
        },
        {
            "title": "The Lord of the Rings: The Fellowship of the Ring",
            "rank": "12",
            "id": "tt0120737",
            "myRating": false
        },
        {
            "title": "One Flew Over the Cuckoo's Nest",
            "rank": "13",
            "id": "tt0073486",
            "myRating": false
        },
        {
            "title": "Inception",
            "rank": "14",
            "id": "tt1375666",
            "myRating": false
        },
        {
            "title": "Goodfellas",
            "rank": "15",
            "id": "tt0099685",
            "myRating": false
        },
        {
            "title": "Star Wars",
            "rank": "16",
            "id": "tt0076759",
            "myRating": false
        },
        {
            "title": "Seven Samurai",
            "rank": "17",
            "id": "tt0047478",
            "myRating": false
        },
        {
            "title": "Forrest Gump",
            "rank": "18",
            "id": "tt0109830",
            "myRating": false
        },
        {
            "title": "The Matrix",
            "rank": "19",
            "id": "tt0133093",
            "myRating": false
        },
        {
            "title": "The Lord of the Rings: The Two Towers",
            "rank": "20",
            "id": "tt0167261",
            "myRating": false
        },
        {
            "title": "City of God",
            "rank": "21",
            "id": "tt0317248",
            "myRating": false
        },
        {
            "title": "Se7en",
            "rank": "22",
            "id": "tt0114369",
            "myRating": false
        },
        {
            "title": "The Silence of the Lambs",
            "rank": "23",
            "id": "tt0102926",
            "myRating": false
        },
        {
            "title": "Once Upon a Time in the West",
            "rank": "24",
            "id": "tt0064116",
            "myRating": false
        },
        {
            "title": "Casablanca",
            "rank": "25",
            "id": "tt0034583",
            "myRating": false
        },
        {
            "title": "The Usual Suspects",
            "rank": "26",
            "id": "tt0114814",
            "myRating": false
        },
        {
            "title": "Raiders of the Lost Ark",
            "rank": "27",
            "id": "tt0082971",
            "myRating": false
        },
        {
            "title": "Rear Window",
            "rank": "28",
            "id": "tt0047396",
            "myRating": false
        },
        {
            "title": "It's a Wonderful Life",
            "rank": "29",
            "id": "tt0038650",
            "myRating": false
        },
        {
            "title": "Psycho",
            "rank": "30",
            "id": "tt0054215",
            "myRating": false
        },
        {
            "title": "Léon: The Professional",
            "rank": "31",
            "id": "tt0110413",
            "myRating": false
        },
        {
            "title": "Sunset Blvd.",
            "rank": "32",
            "id": "tt0043014",
            "myRating": false
        },
        {
            "title": "American History X",
            "rank": "33",
            "id": "tt0120586",
            "myRating": false
        },
        {
            "title": "Apocalypse Now",
            "rank": "34",
            "id": "tt0078788",
            "myRating": false
        },
        {
            "title": "Terminator 2: Judgment Day",
            "rank": "35",
            "id": "tt0103064",
            "myRating": false
        },
        {
            "title": "Saving Private Ryan",
            "rank": "36",
            "id": "tt0120815",
            "myRating": false
        },
        {
            "title": "Memento",
            "rank": "37",
            "id": "tt0209144",
            "myRating": false
        },
        {
            "title": "City Lights",
            "rank": "38",
            "id": "tt0021749",
            "myRating": false
        },
        {
            "title": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
            "rank": "39",
            "id": "tt0057012",
            "myRating": false
        },
        {
            "title": "Alien",
            "rank": "40",
            "id": "tt0078748",
            "myRating": false
        },
        {
            "title": "Modern Times",
            "rank": "41",
            "id": "tt0027977",
            "myRating": false
        },
        {
            "title": "Spirited Away",
            "rank": "42",
            "id": "tt0245429",
            "myRating": false
        },
        {
            "title": "North by Northwest",
            "rank": "43",
            "id": "tt0053125",
            "myRating": false
        },
        {
            "title": "Back to the Future",
            "rank": "44",
            "id": "tt0088763",
            "myRating": false
        },
        {
            "title": "Life Is Beautiful",
            "rank": "45",
            "id": "tt0118799",
            "myRating": false
        },
        {
            "title": "The Shining",
            "rank": "46",
            "id": "tt0081505",
            "myRating": false
        },
        {
            "title": "The Pianist",
            "rank": "47",
            "id": "tt0253474",
            "myRating": false
        },
        {
            "title": "Citizen Kane",
            "rank": "48",
            "id": "tt0033467",
            "myRating": false
        },
        {
            "title": "The Departed",
            "rank": "49",
            "id": "tt0407887",
            "myRating": false
        },
        {
            "title": "M",
            "rank": "50",
            "id": "tt0022100",
            "myRating": false
        },
        {
            "title": "Paths of Glory",
            "rank": "51",
            "id": "tt0050825",
            "myRating": false
        },
        {
            "title": "Vertigo",
            "rank": "52",
            "id": "tt0052357",
            "myRating": false
        },
        {
            "title": "Django Unchained",
            "rank": "53",
            "id": "tt1853728",
            "myRating": false
        },
        {
            "title": "Double Indemnity",
            "rank": "54",
            "id": "tt0036775",
            "myRating": false
        },
        {
            "title": "The Dark Knight Rises",
            "rank": "55",
            "id": "tt1345836",
            "myRating": false
        },
        {
            "title": "Aliens",
            "rank": "56",
            "id": "tt0090605",
            "myRating": false
        },
        {
            "title": "Taxi Driver",
            "rank": "57",
            "id": "tt0075314",
            "myRating": false
        },
        {
            "title": "American Beauty",
            "rank": "58",
            "id": "tt0169547",
            "myRating": false
        },
        {
            "title": "The Green Mile",
            "rank": "59",
            "id": "tt0120689",
            "myRating": false
        },
        {
            "title": "Gladiator",
            "rank": "60",
            "id": "tt0172495",
            "myRating": false
        },
        {
            "title": "The Intouchables",
            "rank": "61",
            "id": "tt1675434",
            "myRating": false
        },
        {
            "title": "WALL·E",
            "rank": "62",
            "id": "tt0910970",
            "myRating": false
        },
        {
            "title": "The Lives of Others",
            "rank": "63",
            "id": "tt0405094",
            "myRating": false
        },
        {
            "title": "Toy Story 3",
            "rank": "64",
            "id": "tt0435761",
            "myRating": false
        },
        {
            "title": "The Great Dictator",
            "rank": "65",
            "id": "tt0032553",
            "myRating": false
        },
        {
            "title": "The Prestige",
            "rank": "66",
            "id": "tt0482571",
            "myRating": false
        },
        {
            "title": "A Clockwork Orange",
            "rank": "67",
            "id": "tt0066921",
            "myRating": false
        },
        {
            "title": "Lawrence of Arabia",
            "rank": "68",
            "id": "tt0056172",
            "myRating": false
        },
        {
            "title": "Amélie",
            "rank": "69",
            "id": "tt0211915",
            "myRating": false
        },
        {
            "title": "To Kill a Mockingbird",
            "rank": "70",
            "id": "tt0056592",
            "myRating": false
        },
        {
            "title": "Reservoir Dogs",
            "rank": "71",
            "id": "tt0105236",
            "myRating": false
        },
        {
            "title": "Das Boot",
            "rank": "72",
            "id": "tt0082096",
            "myRating": false
        },
        {
            "title": "The Lion King",
            "rank": "73",
            "id": "tt0110357",
            "myRating": false
        },
        {
            "title": "Cinema Paradiso",
            "rank": "74",
            "id": "tt0095765",
            "myRating": false
        },
        {
            "title": "Star Wars: Episode VI - Return of the Jedi",
            "rank": "75",
            "id": "tt0086190",
            "myRating": false
        },
        {
            "title": "The Treasure of the Sierra Madre",
            "rank": "76",
            "id": "tt0040897",
            "myRating": false
        },
        {
            "title": "The Third Man",
            "rank": "77",
            "id": "tt0041959",
            "myRating": false
        },
        {
            "title": "Once Upon a Time in America",
            "rank": "78",
            "id": "tt0087843",
            "myRating": false
        },
        {
            "title": "Requiem for a Dream",
            "rank": "79",
            "id": "tt0180093",
            "myRating": false
        },
        {
            "title": "Eternal Sunshine of the Spotless Mind",
            "rank": "80",
            "id": "tt0338013",
            "myRating": false
        },
        {
            "title": "Full Metal Jacket",
            "rank": "81",
            "id": "tt0093058",
            "myRating": false
        },
        {
            "title": "Oldboy",
            "rank": "82",
            "id": "tt0364569",
            "myRating": false
        },
        {
            "title": "Braveheart",
            "rank": "83",
            "id": "tt0112573",
            "myRating": false
        },
        {
            "title": "L.A. Confidential",
            "rank": "84",
            "id": "tt0119488",
            "myRating": false
        },
        {
            "title": "Bicycle Thieves",
            "rank": "85",
            "id": "tt0040522",
            "myRating": false
        },
        {
            "title": "Chinatown",
            "rank": "86",
            "id": "tt0071315",
            "myRating": false
        },
        {
            "title": "Singin' in the Rain",
            "rank": "87",
            "id": "tt0045152",
            "myRating": false
        },
        {
            "title": "Princess Mononoke",
            "rank": "88",
            "id": "tt0119698",
            "myRating": false
        },
        {
            "title": "Monty Python and the Holy Grail",
            "rank": "89",
            "id": "tt0071853",
            "myRating": false
        },
        {
            "title": "Metropolis",
            "rank": "90",
            "id": "tt0017136",
            "myRating": false
        },
        {
            "title": "Rashomon",
            "rank": "91",
            "id": "tt0042876",
            "myRating": false
        },
        {
            "title": "Some Like It Hot",
            "rank": "92",
            "id": "tt0053291",
            "myRating": false
        },
        {
            "title": "Amadeus",
            "rank": "93",
            "id": "tt0086879",
            "myRating": false
        },
        {
            "title": "2001: A Space Odyssey",
            "rank": "94",
            "id": "tt0062622",
            "myRating": false
        },
        {
            "title": "All About Eve",
            "rank": "95",
            "id": "tt0042192",
            "myRating": false
        },
        {
            "title": "Witness for the Prosecution",
            "rank": "96",
            "id": "tt0051201",
            "myRating": false
        },
        {
            "title": "The Sting",
            "rank": "97",
            "id": "tt0070735",
            "myRating": false
        },
        {
            "title": "The Apartment",
            "rank": "98",
            "id": "tt0053604",
            "myRating": false
        },
        {
            "title": "Grave of the Fireflies",
            "rank": "99",
            "id": "tt0095327",
            "myRating": false
        },
        {
            "title": "Indiana Jones and the Last Crusade",
            "rank": "100",
            "id": "tt0097576",
            "myRating": false
        }
    ]

    return movies;
}

export {
    getMovies
}