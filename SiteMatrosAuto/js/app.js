function showPhoneNumber(number, button) {
    let existingPhoneNumberDivs = document.querySelectorAll('#phone-number');
    existingPhoneNumberDivs.forEach(div => div.remove());

    const phoneNumberDiv = document.createElement('div');
    phoneNumberDiv.id = 'phone-number';
    phoneNumberDiv.innerHTML = `<a href="tel:${number}">Телефон: ${number}</a>`;
    phoneNumberDiv.style.display = 'block';
    phoneNumberDiv.style.marginTop = '10px';
    button.parentElement.appendChild(phoneNumberDiv);

    let buttons = document.querySelectorAll('#ads button');
    buttons.forEach(btn => btn.disabled = false);

    button.disabled = true;
}

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = this.getAttribute('href');
        if (target === '#') {
            window.scrollTo({
                top: 200,
                behavior: 'smooth' 
            });
        }
    });
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = this.getAttribute('href');
        if (target === '#about') {
            window.scrollTo({
                top: 300,
                behavior: 'smooth' 
            });
        }
    });
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = this.getAttribute('href');
        if (target === '#offers') {
            window.scrollTo({
                top: 600,
                behavior: 'smooth' 
            });
        }
    });
});

function removeAd(button) {
    const adBlock = button.closest('.ad');
    adBlock.remove();
}

function addNewAd(event) {
    event.preventDefault();

    const carName = document.getElementById('carName').value;
    const carPrice = document.getElementById('carPrice').value;
    const carImage = document.getElementById('carImage').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    const adSection = document.getElementById('ads');
    const newAd = document.createElement('div');
    newAd.className = 'ad';
    newAd.style.backgroundColor = '#2F4F4F'; 

    newAd.innerHTML = `
        <img src="${carImage}" class="ad-image" onclick="window.open('${carImage}', '_blank')">
        <div class="ad-details">
            <h3>${carName}</h3>
            <div class="price-block">
                <p>Цена: ${carPrice} руб.</p>
            </div>
            <button type="button" onclick="showPhoneNumber('${phoneNumber}', this)">Купить</button>
            <button type="button" onclick="removeAd(this)">Удалить</button>
        </div>`;

    adSection.appendChild(newAd);

    document.getElementById('adForm').reset();
}

function removeAd(button) {
    const adElement = button.closest('.ad');
    adElement.remove();
}

document.getElementById('addOfferLink').addEventListener('click', function() {
    document.getElementById('addForm').scrollIntoView({ behavior: 'smooth' });
});

const themeToggle = document.getElementById('themeToggle');

let currentTheme = localStorage.getItem('theme') || 'dark'; 
document.body.classList.add(`${currentTheme}-theme`);

themeToggle.addEventListener('click', () => {
    if (currentTheme === 'dark') {
        currentTheme = 'light';
    } else {
        currentTheme = 'dark';
    }

    document.body.className = '';
    document.body.classList.add(`${currentTheme}-theme`);

    localStorage.setItem('theme', currentTheme);
});