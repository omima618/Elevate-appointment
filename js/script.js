document.querySelectorAll('.toggler-btn').forEach((btn) => {
    btn.addEventListener('click', function () {
        document.getElementById(`${this.dataset.toggle}`).classList.toggle('hidden');
    })
});

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('.dropdown') || e.target.closest('.dropdown')) return;
    document.getElementById('language-dropdown').classList.add('hidden');
})