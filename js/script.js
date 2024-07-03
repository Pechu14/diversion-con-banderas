

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

function fetchBanderasConThen() {
    fetch('https://restcountries.com/v3/all')
        .then(response => response.json())
        .then((response) => {
            console.log("🚀 ~ fetchBanderasConThen ~ response:", response)
            let banderas = response;
            const mostartEnPantalla = (banderas) => {
                const countriesList = document.getElementById('countries-list');
            
                let totalDivs =''
                banderas.forEach(bandera => {
                    let  divBandera = '<div id= "sinDetalles>' +
                    '<img src=' + bandera.flags[1] + '> </img>' +
                    '<p>' + bandera.name.common + '</p>' +
                     '</div>';
                    totalDivs = totalDivs + divBandera;
                })
                countriesList.innerHTML = totalDivs;
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