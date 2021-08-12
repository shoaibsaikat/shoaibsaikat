function onChanged() {
    var toggleButton = document.getElementById("flexSwitch");
    if (toggleButton.checked) {

        document.getElementById('mode-name').innerHTML = "Light";

        document.body.classList.remove("bg-cyan");
        document.body.classList.add("bg-dark");

        document.getElementById('about-me').classList.remove('bg-cyan', 'text-dark');
        document.getElementById('about-me').classList.add('bg-dark', 'text-white-50');

        document.getElementById('career-history').classList.remove('bg-cyan', 'text-dark');
        document.getElementById('career-history').classList.add('bg-dark', 'text-white-50');

        document.getElementById('my-certification').classList.remove('bg-cyan', 'text-dark');
        document.getElementById('my-certification').classList.add('bg-dark', 'text-white-50');

        document.getElementById('copy-right').classList.remove('bg-secondary', 'text-white');
        document.getElementById('copy-right').classList.add('bg-cyan', 'text-dark');

        // document.getElementById('theme').classList.remove('text-dark');
        // document.getElementById('theme').classList.add('text-white');


    } else {
        document.getElementById('mode-name').innerHTML = "Dark";

        document.body.classList.remove("bg-dark");
        document.body.classList.add("bg-cyan");

        document.getElementById('about-me').classList.remove('bg-dark', 'text-white-50');
        document.getElementById('about-me').classList.add('bg-cyan', 'text-dark');

        document.getElementById('career-history').classList.remove('bg-dark', 'text-white-50');
        document.getElementById('career-history').classList.add('bg-cyan', 'text-dark');

        document.getElementById('my-certification').classList.remove('bg-dark', 'text-white-50');
        document.getElementById('my-certification').classList.add('bg-cyan', 'text-dark');

        document.getElementById('copy-right').classList.remove('bg-cyan', 'text-dark');
        document.getElementById('copy-right').classList.add('bg-secondary', 'text-white');

        // document.getElementById('theme').classList.remove('text-white');
        // document.getElementById('theme').classList.add('text-dark');
    }
}
