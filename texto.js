var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Freelance Developer.')
    .pauseFor(3000)
    .deleteAll()
    .typeString('Fullstack PHP.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Front-End <i>JavaScript</i>.')
    .pauseFor(2500)
    .start();