document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "Walver" && password === "Arana") {
        window.location.href = "index.html"; // Redirigir a index.html si las credenciales son correctas
    } else {
        document.getElementById("message").innerText = "Tu usuario o contraseña son incorrectos. Vuelve a intentar más tarde.";
    }
});