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

  // SELECT THE FIRST ITEM ON THE PAGE TO LOAD
  items[0].classList.add("carousel__item--selected")
  buttons[0].classList.add("carousel__button--selected")

  //A NAV BAR THAT SELECTS THE CURRENT CAROUSEL ITEM
  const navs = document.querySelectorAll(".link__item")

  navs.forEach((button, i) => {
    button.addEventListener("click", () => {
      // DE-SELECT ALL CAROUSEL ITEMS
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

  //SELECT THE FIRST ITEM SELECTED ON THE NAV BAR
  navs[0].classList.add("carousel__button--selected")


  //A BUTTON FOR EACH PROJECT ON THE PROJECT PAGE, IDENTIFYING THEM BY ID
  const projectButton1 = document.querySelector("#tictac")
  const projectButton2 = document.querySelector("#monster")

//A POP UP WINDOW FOR PROJECTS CLICKED
let windowFeatures = "popup"

  projectButton1.addEventListener("click", () => {
    window.open ("https://rancor38.github.io/tic-tac-toe/", "game-window", "windowFeatures")
  })
  projectButton2.addEventListener("click", () => {
    window.open ("https://monster-finders.netlify.app/", "game-window", "windowFeatures")
  })
})

// AN OVERLAY FUNCTION WHEN PEOPLE FIRST GO TO SITE
// function on() {
//     document.getElementById("overlay").style.display = "block";
//   }
  
//   function off() {
//     document.getElementById("overlay").style.display = "none";
//   }