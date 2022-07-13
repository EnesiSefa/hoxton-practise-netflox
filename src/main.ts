import "./style.css";

type State = {
  movies: Movie[];
};
type Movie = {
  id: number;
  title: string;
  link: string;
  description: string;
  comments: string;
};
let state: State = {
  movies: [
    {
      id: 1,
      title: "spider-man no way home",
      link: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-mannowayhome_lob_crd_03.jpg",
      description: "Spider-Man: No Way Home is a 2021 American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios and distributed by Sony Pictures Releasing.",
      comments: "up up and away",
    },
    {
      id: 2,
      title: "Doctor Strange In The Multiverse Of Madness",
      link: "https://lumiere-a.akamaihd.net/v1/images/p_drstrangeinthemultiverseofmadness_245_476cabb1.jpeg",
      description: "Dr Stephen Strange casts a forbidden spell that opens a portal to the multiverse. However, a threat emerges that may be too big for his team to handle.",
      comments: "nice",
    },
    {
      id: 3,
      title: "Fast and Furious 9",
      link: "https://play-lh.googleusercontent.com/EbE24jpcWH6sV3RmJydtmbj7Qw6Ym6v8_6Sek0CjOHYuLxPoSjShJGuCy_oA75solihiV0aHhU7NdZ3ZV1dy",
      description: "F9 is a 2021 American action film directed by Justin Lin from a screenplay by Daniel Casey and Lin. It is the sequel to The Fate of the Furious, serving as the ninth main installment, and the tenth full-length film in the Fast & Furious franchise",
      comments: "yeah!!",
    },
    {
      id: 4,
      title: "Mortal Kombat",
      link: "https://sm.ign.com/ign_nordic/screenshot/default/mortal-kombat-movie-poster-720x448_pmst.png",
      description: "Cole Young, a washed-up MMA fighter, is chosen to join a team of champions in a high-stakes battle to prevent the Earth from being taken over by Outworld.",
      comments: "fatality",
    },
  ],
};

function render() {
  
  page();
}
let body = document.querySelector("body");

function page() {
  let appEl = document.querySelector("#app");

  for (let movie of state.movies) {
    let mainDivEl = document.createElement("div")
    mainDivEl.className = "main-div"
    let divEL = document.createElement("div");
    divEL.className = "film";
    divEL.textContent = movie.title;
    let imgEl = document.createElement("img");
    imgEl.className = "poster";
    imgEl.src = movie.link;
    imgEl.addEventListener("click", function () {
      appEl.textContent = ""
      movieInfo(movie)
      // render();
    });
   
    // let comments = document.createElement("form")

    divEL.append(imgEl);
    mainDivEl.append(divEL)
    appEl.append(mainDivEl);
  }
}

render();

function movieInfo(movies: Movie) {
  let appEl = document.querySelector("#app");
  
  // for (let movie of state.movies) {
    let divEL = document.createElement("div");
    divEL.className = "film-details";
    divEL.textContent = movies.title;
    let imgEl = document.createElement("img");
    imgEl.src = movies.link;
    imgEl.className = "big-poster";
    let description = document.createElement("p");
    description.className = "description";
    description.textContent = movies.description
    let backButton = document.createElement("button")
    backButton.className = "back-button"
    backButton.textContent = "<Back"
    let comments = document.createElement("span")
    comments.className
    backButton.addEventListener("click", function(){
      appEl.textContent = ""
      render()
    })
    
    
    divEL.append(imgEl,description,backButton);
    appEl.append(divEL,);
  // }
}


