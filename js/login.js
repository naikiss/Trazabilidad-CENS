function validarCredenciales() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username === "sebastian" && password === "1234") {
      window.location.href = "src/dashboard.html";
    } else {
      alert("Credenciales incorrectas. Por favor intenta de nuevo.");
    }
  }

function llamarNombre() {
  var usuario = ("username").value;
}