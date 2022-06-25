//BUILD A CAROUSEL
document.querySelectorAll(".carousel").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carousel__item")
  const buttonsHtml = Array.from(items, () => {
    return `<span class="carousel__button"></span>`
  });

  carousel.insertAdjacentHTML(
    "beforeend",
    `
		<div class="carousel__nav">
			${buttonsHtml.join("")}
		</div>
	`
  );

  const buttons = carousel.querySelectorAll(".carousel__button")

//   buttons.forEach((button, i) => {
//     button.addEventListener("click", () => {
//       // un-select all the items
//       items.forEach((item) =>
//         item.classList.remove("carousel__item--selected")
//       );
//       buttons.forEach((button) =>
//         button.classList.remove("carousel__button--selected")
//       );

//       items[i].classList.add("carousel__item--selected")
//       button.classList.add("carousel__button--selected")
//     })
//   })

  // Select the first item on page load
  items[0].classList.add("carousel__item--selected")
  buttons[0].classList.add("carousel__button--selected")

  //Create nav-bar that selects current carousel__item
  const navs = document.querySelectorAll(".link__item")

  navs.forEach((button, i) => {
    button.addEventListener("click", () => {
      // un-select all the items
      items.forEach((item) =>
        item.classList.remove("carousel__item--selected")
      );
      navs.forEach((button) =>
        button.classList.remove("carousel__button--selected")
      );

      items[i].classList.add("carousel__item--selected")
      button.classList.add("carousel__button--selected")
    })
  })
  //select the first item on the nav-bar selected
  navs[0].classList.add("carousel__button--selected")


  //add a button for each project on the projects page, identifying them by ID
  const projectButton = document.querySelector("#tictac")

//Add feature to make a popup window
let windowFeatures = "popup"

  projectButton.addEventListener("click", () => {
    window.open ("https://rancor38.github.io/tic-tac-toe/ ", "game-window", "windowFeatures")
  })
})