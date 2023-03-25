const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = (countries) => {
    const countriesContainer = document.getElementById('all-countries');
    // for (const country of countries){
    //     // console.log(country)
    // }

    countries.forEach(country => {
        console.log(country.cca2);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3>Name : ${country.name.common} </h3>
        <p>Capital : ${country.capital ? country.capital[0] : 'No capital'}</p>
        <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
        `;
        countriesContainer.appendChild(countryDiv);
    });
    // console.log(countries[0].name.common);

}

const loadCountryDetails = code =>{
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log( url);
    fetch(url)
    .then(res => res.json())
    .then(data => showCountryDetails(data[0]))
}

const showCountryDetails = country =>{
    const detailConainer = document.getElementById('country-detail');
    detailConainer.innerHTML = `
    <h3>Name : ${country.name.common}</h3>
    <img src="${country.flags.png}">
    `
}


loadCountries();