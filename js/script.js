

/*async function fetchBanderas() {
    try {
        // Paso 1: Hacer la solicitud fetch
        const response = await fetch('https://restcountries.com/v3/all');
        
        // Verificar si la respuesta es correcta
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
    }
    .then(data => {
            // Paso 3: Manipular el DOM para mostrar el array
            const countriesList = document.createElement('ul');
                // Crear una lista para mostrar los datos
                data.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = JSON.stringify(item); // Convertir cada ítem a string
                    ul.appendChild(li);
    })
    })
    .catch(error => {
        console.error('Hubo un problema en el fetch:', error);
    });
}*/

function mostrarCuadrado(bandera) {
    const conDetalledDiv = document.getElementById('conDetalles')
    conDetalledDiv.style.display = 'block';
    
    conDetalledDiv.innerHTML = '<img src= ' + bandera.flags[1] + '></img>' +
                                '<h2>' + bandera.name.common + '</h2>' +
                                '<p>Capital: ' + bandera.capital + '</p>' +
                                '<p>Población:' + bandera.population + '</p>' +
                                '<p>Lado de la carretera: ' + bandera.car.side +'</p>'

    const buttonCerrar = document.createElement('button');
    buttonCerrar.innerHTML = 'Cerrar'
    buttonCerrar.addEventListener('click', ocultarCuadrado);
    conDetalledDiv.appendChild(buttonCerrar)
}

function ocultarCuadrado() {
    const conDetalledDiv = document.getElementById('conDetalles')
    conDetalledDiv.style.display = 'none';
}


function fetchBanderasConThen() {
    fetch('https://restcountries.com/v3/all')
        .then(response => response.json())
        .then((response) => {
            let banderas = response;
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
            mostartEnPantalla(banderas)
        })
        .catch((error) => {
            console.error(error)
        });
}





fetchBanderasConThen();










/*async function fetchBanderasConAwait() {
    const response = await fetch('https://restcountries.com/v3/all');
    const banderas = await response.json()
    return banderas
}*/
// const banderasPromesa = fetchBanderasConAwait()