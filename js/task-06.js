const inputArea = document.querySelector("#validation-input");
inputArea.addEventListener("blur", () => {
    if (inputArea.value.length >= 6) {
        inputArea.classList.add("valid");
        inputArea.classList.remove("invalid");
    } else {
        inputArea.classList.remove("valid");
        inputArea.classList.add("invalid");
    }
})