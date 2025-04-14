const copies = 100;

const textElement = document.getElementById("light");
const text = textElement.innerText;

for (let i = 0; i < copies; i++) {
  const newText = document.createElement("div");
  newText.classList = "light__copy";
  newText.style = "--index: ${i + 1};";
  textElement.appendChild(newText);
}

// mouse function
const frame = document.getElementsByName("body")[0];

const mouseFunction = (mouse) => {
  const clientX = mouse.offsetX ? mouse.offsetX : mouse.touches[0].offsetX;
  const clientY = mouse.offsetY ? mouse.offsetY : mouse.touches[0].offsetY;

  let horizontal;
  let vertical;

  if (clientX > frame.offsetWidth / 2) {
    horizontal =
      ((clientX - frame.offsetWidth / 2) / (frame.offsetWidth / 2)) * -1;
  } else if (clientX <= frame.offsetWidth / 2) {
    horizontal = (frame.offsetWidth / 2 - clientX) / (frame.offsetWidth / 2);
  }
  if (clientY > frame.offsetHeight / 2) {
    vertical =
      ((clientY - frame.offsetHeight / 2) / (frame.offsetHeight / 2)) * -1;
  } else if (clientY <= frame.offsetHeight / 2) {
    vertical = (frame.offsetHeight / 2 - clientY) / (frame.offsetHeight / 2);
  }
  console.log(horizontal, vertical);
  textElement.style = "--horizontal ${horizontal}; --vertical: ${vertical};";
};

frame.addEventListener("mousemove", mouseFunction);
frame.addEventListener("mousemove", mouseFunction);
