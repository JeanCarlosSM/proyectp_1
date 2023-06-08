function validarFormulario1() {
  var codigo = document.getElementById("codigo").value;
  var direccion = document.getElementById("direccion").value;
  var departamento = document.getElementById("departamento").value;
  var ciudad = document.getElementById("ciudad").value;
  var gerente = document.getElementById("gerente").value;
  var numSalas = document.getElementById("numSalas").value;
  var numTrabajadores = document.getElementById("numTrabajadores").value;

  if (codigo === "" || direccion === "" || departamento === "" || ciudad === "" || gerente === "" || numSalas === "" || numTrabajadores === "") {
    alert("Por favor, completa todos los campos obligatorios.");
    return false;
  }

  if (isNaN(numSalas) || isNaN(numTrabajadores)) {
    alert("Los campos Número de Salas y Número de Trabajadores deben ser numéricos.");
    return false;
  }
  return true;
}

function validarFormulario2() {
  var codigo = document.getElementById("codigo").value;
  var nombre = document.getElementById("nombre").value;
  var pais = document.getElementById("pais").value;
  var telefonos = document.getElementById("telefonos").value;
  var celulares = document.getElementById("celulares").value;
  var correo = document.getElementById("correo").value;
  var representante = document.getElementById("representante").value;

  if (codigo === "" || nombre === "" || pais === "" || telefonos === "" || celulares === "" || correo === "" || representante === "") {
    alert("Por favor, completa todos los campos obligatorios.");
    return false;
  }

  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(correo)) {
    alert("El formato del correo electrónico no es válido.");
    return false;
  }

  return true;
}

function validarFormulario3() {
  var codigo = document.getElementById("codigo").value;
  var nombreOriginal = document.getElementById("nombre-original").value;
  var nombreAsignado = document.getElementById("nombre-asignado").value;
  var genero = document.getElementById("genero").value;
  var idiomaOriginal = document.getElementById("idioma-original").value;
  var idiomasEscucha = document.getElementById("idiomas-escucha").value;
  var subtitulos = document.getElementById("subtitulos").value;
  var duracion = document.getElementById("duracion").value;
  var actoresPrincipales = document.getElementById("actores-principales").value;
  var actoresSecundarios = document.getElementById("actores-secundarios").value;
  var numAfiches = document.getElementById("num-afiches").value;
  var numCopias = document.getElementById("num-copias").value;
  var productora = document.getElementById("productora").value;

  if (codigo === "" || nombreOriginal === "" || nombreAsignado === "" || genero === "" || idiomaOriginal === "" || idiomasEscucha === "" || subtitulos === "" || duracion === "" || actoresPrincipales === "" || actoresSecundarios === "" || numAfiches === "" || numCopias === "" || productora === "") {
    alert("Por favor, completa todos los campos obligatorios.");
    return false;
  }
  var duracionRegex = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
  if (!duracionRegex.test(duracion)) {
    return false;
  }
  return true;
}

function validarCompra() {
  var numero = document.getElementById("numero").value;
  var sucursal = document.getElementById("sucursal").value;
  var peliculas = document.getElementById("peliculas").value;
  var cantidades = document.getElementById("cantidades").value;
  var precio = document.getElementById("precio").value;
  var subtotal = document.getElementById("subtotal").value;
  var total = document.getElementById("total").value;
  var fecha = document.getElementById("fecha").value;

  if (numero === "" || sucursal === "" || peliculas === "" || cantidades === "" ||
      precio === "" || subtotal === "" || total === "" || fecha === "") {
    alert("Por favor, completa todos los campos.");
    return false;
  }
  return true;
}

function validarCartelera() {
  var sala = document.getElementById("sala").value;
  var horario = document.getElementById("horario").value;
  var pelicula = document.getElementById("pelicula").value;
  var fechaInicio = document.getElementById("fechaInicio").value;
  var fechaFinalizacion = document.getElementById("fechaFinalizacion").value;

  if (sala === "" || horario === "" || pelicula === "" || fechaInicio === "" || fechaFinalizacion === "") {
    alert("Por favor, completa todos los campos.");
    return false;
  }
  return true;
}

function validarCliente() {
  var nombres = document.getElementById("nombres").value;
  var apellidos = document.getElementById("apellidos").value;
  var dni = document.getElementById("dni").value;
  var fechaNacimiento = document.getElementById("fechaNacimiento").value;
  var numeroCelular = document.getElementById("numeroCelular").value;
  var correoElectronico = document.getElementById("correoElectronico").value;

  if (nombres === "" || apellidos === "" || dni === "" || fechaNacimiento === "" || numeroCelular === "" || correoElectronico === "") {
    alert("Por favor, completa todos los campos.");
    return false;
  }
  return true;
}


function guardarUsuario(event) {
    event.preventDefault();

    var identificador = document.getElementById("identificador").value;
    var nombreUsuario = document.getElementById("nombreUsuario").value;
    var contrasena = document.getElementById("contrasena").value;
    var cargo = document.getElementById("cargo").value;

    var datos = {
        identificador: identificador,
        nombreUsuario: nombreUsuario,
        contrasena: contrasena,
        cargo: cargo
    };

    localStorage.setItem("usuario", JSON.stringify(datos));

    alert("El usuario ha sido guardado exitosamente.");
}

function consultarUsuarios() {
    var datosGuardados = localStorage.getItem("usuario");

    if (datosGuardados) {
        var datos = JSON.parse(datosGuardados);

        var identificador = datos.identificador;
        var nombreUsuario = datos.nombreUsuario;
        var contrasena = datos.contrasena;
        var cargo = datos.cargo;

        alert("Usuario:\n" +
            "Cedula: " + identificador + "\n" +
            "Nombre de Usuario: " + nombreUsuario + "\n" +
            "Contraseña: " + contrasena + "\n" +
            "Cargo: " + cargo);
    } else {
        alert("No se encontraron usuarios guardados.");
    }
}


document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("login-form");

  if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      const userRole = validarCredenciales(username, password);

      if (userRole) {
        redirigirSegunRol(userRole);
      } else {
        alert("Nombre de usuario o contraseña incorrectos. Por favor, inténtalo nuevamente.");
      }
    });
  }

});

function validarCredenciales(username, password) {
  if (username === "vendedor" && password === "12345") {
    return "vendedor";
  } else if (username === "cliente" && password === "12345") {
    return "cliente";
  } else if (username === "gerente" && password === "12345") {
    return "gerente";
  } else if (username === "administrador" && password === "12345") {
    return "administrador";
  }
  return null;
}

function redirigirSegunRol(userRole) {
  if (userRole === "vendedor") {
    window.location.href = "gestionDVentDTiketes.html";
  } else if (userRole === "cliente") {
    window.location.href = "accesoDCliente.html";
  } else if (userRole === "gerente") {
    window.location.href = "accesoDGerente.html";
  } else if (userRole === "administrador") {
    window.location.href = "accesoDAdministrador.html";
  }
}