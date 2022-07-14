import "./style.css";

type State = {
  movies: Movie[];
  selected: Movie | null;
};
type Movie = {
  id: number;
  title: string;
  link: string;
  description: string;
  comments: string[];
};
let state: State = {
  movies: [],
  selected: null,
};

function render() {
  let appEl = document.querySelector("#app");
  appEl.textContent = "";
  if (state.selected === null) {
    page();
  } else movieInfo(state.selected);
}
let body = document.querySelector("body");

function page() {
  let appEl = document.querySelector("#app");

  for (let movie of state.movies) {
    let mainDivEl = document.createElement("div");
    mainDivEl.className = "main-div";
    let divEL = document.createElement("div");
    divEL.className = "film";
    divEL.textContent = movie.title;
    let imgEl = document.createElement("img");
    imgEl.className = "poster";
    imgEl.src = movie.link;
    imgEl.addEventListener("click", function () {
      state.selected = movie;
      // movieInfo(movie);
      render();
    });

    // let comments = document.createElement("form")

    divEL.append(imgEl);
    mainDivEl.append(divEL);
    appEl.append(mainDivEl);
  }
}

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
  description.textContent = movies.description;
  let backButton = document.createElement("button");
  backButton.className = "back-button";
  backButton.textContent = "<Back";
  let comments = document.createElement("span");
  comments.className;
  backButton.addEventListener("click", function () {
    state.selected = null;
    render();
  });
  commentForm();

  divEL.append(imgEl, description, backButton);
  appEl.append(divEL);
  // }
}

function commentForm() {
  let appEl = document.querySelector("#app");

  let divEL = document.createElement("div");
  divEL.className = "form-details";

  let formEl = document.createElement("form");
  formEl.className = "form-comment";
  formEl.addEventListener("submit", function (event) {
    event.preventDefault();
    render();
  });

  let inputEl = document.createElement("input");
  inputEl.className = "input-comment";
  inputEl.placeholder = "leave a comment...";

  let ulEl = document.createElement("ul");
  for (let comment of state.selected.comments) {
    let liEL = document.createElement("li");
    liEL.textContent = comment;

    ulEl.append(liEL);
  }

  formEl.append(inputEl);
  divEL.append(formEl, ulEl);
  appEl.append(divEL);
}

function getData() {
  fetch("http://localhost:3005/movies")
    .then((resp) => resp.json())
    .then((data) => {
      state.movies = data;
      render();
    });
}

// function newMovie(){
//   let formEl = document.createElement("form")
//   let inputEl
// }
getData();

render();

window.state = state;
