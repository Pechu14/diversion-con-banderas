function mostrarCuadrado(bandera) {
    const conDetalledDiv = document.getElementById('conDetalles')
    conDetalledDiv.style.display = 'block';
    
    conDetalledDiv.innerHTML = '<div class="conDetalles">' +
                                    '<div class="bandera">' +
                                        '<img src= ' + bandera.flags[1] + '></img></div>' +

                                        '<div class="detalles"><h2>' + bandera.name.common + '</h2>' +
                                            '<p>Capital: ' + bandera.capital + '</p>' +
                                            '<p>Población:' + bandera.population + '</p>' +
                                            '<p>Lado de la carretera: ' + bandera.car.side +'</p>' +
                                        '</div>' + 
                                '</div>'

    const buttonCerrar = document.createElement('button');
    buttonCerrar.innerHTML = 'Cerrar'
    buttonCerrar.addEventListener('click', ocultarCuadrado);
    conDetalledDiv.appendChild(buttonCerrar)
}

function ocultarCuadrado() {
    const conDetalledDiv = document.getElementById('conDetalles')
    conDetalledDiv.style.display = 'none';
}

const mostartEnPantalla = (banderas) => {
    const countriesList = document.getElementById('countries-list');
    banderas.forEach(bandera => {
        const divBandera = document.createElement('div');
        divBandera.className = 'sinDetalles';
        divBandera.innerHTML = '<img src=' + bandera.flags[1] + '> </img>' +
                                    '<p>' + bandera.name.common + '</p>'
        divBandera.addEventListener('click', () => mostrarCuadrado(bandera));
        countriesList.appendChild(divBandera);
    })
} 

let banderas = ''


function fetchBanderas() {
    fetch('https://restcountries.com/v3/all')
        .then(response => response.json())
        .then((response) => {
            let banderas = response;
            banderas.sort((a, b) => a.name.common.localeCompare(b.name.common));
            mostartEnPantalla(banderas)
        })
        .catch((error) => {
            console.error(error)
        });
}

fetchBanderas();
