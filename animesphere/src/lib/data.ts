export interface Anime {
  id: string;
  title: string;
  image: string;
  description: string;
  episodes?: number;
  genres: string[];
  rating: string;
  year?: number;
  studio?: string;
  isFeatured?: boolean;
  type?: "series" | "movie";
  status?: "ongoing" | "completed";
}

export const animeData: Anime[] = [
  {
    id: "fire-force",
    title: "Fire Force",
    image: "https://ext.same-assets.com/1771899666/2856257767.jpeg",
    description:
      "Tokyo is burning, and citizens are mysteriously suffering from spontaneous human combustion all throughout the city! Responsible for snuffing out this inferno is the Fire Force, and Shinra is ready to join their fight. Now, as part of Company 8, he'll use his devil's footprints to help keep the city from turning to ash!",
    episodes: 24,
    genres: ["Action", "Fantasy", "Shonen", "Supernatural"],
    rating: "PG-13",
    year: 2023,
    studio: "David Production",
    isFeatured: true,
    type: "series",
    status: "ongoing",
  },
  {
    id: "teogonia",
    title: "Teogonia",
    image: "https://ext.same-assets.com/1771899666/2103409349.png",
    description:
      "Humans fight to protect their land from invading demi-human tribes in relentless battles. As his world is engulfed by intense warfare, Kai, a village boy from Lag, joins the fight to defend all he knows. After Kai's comrades fall one by one and he's injured, he suddenly recalls memories from another life.",
    episodes: 12,
    genres: ["Drama", "Fantasy"],
    rating: "PG-13",
    year: 2023,
    studio: "MAPPA",
    isFeatured: true,
    type: "series",
    status: "ongoing",
  },
  {
    id: "bye-bye-earth",
    title: "Bye Bye, Earth",
    image: "https://ext.same-assets.com/1771899666/3071563370.png",
    description:
      "Belle Lablac doesn't really fit in as the only human being in a world full of anthropomorphic animals. No fangs, no fur, no scales, no claws. Lonely and eager to discover where she comes from, Belle journeys to find answers to the questions of her heart.",
    episodes: 13,
    genres: ["Drama", "Fantasy"],
    rating: "PG-13",
    year: 2024,
    studio: "Bones",
    isFeatured: true,
    type: "series",
    status: "ongoing",
  },
  {
    id: "anne-shirley",
    title: "Anne Shirley",
    image: "https://ext.same-assets.com/1771899666/2345958517.png",
    description:
      "On the beautiful Prince Edward Island in Canada, an orphan named Anne Shirley is mistakenly sent to Green Gables, the home of Matthew and Marilla Cuthbert. They choose to adopt her anyway, as Anne finds friendship, love, and happiness in her new home.",
    episodes: 50,
    genres: ["Drama", "Slice of Life"],
    rating: "G",
    year: 2022,
    studio: "Nippon Animation",
    type: "series",
    status: "completed",
  },
  {
    id: "jujutsu-kaisen",
    title: "Jujutsu Kaisen",
    image: "https://m.media-amazon.com/images/I/81qvzxWgHDL._AC_UF1000,1000_QL80_.jpg",
    description:
      "Yuji Itadori is an unnaturally fit high school student living a normal life. However, this all changes when his club mates unseal a talisman, the finger of the Double-Faced Specter, which attracted Curses to their location.",
    episodes: 24,
    genres: ["Action", "Supernatural", "Fantasy", "Shounen"],
    rating: "PG-13",
    year: 2020,
    studio: "MAPPA",
    type: "series",
    status: "ongoing",
  },
  {
    id: "demon-slayer",
    title: "Demon Slayer",
    image: "https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg",
    description:
      "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself.",
    episodes: 26,
    genres: ["Action", "Supernatural", "Fantasy", "Shounen"],
    rating: "PG-13",
    year: 2019,
    studio: "ufotable",
    type: "series",
    status: "ongoing",
  },
  {
    id: "my-hero-academia",
    title: "My Hero Academia",
    image: "https://m.media-amazon.com/images/M/MV5BOGZmYjdjN2UtNjAwZi00YmEyLWFhNTEtNjM1ODY0MGI4ZDY3XkEyXkFqcGdeQXVyMTA1NjQyNjkw._V1_FMjpg_UX1000_.jpg",
    description:
      "In a world where people with superpowers (known as 'Quirks') are the norm, Izuku Midoriya has dreams of one day becoming a Hero, despite being bullied by his classmates for not having a Quirk. After being the only one to try and save his childhood bully from a Villain, Izuku is given a Quirk by the world's greatest Hero, All Might.",
    episodes: 25,
    genres: ["Action", "Superhero", "Fantasy", "Shounen"],
    rating: "PG-13",
    year: 2016,
    studio: "Bones",
    type: "series",
    status: "ongoing",
  },
  {
    id: "spy-x-family",
    title: "SPY x FAMILY",
    image: "https://m.media-amazon.com/images/M/MV5BMWM4Njg2MjUtODU3OS00MGNmLWIyNTctZGZkNTdjN2JhNmU2XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
    description:
      "Master spy Twilight is unparalleled at what he does. But when he receives the ultimate assignment to marry and have a kid for his cover, he may finally be in over his head! Not one to depend on others, Twilight has his work cut out for him procuring both a wife and a child for his mission to infiltrate an elite private school.",
    episodes: 25,
    genres: ["Action", "Comedy", "Slice of Life"],
    rating: "PG-13",
    year: 2022,
    studio: "Wit Studio",
    type: "series",
    status: "ongoing",
  },
  {
    id: "attack-on-titan",
    title: "Attack on Titan",
    image: "https://m.media-amazon.com/images/M/MV5BNzc5MTczNDQtNDFjNi00ZDU5LWFkNzItOTE1NzQzMzdhNzMxXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg",
    description:
      "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
    episodes: 75,
    genres: ["Action", "Drama", "Fantasy", "Horror"],
    rating: "R-17+",
    year: 2013,
    studio: "Wit Studio",
    type: "series",
    status: "completed",
  },
  {
    id: "chainsaw-man",
    title: "Chainsaw Man",
    image: "https://m.media-amazon.com/images/M/MV5BZjY5MDFhZTgtOGVhMi00NTUzLTk5NjktNmRlMjI2NzI3OWRlXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg",
    description:
      "Denji has a simple dream—to live a happy and peaceful life, spending time with a girl he likes. This is a far cry from reality, however, as Denji is forced by the yakuza into killing devils in order to pay off his crushing debts.",
    episodes: 12,
    genres: ["Action", "Supernatural", "Horror", "Shounen"],
    rating: "R-17+",
    year: 2022,
    studio: "MAPPA",
    type: "series",
    status: "ongoing",
  },
  {
    id: "one-piece",
    title: "One Piece",
    image: "https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
    description:
      "Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger. The famous mystery treasure named 'One Piece'.",
    episodes: 1000,
    genres: ["Action", "Adventure", "Fantasy", "Shounen"],
    rating: "PG-13",
    year: 1999,
    studio: "Toei Animation",
    type: "series",
    status: "ongoing",
  },
  {
    id: "fullmetal-alchemist-brotherhood",
    title: "Fullmetal Alchemist: Brotherhood",
    image: "https://m.media-amazon.com/images/M/MV5BZmEzN2YzOTItMDI5MS00MGU4LWI1NWQtOTg5ZThhNGQwYTEzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    description:
      "After their mother's death, two brothers, Edward and Alphonse, attempt to resurrect her through alchemy. Their failed experiment costs Edward an arm and a leg, and Alphonse his entire body. Now, Edward must find the Philosopher's Stone to restore their bodies.",
    episodes: 64,
    genres: ["Action", "Adventure", "Drama", "Fantasy"],
    rating: "PG-13",
    year: 2009,
    studio: "Bones",
    type: "series",
    status: "completed",
  },
  {
    id: "naruto-shippuden",
    title: "Naruto: Shippuden",
    image: "https://m.media-amazon.com/images/M/MV5BZGFiMWFhNDAtMzUyZS00NmQ2LTljNDYtMmZjNTc5MDUxMzViXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    description:
      "Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition, as well as to become Hokage, who is acknowledged as the leader and strongest of all ninja in the village.",
    episodes: 500,
    genres: ["Action", "Adventure", "Fantasy", "Shounen"],
    rating: "PG-13",
    year: 2007,
    studio: "Pierrot",
    type: "series",
    status: "completed",
  },
  {
    id: "hunter-x-hunter",
    title: "Hunter x Hunter",
    image: "https://m.media-amazon.com/images/M/MV5BZjNmZDhkN2QtNDYyZC00YzJmLTg0ODUtN2FjNjhhMzE3ZmUxXkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_FMjpg_UX1000_.jpg",
    description:
      "Gon Freecss aspires to become a Hunter, an exceptional being capable of greatness. With his friends and his potential, he seeks out his father, who left him when he was younger.",
    episodes: 148,
    genres: ["Action", "Adventure", "Fantasy", "Shounen"],
    rating: "PG-13",
    year: 2011,
    studio: "Madhouse",
    type: "series",
    status: "completed",
  },
  {
    id: "haikyuu",
    title: "Haikyuu!!",
    image: "https://m.media-amazon.com/images/M/MV5BNjkyNDI2MTgtN2Y3NS00M2RjLWJhNDMtMmNmZmUwMDQwZTE1XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
    description:
      "Determined to be like the volleyball championship's star player Shouyou, a short boy nicknamed 'the small giant,' joins his school's volleyball club.",
    episodes: 85,
    genres: ["Sports", "Comedy", "Drama", "School"],
    rating: "PG-13",
    year: 2014,
    studio: "Production I.G",
    type: "series",
    status: "completed",
  },
  {
    id: "violet-evergarden",
    title: "Violet Evergarden",
    image: "https://m.media-amazon.com/images/M/MV5BZmUzMThjOTItZGY4ZS00ODcwLTliNTMtYjVkM2JmY2QxNmRhXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg",
    description:
      "In the aftermath of a great war, Violet Evergarden, a young female ex-soldier, gets a job at a writers' agency and goes on assignments to create letters that can connect people.",
    episodes: 13,
    genres: ["Drama", "Fantasy", "Slice of Life"],
    rating: "PG-13",
    year: 2018,
    studio: "Kyoto Animation",
    type: "series",
    status: "completed",
  },
  {
    id: "your-name",
    title: "Your Name",
    image: "https://m.media-amazon.com/images/M/MV5BNGYyNmI3M2YtNzYzZS00OTViLTkxYjAtZDIyZmE1NTUyMzc2XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
    description:
      "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
    genres: ["Romance", "Supernatural", "Drama"],
    rating: "PG",
    year: 2016,
    studio: "CoMix Wave Films",
    type: "movie",
    status: "completed",
  },
  {
    id: "spirited-away",
    title: "Spirited Away",
    image: "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    description:
      "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    genres: ["Adventure", "Fantasy", "Family"],
    rating: "PG",
    year: 2001,
    studio: "Studio Ghibli",
    type: "movie",
    status: "completed",
  },
  {
    id: "a-silent-voice",
    title: "A Silent Voice",
    image: "https://m.media-amazon.com/images/M/MV5BZGRkOGMxYTUtZTBhYS00NzI3LWEzMDQtOWRhMmNjNjJjMzM4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    description:
      "A young man is ostracized by his classmates after he bullies a deaf girl to the point where she moves away. Years later, he sets off on a path for redemption.",
    genres: ["Drama", "Romance", "School"],
    rating: "PG-13",
    year: 2016,
    studio: "Kyoto Animation",
    type: "movie",
    status: "completed",
  },
  {
    id: "weathering-with-you",
    title: "Weathering with You",
    image: "https://m.media-amazon.com/images/M/MV5BNzE4ZDEzOGUtYWFjNC00ODczLTljOGQtZGNjNzhjNjdjNjgzXkEyXkFqcGdeQXVyNzE5ODMwNzI@._V1_FMjpg_UX1000_.jpg",
    description:
      "A high-school boy who has run away to Tokyo befriends a girl who appears to be able to manipulate the weather.",
    genres: ["Romance", "Fantasy", "Drama"],
    rating: "PG-13",
    year: 2019,
    studio: "CoMix Wave Films",
    type: "movie",
    status: "completed",
  },
];

export const getAnimeByCategory = (category: string) => {
  switch (category) {
    case "featured":
      return animeData.filter((anime) => anime.isFeatured);
    case "popular":
      // In a real app, this would be based on view counts or ratings
      return animeData.slice(4, 10);
    case "new-releases":
      // In a real app, this would be based on release date
      return animeData.slice(0, 6);
    case "trending":
      // In a real app, this would be based on current popularity
      return animeData.slice(5, 11);
    case "movies":
      return animeData.filter((anime) => anime.type === "movie");
    default:
      return [];
  }
};

export const getAnimeByGenre = (genre: string) => {
  return animeData.filter((anime) =>
    anime.genres.some((g) => g.toLowerCase() === genre.toLowerCase())
  );
};

export const getAnimeById = (id: string) => {
  return animeData.find((anime) => anime.id === id);
};
