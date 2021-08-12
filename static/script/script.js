function onChanged() {
    var toggleButton = document.getElementById("flexSwitch");
    if (toggleButton.checked) {
        document.body.classList.remove("bg-cyan");
        document.body.classList.add("bg-dark");

        document.getElementById('about-me').classList.remove('bg-cyan', 'text-dark');
        document.getElementById('about-me').classList.add('bg-dark', 'text-white-50');

        document.getElementById('career-history').classList.remove('bg-cyan', 'text-dark');
        document.getElementById('career-history').classList.add('bg-dark', 'text-white-50');


    } else {
        document.body.classList.remove("bg-dark");
        document.body.classList.add("bg-cyan");

        document.getElementById('about-me').classList.remove('bg-dark', 'text-white-50');
        document.getElementById('about-me').classList.add('bg-cyan', 'text-dark');

        document.getElementById('career-history').classList.remove('bg-dark', 'text-white-50');
        document.getElementById('career-history').classList.add('bg-cyan', 'text-dark');
    }
}
