// code modified from https://codepen.io/Pedro-Ondiviela/pen/QwWRNmO
const turbulence = document.getElementById("turbulence");
const displacement = document.getElementById("displacement");
const text = document.getElementById("ghost");

let iterationCount = 0;

function getNewSelector(selector) {
  if (selector === "R") {
    return "G";
  } else if (selector === "G") {
    return "B";
  } else if (selector === "B") {
    return "R";
  }
}

setInterval(() => {
  iterationCount = iterationCount + 1;
  const textFilter = getComputedStyle(text).filter;
  text.style.filter = "none";
  if (iterationCount % 2 === 0) {
    const newSeed = (Number(turbulence.getAttribute("seed")) + 1) % 10;
    turbulence.setAttribute("seed", newSeed);
  }
  const newScaleNumber = Number(displacement.getAttribute("scale")) - 0.5;
  const newScale = newScaleNumber < 25 ? 30 : newScaleNumber;
  displacement.setAttribute("scale", newScale);
  const ySelector = displacement.getAttribute("yChannelSelector");
  displacement.setAttribute("yChannelSelector", getNewSelector(ySelector));
  const xSelector = displacement.getAttribute("xChannelSelector");
  displacement.setAttribute("xChannelSelector", getNewSelector(xSelector));
  text.style.filter = textFilter;
}, 160);
