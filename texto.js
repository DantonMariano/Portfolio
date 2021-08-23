var app = document.getElementById('app');

var twh = new Typewriter(app, {
    loop: true
});

twh.typeString('Freelance Developer.')
    .pauseFor(3000)
    .deleteAll()
    .typeString('Fullstack PHP.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Front-End <i>JavaScript</i>.')
    .pauseFor(2500)
    .start();

var texto = document.getElementById('texto')

var twt = new Typewriter(texto, {
    loop: false,
    delay: 80
});

let icones = document.getElementById('bottom__icons')

let showIcones = () => {
    icones.style.opacity = 1;
    icones.style.transform = "scale(1)"
}

let startWriting = () => {
    twt.typeString(`Olá, meu nome é Danton Mariano, 
    tenho 20 anos e sou Desenvolvedor Fullstack na <a target="_blank" href="https://dataclick.com.br/site/">Dataclick</a>,
    atualmente responsável pela <a target="_blank" href="https://lojadevantagens.com.br/">Loja de Vantagens</a> e pela em breve <a target="_blank" href="https://clickersports.com.br/">Clicker Shop</a>.<br>
    Já fiz estágio no <a target="_blank" href="https://7bbm.cbm.sc.gov.br/">Sétimo Batalhão de Bombeiros Militar de Santa Catarina</a> como Desenvolvedor PHP
    e já trabalhei em uma filial da <a target="_blank" href="https://www.sysmo.com.br/">Sysmo</a> como Analista de Business Intelligence utilizando QlikView.
    Essas sendo apenas algumas das minhas experiências
    Fluente em inglês, aprendi sozinho a falar e ler, como também fui aprovado com <a target="_blank" href="https://www.cambridgeenglish.org/br/exams-and-tests/advanced/">Certificado de Cambridge</a> avançado, tirando 193 de 210 na prova.<br>
    além de ser fluente nas seguintes técnologias:`).start().callFunction(showIcones);
}
