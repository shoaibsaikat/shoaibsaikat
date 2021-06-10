function onChanged() {
    var toggleButton = document.getElementById("flexSwitch");
    if (toggleButton.checked) {
        document.body.classList.remove("bg-cyan");
        document.body.classList.add("bg-dark");
    } else {
        document.body.classList.remove("bg-dark");
        document.body.classList.add("bg-cyan");
    }
}