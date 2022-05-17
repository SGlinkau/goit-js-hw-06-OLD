function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

      const changeColor = document.querySelector(".change-color");
      changeColor.addEventListener("click", () => {
        document.body.style.backgroundColor = getRandomHexColor();
      });