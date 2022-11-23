
document.addEventListener("DOMContentLoaded", (e) => {

    const Lista = document.querySelector('#itemsContainer');
    const BtnReset = document.querySelector('#btnReset');

    

    let url = 'https://randomuser.me/api/?results=10';

    fetch(url).then((response) => response.json())
                .then((json) => usersRandom(0, json))
                .catch((error) => console.log("Lo sentimos. Parece que algo ha salido mal." + error));



    function usersRandom(indice, obj) {

        while (indice <= 9) {

            let nombre = obj.results[indice].name.first + ' ' + obj.results[indice].name.last;
            let email = obj.results[indice].email;
            let localizacion = obj.results[indice].location.city + ', ' + obj.results[indice].location.state + ', ' + obj.results[indice].location.country;
            let celular = obj.results[indice].cell;
            let genero = obj.results[indice].gender;
            let imagenPequeña = obj.results[indice].picture.thumbnail;
            let imagenMediana = obj.results[indice].picture.medium;
            let imagenGrande = obj.results[indice].picture.large;


            Lista.innerHTML += `<li class="list__items">
                                    <ul class="list__items__content">
                                        <li class="content__img">
                                            <picture>
                                                <source media="(min-width: 800px)" srcset="${imagenGrande}">
                                                <source media="(min-width: 600px)" srcset="${imagenMediana}">
                                                <img src="${imagenPequeña}"  alt="${nombre}"  title="${nombre}">
                                            </picture>
                                        </li>
                                        <li class="content__name">${nombre}</li>
                                        <li class="content__email">${email}</li>
                                        <li class="content__location">${localizacion}</li>
                                        <li class="content__cell">${celular}</li>
                                    </ul>
                                </li>`;
   

            if (genero == "female") {
                document.getElementsByClassName('list__items')[indice].setAttribute('class', 'list__items   list__items--borderPink   list__items--item' + indice);

                document.getElementsByClassName('content__img')[indice].setAttribute('class', 'content__img  contentItems--backgroundPink');
            }

            else if (genero == "male") {
                document.getElementsByClassName('list__items')[indice].setAttribute('class', 'list__items   list__items--borderBlue   list__items--item' + indice);

                document.getElementsByClassName('content__img')[indice].setAttribute('class', 'content__img  contentItems--backgroundBlue');
            };

            indice += 1;
        };
    };



    BtnReset.addEventListener( 'click', (e) => {

        Lista.innerHTML = '';

        fetch(url).then((response) => response.json())
                    .then((json) => usersRandom(0, json))
                    .catch((error) => console.log("Lo sentimos. Parece que algo ha salido mal." + error));
    });
});