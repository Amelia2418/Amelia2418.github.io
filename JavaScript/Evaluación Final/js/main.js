
$(document).ready( (e) => {

    function cargarUsuarios() {

        // --------- Botones u opciones de la tabla ----------
        $('.btnMostrar').show();
        $('.btnOcultar').hide();


        $('.tableOptions__celda').on('mouseover', function(){
            $(this).css('background-color', '#dbdbdb');
        });

        $('.tableOptions__celda').on('mouseleave', function(){
            $(this).css('background-color', '#fff');
        });
        

        // ----------------------------------------------------------------------------------------------------


        axios({
            method: 'GET',
            url: 'https://randomuser.me/api/?results=10',
        })
        .then((resp) => {
            for(let result of resp.data.results){

                const itemsContainer = document.querySelector('#itemsContainer')

                let imagenPequeña = result.picture.thumbnail;
                let imagenMediana = result.picture.medium;
                let imagenGrande = result.picture.large;
                let nombre = result.name.first + ' ' + result.name.last;
                let usuario = result.login.username ;
                let correo = result.email;
                let contraseña = result.login.password;
                let localizacion = result.location.city + ', ' + result.location.state + ', ' + result.location.country;
                let celular = result.cell;
                let genero = result.gender;


                itemsContainer.innerHTML +=   `<div class="itemsLista">
                                                    <picture class="itemsLista__image">
                                                        <source media="(min-width: 800px)" srcset="${imagenGrande}">
                                                        <source media="(min-width: 600px)" srcset="${imagenMediana}">
                                                        <img src="${imagenPequeña}" alt="${nombre}" title="${nombre}">
                                                    </picture>
                                                    <p class="itemsLista__name  items">${nombre}</p>
                                                    <p class="itemsLista__username  items">${usuario}</p>
                                                    <p class="itemsLista__email  items">${correo}</p>
                                                    <p class="itemsLista__password  items">${contraseña}</p>
                                                    <p class="itemsLista__location  items">${localizacion}</p>
                                                    <p class="itemsLista__cell  items">${celular}</p>
                                                    <p class="itemsLista__gender  items">${genero}</p>
                                                </div>`
            };


            // --------- Datos de los Usuarios ----------
            $('.itemsLista').hide();
            $('.itemsLista').fadeIn();

            $('.items').hide();


            $('.items').on('mouseover', function(){
                $(this).css('background-color', '#dbdbdb');
            });
    
            $('.items').on('mouseleave', function(){
                $(this).css('background-color', '#fff');
            });
        })
        .catch((err) => console.log(err));


        // ----------------------------------------------------------------------------------------------------


        // -------------- Nombres y Apellidos ---------------
        
        $('#btnMostrarName').click(function(){
            $('#btnMostrarName').hide();
            $('#btnOcultarName').show();

            $('.itemsLista__name').slideDown();
        });

        $('#btnOcultarName').click(function(){
            $('#btnOcultarName').hide();
            $('#btnMostrarName').show();

            $('.itemsLista__name').slideUp();
        });


        // -------------- Nombres de Usuario ---------------

        $('#btnMostrarUser').click(function(){
            $('#btnMostrarUser').hide();
            $('#btnOcultarUser').show();

            $('.itemsLista__username').slideDown();
        });

        $('#btnOcultarUser').click(function(){
            $('#btnOcultarUser').hide();
            $('#btnMostrarUser').show();

            $('.itemsLista__username').slideUp();
        });


        // -------------- Correo Electronico ---------------

        $('#btnMostrarEmail').click(function(){
            $('#btnMostrarEmail').hide();
            $('#btnOcultarEmail').show();

            $('.itemsLista__email').slideDown();
        });

        $('#btnOcultarEmail').click(function(){
            $('#btnOcultarEmail').hide();
            $('#btnMostrarEmail').show();

            $('.itemsLista__email').slideUp();
        });


        // -------------- Contraseña ---------------

        $('#btnMostrarPassword').click(function(){
            $('#btnMostrarPassword').hide();
            $('#btnOcultarPassword').show();

            $('.itemsLista__password').slideDown();
        });

        $('#btnOcultarPassword').click(function(){
            $('#btnOcultarPassword').hide();
            $('#btnMostrarPassword').show();

            $('.itemsLista__password').slideUp();
        });


        // -------------- Localizacion ---------------

        $('#btnMostrarLocation').click(function(){
            $('#btnMostrarLocation').hide();
            $('#btnOcultarLocation').show();

            $('.itemsLista__location').slideDown();
        });

        $('#btnOcultarLocation').click(function(){
            $('#btnOcultarLocation').hide();
            $('#btnMostrarLocation').show();

            $('.itemsLista__location').slideUp();
        });


        // ------------ Numero de Celular -------------

        $('#btnMostrarCell').click(function(){
            $('#btnMostrarCell').hide();
            $('#btnOcultarCell').show();

            $('.itemsLista__cell').slideDown();
        });

        $('#btnOcultarCell').click(function(){
            $('#btnOcultarCell').hide();
            $('#btnMostrarCell').show();

            $('.itemsLista__cell').slideUp();
        });


        // ------------------ Genero -------------------

        $('#btnMostrarGender').click(function(){
            $('#btnMostrarGender').hide();
            $('#btnOcultarGender').show();

            $('.itemsLista__gender').slideDown();
        });

        $('#btnOcultarGender').click(function(){
            $('#btnOcultarGender').hide();
            $('#btnMostrarGender').show();

            $('.itemsLista__gender').slideUp();
        });
    };



    
// ---------------------------------------- Carga de la Página -------------------------------------------------

    $('body').hide();
    $('body').fadeIn();

    cargarUsuarios();


    $('#btnNewUsers').click(function(){
        itemsContainer.innerHTML = '';

        cargarUsuarios();
    });
});