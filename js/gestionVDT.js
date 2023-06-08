function validarVenta() {
    var sala = document.getElementById("sala").value;
    var horario = document.getElementById("horario").value;
    var numeroTiquetes = document.getElementById("numeroTiquetes").value;
    var posiciones = document.getElementById("posiciones").value;
    var formaPago = document.getElementById("formaPago").value;
    var cliente = document.getElementById("cliente").value;
    var fechaVenta = document.getElementById("fechaVenta").value;
    var vendedor = document.getElementById("vendedor").value;
  
    if (sala === "" || horario === "" || numeroTiquetes === "" || posiciones === "" || formaPago === "" || fechaVenta === "" || vendedor === "") {
        alert("Por favor, complete todos los campos.");
        return false; 
    }
  }
  function saveData() {
    var inputValue = document.getElementById('myInput').value;
    localStorage.setItem('savedData', inputValue);
  }