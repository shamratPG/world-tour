let countryName = ''
let countryList
const allCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => {
            countryList = [...data];
            displayCountries(data);
            // console.log(data)
        })
}


const displayCountries = value => {
    const container = document.getElementById('country-name');
    value.forEach(element => {
        const option = document.createElement('option');
        option.text = `${element.name.common}`;
        container.appendChild(option)
    });
}


const search = () => {
    const select = document.getElementById('country-name');
    countryName = select.options[select.selectedIndex].innerText;
    const image = document.getElementById('flag');
    countryList.forEach(element => {
        if (element.name.common == countryName) {
            image.setAttribute('src', `${element.flags.png}`);
        }
    })
}

allCountry()