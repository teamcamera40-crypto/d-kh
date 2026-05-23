let transactions = [];

function toggleTheme() {
    const body = document.documentElement;
    const isLight = body.getAttribute('data-theme') === 'light';
    body.setAttribute('data-theme', isLight ? 'dark' : 'light');
    localStorage.setItem('theme_elegant', isLight ? 'dark' : 'light');
}

function addTransaction() {
    const t = {
        id: Date.now(),
        source: document.getElementById('inputSource').value,
        type: document.getElementById('inputType').value,
        date: document.getElementById('inputDate').value,
        amount: parseFloat(document.getElementById('inputAmount').value),
        desc: document.getElementById('inputDesc').value
    };
    transactions.push(t);
    renderUI();
}

function renderUI() {
    // Fungsi untuk memperbarui tampilan saldo, grafik, dan list riwayat
    // (Gunakan logika yang sama seperti pada jawaban sebelumnya)
    console.log("Rendering UI...");
}

function saveData() {
    localStorage.setItem('keuangan_data', JSON.stringify(transactions));
    alert('Data tersimpan!');
}

window.onload = () => {
    const saved = localStorage.getItem('keuangan_data');
    if(saved) transactions = JSON.parse(saved);
    renderUI();
};