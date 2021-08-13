function onChanged() {
    var toggleButton = document.getElementById("flexSwitch");
    if (toggleButton.checked) {
        // dark
        document.getElementById('mode-name').innerHTML = "Light";

        document.body.classList.remove("bg-secondary", "bg-opacity-10");
        document.body.classList.add("bg-dark");

        document.getElementById('about-me').classList.remove('bg-secondary', 'bg-opacity-10', 'text-dark');
        document.getElementById('about-me').classList.add('bg-dark', 'text-white-50');

        document.getElementById('career-history').classList.remove('bg-secondary', 'bg-opacity-10', 'text-dark');
        document.getElementById('career-history').classList.add('bg-dark', 'text-white-50');

        document.getElementById('my-certification').classList.remove('bg-secondary', 'bg-opacity-10', 'text-dark');
        document.getElementById('my-certification').classList.add('bg-dark', 'text-white-50');

        document.getElementById('copyright').classList.remove('bg-secondary', 'text-light');
        document.getElementById('copyright').classList.add('bg-light', 'text-dark');


    } else {
        // light
        document.getElementById('mode-name').innerHTML = "Dark";

        document.body.classList.remove("bg-dark");
        document.body.classList.add("bg-secondary", "bg-opacity-10");

        document.getElementById('about-me').classList.remove('bg-dark', 'text-white-50');
        document.getElementById('about-me').classList.add('bg-secondary', 'bg-opacity-10', 'text-dark');

        document.getElementById('career-history').classList.remove('bg-dark', 'text-white-50');
        document.getElementById('career-history').classList.add('bg-secondary', 'bg-opacity-10', 'text-dark');

        document.getElementById('my-certification').classList.remove('bg-dark', 'text-white-50');
        document.getElementById('my-certification').classList.add('bg-secondary', 'bg-opacity-25', 'text-dark');

        document.getElementById('copyright').classList.remove('bg-light', 'text-dark');
        document.getElementById('copyright').classList.add('bg-secondary', 'text-light');
    }
}
