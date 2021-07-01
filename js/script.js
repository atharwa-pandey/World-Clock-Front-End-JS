document.addEventListener('DOMContentLoaded', () => {

    const countryName = document.querySelector('#country');
    const hours = document.querySelector('#hours');
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');
    const IndiaBtn = document.querySelector('#India');
    const UKBtn = document.querySelector('#UnitedKingdom');
    const USABtn = document.querySelector('#USA');
    const JapanBtn = document.querySelector('#Japan');
    const FranceBtn = document.querySelector('#France');
    const NewZealandBtn = document.querySelector('#NewZealand');
    const RussiaBtn = document.querySelector('#Russia');
    const ChinaBtn = document.querySelector('#China');


    let offset = +5.5;

    const displayIndiaName = () => {
        countryName.innerHTML = 'India';
        offset = +5.5;
    }
    const displayUKName = () => {
        countryName.innerHTML = 'United Kingdom' ;
        offset = +1;
    }
    const displayUSAName = () => {
        countryName.innerHTML = 'USA' ;
        offset = -4;
    }
    const displayJapanName = () => {      // cut pe dhyaan dena, smooth lagana he
        countryName.innerHTML = 'Japan' ;
        offset = +9;
    }
    const displayFranceName = () => {
        countryName.innerHTML = 'France' ;
        offset = +1;
    }
    const displayNewZealandName = () => {
        countryName.innerHTML = 'New Zealand' ;
        offset = +12;
    }
    const displayRussiaName = () => {
        countryName.innerHTML = 'Russia' ;
        offset = +3;
    }
    const displayChinaName = () => {
        countryName.innerHTML = 'China' ;
        offset = +8;
    }

    setInterval(() => {
        let d = new Date;
        let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        let nd = new Date(utc + (3600000*offset));
        hours.innerHTML = nd.getHours();
        minutes.innerHTML = nd.getMinutes();
        seconds.innerHTML = nd.getSeconds();
    }, 100);

    IndiaBtn.addEventListener('click', displayIndiaName);
    UKBtn.addEventListener('click', displayUKName);
    USABtn.addEventListener('click',displayUSAName);
    JapanBtn.addEventListener('click',displayJapanName);
    FranceBtn.addEventListener('click',displayFranceName);
    NewZealandBtn.addEventListener('click',displayNewZealandName);
    RussiaBtn.addEventListener('click',displayRussiaName);
    ChinaBtn.addEventListener('click',displayChinaName);

})