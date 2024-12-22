document.addEventListener('DOMContentLoaded', function () {
    alert('Üdvözöllek a portfólióm oldalán!');
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Megakadályozza az alapértelmezett űrlap küldést

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Köszönjük az üzenetedet, hamarosan válaszolunk!');
        // Itt küldheted el az adatokat a szervernek
    } else {
        alert('Kérlek, töltsd ki az összes mezőt!');
    }
});
