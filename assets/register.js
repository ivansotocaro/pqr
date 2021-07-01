$(document).ready(function () {
  $(document).on("click", "#registerbtn", function (e) {
    e.preventDefault();

    var username = "";
    var email = 0;
    var password = "";
    var roles = "";
    var ruta = "";

    ruta =
      "http://localhost/PruebaDeSeleccionIvanSoto/controllers/loginController.php";
    username = $("#username-register").val();
    email = $("#email-register").val();
    password = $("#password-register").val();
    roles = $("#roles-register option:selected").val();

    $.ajax({
      url: ruta,
      data: {
        peticion: "save",
        username,
        email,
        password,
        roles,
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
        if (data) {
          //I clean the form
          clean();
          //delete
          // $("#table").empty();
          // listTable();
          alert("Datos Guardado");
        } else {
          alert("Error al Guardar");
        }
      })
      .fail(function () {
        alert("error");
      });
  });

  function clean() {
    document.getElementById("formregister").reset();
  }
});
