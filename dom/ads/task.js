
const arrRotator = Array.from(document.getElementsByClassName('rotator__case'));

function adsRotator() {
    arrRotator.forEach((e) => {
        e.classList.toggle('rotator__case_active');       
    });
};

setInterval(adsRotator, 1000);