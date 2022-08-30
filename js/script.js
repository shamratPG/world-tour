let countryName = ''
let countryList

const allCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => {
            countryList = [...data];
            loadOptions(data);
            // console.log(data);
        })
}


const loadOptions = value => {
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
    const name = document.getElementById('name');
    const image = document.getElementById('flag');
    const region = document.getElementById('region');
    const language = document.getElementById('language');
    const capital = document.getElementById('capital');
    language.innerText = ``
    capital.innerText = ``;


    countryList.forEach(element => {
        if (element.name.common == countryName) {
            console.log(element);
            const capitalList = element.capital;
            const languageList = element.languages;
            image.setAttribute('src', `${element.flags.png}`);
            name.innerText = `${element.name.official}`;
            region.innerText = `${element.region}`;
            addlist(capitalList, capital);
            addlist(languageList, language);
        }
    })
    const h3 = document.querySelectorAll('.hidden');
    for (item of h3) {
        console.log(item)
        item.classList.remove('hidden')
    }
}

const addlist = (list, appendContainer) => {
    if (Array.isArray(list)) {
        for (item of list) {
            const listItem = document.createElement('p');
            listItem.innerText = `${item}`;
            appendContainer.appendChild(listItem);
        }
    } else if (typeof list == 'object') {
        for (item in list) {
            const listItem = document.createElement('p');
            listItem.innerText = `${list[item]}`;
            appendContainer.appendChild(listItem);
        }
    }
}

allCountries()