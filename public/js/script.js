const ham = document.querySelector("#ham");
const hamLI = ham.querySelectorAll("li");
const menu = document.querySelector("#menu");
const menuLI = document.querySelectorAll(".menu-li");

ham.addEventListener("click", () => hamHandler());

function hamHandler() {
  if (menu.style.right !== "0px") {
    menuIn();
  } else {
    menuOut();
  }
}

function menuIn() {
  right0(menu);
  hamX();
}

function menuOut() {
  right2000(menu);
  hamE();
}

function right0(element) {
  element.style.right = "0";
}

function right2000(element) {
  element.style.right = "2000px";
}

function hamE() {
  for (let i = 0; i < hamLI.length; i++) {
    hamLI[i].style.background = "";
    hamLI[i].style.transform = "";
    hamLI[i].style.top = "";
    hamLI[i].style.bottom = "";
  }
}

function hamX() {
  hamLI[0].style.transform = "rotate(45deg)";
  hamLI[0].style.top = "12px";
  hamLI[1].style.background = "transparent";
  hamLI[2].style.transform = "rotate(-45deg)";
  hamLI[2].style.bottom = "12px";
}

/*------------------------------------------------*/

let pos = 0;

document.addEventListener("scroll", (e) => {
  const newPos = window.scrollY;
  const header = document.querySelector("header");
  if (window.innerWidth < 750) {
    //scroll down
    if (newPos > pos) {
      pos = newPos;
      header.style.bottom = "-200px";
      //scroll up
    } else if (newPos < pos || pos === 0) {
      pos = newPos;
      header.style.bottom = "";
    }
  }
});

function checkY() {}
