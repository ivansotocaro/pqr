$(document).ready(function () {
  $(document).on("click", "#loginbtn", function (e) {
    e.preventDefault();

    var username = "";
    var password = "";
    var ruta = "";

    ruta =
      "http://localhost/PruebaDeSeleccionIvanSoto/controllers/loginController.php";
    username = $("#username").val();
    password = $("#password").val();

    $.ajax({
      url: ruta,
      data: {
        peticion: "login",
        username,
        password,
      },
      type: "POST",
      statusCode: {
        404: function () {
          alert.error("La Ruta de la pagina no es la correcta");
        },
      },
    })
      .done(function (data) {
        // console.log(data);
        let datos = JSON.parse(data);
        // console.log(datos);
        if (datos.ok) {
          //I clean the form
          clean();
          //delete
          // $("#table").empty();
          // listTable();
          alert("Bienvenido");
          location.href = location.href;
          location.reload();
        } else {
          alert("Error al entrar");
        }
      })
      .fail(function () {
        alert("error");
      });
  });

  function clean() {
    document.getElementById("formlogin").reset();
  }
});
