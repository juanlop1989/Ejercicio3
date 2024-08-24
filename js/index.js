
function calcular() {
    let str1 = (document.getElementById("valor").value)


    if (str1===""){
        warning("Ha dejado el valor en blanco");
    } else {
    document.getElementById("resultado1").textContent = str1 * 1000
    document.getElementById("resultado2").textContent = str1 * 100
    document.getElementById("resultado3").textContent = str1 * 12
    document.getElementById("resultado4").textContent = str1 * 36
    check("Operación exitosa");

    }
  

}

function limpiar(){
    document.getElementById("resultado1").textContent=""
    document.getElementById("resultado2").textContent=""
    document.getElementById("resultado3").textContent=""
    document.getElementById("resultado4").textContent=""
    document.getElementById("valor").value=""
    check("Se han limpiado los campos")
}

function warning(mensaje){
    Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: mensaje,
      });
}

function check(mensaje2){
Swal.fire({
    position: "top-end",
    icon: "success",
    title: mensaje2,
    showConfirmButton: false,
    timer: 1500
  });
}

