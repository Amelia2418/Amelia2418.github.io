
document.addEventListener('DOMContentLoaded', function(event) {
    const Dado1 = document.querySelector('#Dado1');
    const Dado2 = document.querySelector('#Dado2');
    const Dado3 = document.querySelector('#Dado3');

    const ButtonDado1 = document.querySelector('#buttonDado1');
    const ButtonDado2 = document.querySelector('#buttonDado2');
    const ButtonDado3 = document.querySelector('#buttonDado3');

    const ButtonDadoActive1 = document.querySelector('#buttonDado1--active');
    const ButtonDadoActive2 = document.querySelector('#buttonDado2--active');
    const ButtonDadoActive3 = document.querySelector('#buttonDado3--active');

    const CeldaDado1 = document.querySelector('#dadoValue1');
    const CeldaDado2 = document.querySelector('#dadoValue2');
    const CeldaDado3 = document.querySelector('#dadoValue3');

    const ButtonVerification = document.querySelector('#buttonVerification');

    const VerificationContainer = document.querySelector('.buttonContainer');
    const PuntuacionnContainer = document.querySelector('.resultadoContainer');

    const Resultado = document.querySelector('.resultadoContainer__puntuación');

    const PuntuacionTitle = document.querySelector('#puntuaciónTitle');
    const PuntuacionPoints = document.querySelector('#puntuaciónPoints');

    const Reset = document.querySelector('.resultadoContainer__puntuación__reset');


    let dadoValue1;
    let dadoValue2;
    let dadoValue3;



    ButtonDado1.addEventListener('click', function() {
        dadoValue1 = Math.floor((Math.random() * 6) + 1);
        console.log('Puntuación Dado 1: ' + dadoValue1);

    // ---------------------------------------------------------------------

        ButtonDado1.classList.add('dadoContainer__button--hidden');
        ButtonDadoActive1.classList.remove('dadoContainer__button--hidden');
        ButtonDadoActive1.classList.add('dadoContainer__button--active');


        if(dadoValue1 === 1) {
            ButtonDadoActive1.innerHTML = dadoValue1 + ' punto';
        }
        else {
            ButtonDadoActive1.innerHTML = dadoValue1 + ' puntos';
        };

    // ---------------------------------------------------------------------

        CeldaDado1.classList.add('points-delay');
        CeldaDado1.innerHTML = dadoValue1;

    // ---------------------------------------------------------------------

        if(dadoValue1 === 1) {
            Dado1.classList.remove('dadoContainer__eje__animation--rotate');
            Dado1.classList.add('dadoContainer__eje__animation--random1');
        }
        else if(dadoValue1 === 2) {
            Dado1.classList.remove('dadoContainer__eje__animation--rotate');
            Dado1.classList.add('dadoContainer__eje__animation--random2');
        }
        else if(dadoValue1 === 3) {
            Dado1.classList.remove('dadoContainer__eje__animation--rotate');
            Dado1.classList.add('dadoContainer__eje__animation--random3');
        }
        else if(dadoValue1 === 4) {
            Dado1.classList.remove('dadoContainer__eje__animation--rotate');
            Dado1.classList.add('dadoContainer__eje__animation--random4');
        }
        else if(dadoValue1 === 5) {
            Dado1.classList.remove('dadoContainer__eje__animation--rotate');
            Dado1.classList.add('dadoContainer__eje__animation--random5');
        }
        else if(dadoValue1 === 6) {
            Dado1.classList.remove('dadoContainer__eje__animation--rotate');
            Dado1.classList.add('dadoContainer__eje__animation--random6');
        };
    });




    ButtonDado2.addEventListener('click', function() {
        dadoValue2 = Math.floor((Math.random() * 6) + 1);
        console.log('Puntuación Dado 2: ' + dadoValue2);

    // --------------------------------------------------------------------

        ButtonDado2.classList.add('dadoContainer__button--hidden');
        ButtonDadoActive2.classList.remove('dadoContainer__button--hidden');
        ButtonDadoActive2.classList.add('dadoContainer__button--active');


        if(dadoValue2 === 1) {
            ButtonDadoActive2.innerHTML = dadoValue2 + ' punto';
        }
        else {
            ButtonDadoActive2.innerHTML = dadoValue2 + ' puntos';
        };

    // ---------------------------------------------------------------------

        CeldaDado2.classList.add('points-delay');
        CeldaDado2.innerHTML = dadoValue2;

    // ---------------------------------------------------------------------

        if(dadoValue2 === 1) {
            Dado2.classList.remove('dadoContainer__eje__animation--rotate');
            Dado2.classList.add('dadoContainer__eje__animation--random1');
        }
        else if(dadoValue2 === 2) {
            Dado2.classList.remove('dadoContainer__eje__animation--rotate');
            Dado2.classList.add('dadoContainer__eje__animation--random2');
        }
        else if(dadoValue2 === 3) {
            Dado2.classList.remove('dadoContainer__eje__animation--rotate');
            Dado2.classList.add('dadoContainer__eje__animation--random3');
        }
        else if(dadoValue2 === 4) {
            Dado2.classList.remove('dadoContainer__eje__animation--rotate');
            Dado2.classList.add('dadoContainer__eje__animation--random4');
        }
        else if(dadoValue2 === 5) {
            Dado2.classList.remove('dadoContainer__eje__animation--rotate');
            Dado2.classList.add('dadoContainer__eje__animation--random5');
        }
        else if(dadoValue2 === 6) {
            Dado2.classList.remove('dadoContainer__eje__animation--rotate');
            Dado2.classList.add('dadoContainer__eje__animation--random6');
        };
    });




    ButtonDado3.addEventListener('click', function() {
        dadoValue3 = Math.floor((Math.random() * 6) + 1);
        console.log('Puntuación Dado 3: ' + dadoValue3);

    // --------------------------------------------------------------------

        ButtonDado3.classList.add('dadoContainer__button--hidden');
        ButtonDadoActive3.classList.remove('dadoContainer__button--hidden');
        ButtonDadoActive3.classList.add('dadoContainer__button--active');


        if(dadoValue3 === 1) {
            ButtonDadoActive3.innerHTML = dadoValue3 + ' punto';
        }
        else {
            ButtonDadoActive3.innerHTML = dadoValue3 + ' puntos';
        };

    // ---------------------------------------------------------------------

        CeldaDado3.classList.add('points-delay');
        CeldaDado3.innerHTML = dadoValue3;

    // ---------------------------------------------------------------------

        if(dadoValue3 === 1) {
            Dado3.classList.remove('dadoContainer__eje__animation--rotate');
            Dado3.classList.add('dadoContainer__eje__animation--random1');
        }
        else if(dadoValue3 === 2) {
            Dado3.classList.remove('dadoContainer__eje__animation--rotate');
            Dado3.classList.add('dadoContainer__eje__animation--random2');
        }
        else if(dadoValue3 === 3) {
            Dado3.classList.remove('dadoContainer__eje__animation--rotate');
            Dado3.classList.add('dadoContainer__eje__animation--random3');
        }
        else if(dadoValue3 === 4) {
            Dado3.classList.remove('dadoContainer__eje__animation--rotate');
            Dado3.classList.add('dadoContainer__eje__animation--random4');
        }
        else if(dadoValue3 === 5) {
            Dado3.classList.remove('dadoContainer__eje__animation--rotate');
            Dado3.classList.add('dadoContainer__eje__animation--random5');
        }
        else if(dadoValue3 === 6) {
            Dado3.classList.remove('dadoContainer__eje__animation--rotate');
            Dado3.classList.add('dadoContainer__eje__animation--random6');
        };
    });




    ButtonVerification.addEventListener('click', function() {
        let resultado = dadoValue1 + dadoValue2 + dadoValue3;


        if(resultado >= 3 && resultado <= 5) {
            VerificationContainer.classList.add('sectionPoints--hidden');
            PuntuacionnContainer.classList.remove('sectionPoints--hidden');


            Resultado.classList.add('resultadoAnimation');
            Resultado.classList.add('resultadoContainer__puntuación--colorRed');


            PuntuacionTitle.innerHTML = 'Perdiste';
            PuntuacionPoints.innerHTML = 'Puntuación: ' + resultado;

            console.log('Perdiste')
            console.log('Tu puntuación: ' + resultado)
        }
        else if(resultado >= 6 && resultado <= 11) {
            VerificationContainer.classList.add('sectionPoints--hidden');
            PuntuacionnContainer.classList.remove('sectionPoints--hidden');


            Resultado.classList.add('resultadoAnimation');
            Resultado.classList.add('resultadoContainer__puntuación--colorYellow');


            PuntuacionTitle.innerHTML = 'Estuviste Cerca';
            PuntuacionPoints.innerHTML = 'Puntuación: ' + resultado;

            console.log('Estiviste cerca')
            console.log('Tu puntuación: ' + resultado)
        }
        else if(resultado >= 12 && resultado <= 18) {
            VerificationContainer.classList.add('sectionPoints--hidden');
            PuntuacionnContainer.classList.remove('sectionPoints--hidden');


            Resultado.classList.add('resultadoAnimation');
            Resultado.classList.add('resultadoContainer__puntuación--colorGreen');


            PuntuacionTitle.innerHTML = '¡Felicidades Ganaste!';
            PuntuacionPoints.innerHTML = 'Puntuación: ' + resultado;

            console.log('¡Felicidades Ganaste!')
            console.log('Tu puntuación: ' + resultado)
        };
    });




    Reset.addEventListener('click', function() {
        dadoValue1 = undefined;
        dadoValue2 = undefined;
        dadoValue3 = undefined;

        Dado1.classList.remove('dadoContainer__eje__animation--random1')
        Dado1.classList.remove('dadoContainer__eje__animation--random2')
        Dado1.classList.remove('dadoContainer__eje__animation--random3')
        Dado1.classList.remove('dadoContainer__eje__animation--random4')
        Dado1.classList.remove('dadoContainer__eje__animation--random5')
        Dado1.classList.remove('dadoContainer__eje__animation--random6')
        Dado1.classList.add('dadoContainer__eje__animation--rotate');

        Dado2.classList.remove('dadoContainer__eje__animation--random1')
        Dado2.classList.remove('dadoContainer__eje__animation--random2')
        Dado2.classList.remove('dadoContainer__eje__animation--random3')
        Dado2.classList.remove('dadoContainer__eje__animation--random4')
        Dado2.classList.remove('dadoContainer__eje__animation--random5')
        Dado2.classList.remove('dadoContainer__eje__animation--random6')
        Dado2.classList.add('dadoContainer__eje__animation--rotate');

        Dado3.classList.remove('dadoContainer__eje__animation--random1')
        Dado3.classList.remove('dadoContainer__eje__animation--random2')
        Dado3.classList.remove('dadoContainer__eje__animation--random3')
        Dado3.classList.remove('dadoContainer__eje__animation--random4')
        Dado3.classList.remove('dadoContainer__eje__animation--random5')
        Dado3.classList.remove('dadoContainer__eje__animation--random6')
        Dado3.classList.add('dadoContainer__eje__animation--rotate');

        ButtonDado1.classList.remove('dadoContainer__button--hidden');
        ButtonDadoActive1.classList.add('dadoContainer__button--hidden');
        ButtonDadoActive1.classList.remove('dadoContainer__button--active');

        ButtonDado2.classList.remove('dadoContainer__button--hidden');
        ButtonDadoActive2.classList.add('dadoContainer__button--hidden');
        ButtonDadoActive2.classList.remove('dadoContainer__button--active');

        ButtonDado3.classList.remove('dadoContainer__button--hidden');
        ButtonDadoActive3.classList.add('dadoContainer__button--hidden');
        ButtonDadoActive3.classList.remove('dadoContainer__button--active');

        ButtonDadoActive1.innerHTML = '';
        ButtonDadoActive2.innerHTML = '';
        ButtonDadoActive3.innerHTML = '';

        CeldaDado1.classList.remove('points-delay');
        CeldaDado1.innerHTML = '';
        CeldaDado2.classList.remove('points-delay');
        CeldaDado2.innerHTML = '';
        CeldaDado3.classList.remove('points-delay');
        CeldaDado3.innerHTML = '';

        VerificationContainer.classList.remove('sectionPoints--hidden');
        PuntuacionnContainer.classList.add('sectionPoints--hidden');

        Resultado.classList.remove('resultadoAnimation');
        Resultado.classList.remove('resultadoContainer__puntuación--colorRed');
        Resultado.classList.remove('resultadoContainer__puntuación--colorYellow');
        Resultado.classList.remove('resultadoContainer__puntuación--colorGreen');

        PuntuacionTitle.innerHTML = '';
        PuntuacionPoints.innerHTML = '';
    });
});