// LANGUAGE DROPDOWN
document.querySelectorAll('.toggler-btn').forEach((btn) => {
    btn.addEventListener('click', function () {
        document.getElementById(`${this.dataset.toggle}`).classList.toggle('hidden');
    })
});

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('.dropdown') || e.target.closest('.dropdown')) return;
    document.getElementById('language-dropdown').classList.add('hidden');
});

// SWITCH SERVICES

const switchService = (currentService) => {
    document.querySelectorAll('[data-service]').forEach((service) => {
        if (service.dataset.service === currentService) {
            setTimeout(() => { service.classList.remove('hidden'); }, 202);
            setTimeout(() => { service.classList.remove('opacity-0'); }, 400);
            service.querySelector('select').id = 'service';
        } else {
            service.classList.add('opacity-0');
            setTimeout(() => { service.classList.add('hidden'); }, 200);
            service.querySelector('select').id = '';
        }
    });
}

document.querySelectorAll('input[name="service-type"]').forEach((inp) => {
    inp.addEventListener('change', function () { 
        if (this.checked) {
            switchService(this.value);
        }
    })
})