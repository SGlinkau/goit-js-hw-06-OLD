const userName = document.querySelector('#name-input');
const textField = document.querySelector('#name-output');

userName.addEventListener("input", function() {
    if (!userName.value) {
    textField.innerHTML = "Anonymous";
} else { 
    textField.innerHTML = userName.value;
};
});