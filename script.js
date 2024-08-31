// Configuración de la fecha objetivo
const targetDate = new Date("December 31, 2024 23:59:59").getTime(); // Cambia a tu fecha objetivo
const countdownName = "Año Nuevo 2025"; // Cambia el nombre de tu cuenta atrás

// Actualiza el nombre de la cuenta atrás
document.getElementById('countdown-name').textContent = countdownName;

// Actualiza la cuenta atrás cada segundo
const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const timeDiff = targetDate - now;

    if (timeDiff <= 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").textContent = "¡Tiempo Finalizado!";
        return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById("countdown").textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);
