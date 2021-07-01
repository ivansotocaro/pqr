$(document).ready(function () {
  $(document).on("click", "#saveUser", function (e) {
    e.preventDefault();

    var user = "";
    var typepqr = "";
    var description = "";

    var ruta = "";

    ruta =
      "http://localhost/PruebaDeSeleccionIvanSoto/controllers/userController.php";

    var user = $("#username-peti").val();
    var typepqr = $("#tipo-pqr option:selected").val();
    var description = $("#descripcion-peti").val();

    $.ajax({
      url: ruta,
      data: {
        peticion: "registerUser",
        user,
        typepqr,
        description,
      },
      type: "POST",
      statusCode: {
        404: function () {
          alert.error("La Ruta de la pagina no es la correcta");
        },
      },
    })
      .done(function (data) {
        let datos = JSON.parse(data);
        if (datos.ok) {
          //I clean the form
          clean();
          //delete
          // $("#table").empty();
          // listTable();

          alert("Datos Guardado");
          $("#tableUser").empty();
          listTable();
        } else {
          alert("Error al Guardar");
        }
      })
      .fail(function () {
        alert("error");
      });
  });

  // Update

  // $(document).on("click", "#updateUser", function (e) {
  //   e.preventDefault();

  //   var user = "";
  //   var typepqr = "";
  //   var description = "";

  //   var ruta = "";

  //   ruta =
  //     "http://localhost/PruebaDeSeleccionIvanSoto/controllers/userController.php";

  //   var user = $("#username-peti").val();
  //   var typepqr = $("#tipo-pqr option:selected").val();
  //   var description = $("#descripcion-peti").val();

  // $.ajax({
  //   url: ruta,
  //   data: {
  //     peticion: "updateUser",
  //     user,
  //     typepqr,
  //     description,
  //   },
  //   type: "POST",
  //   statusCode: {
  //     404: function () {
  //       alert.error("La Ruta de la pagina no es la correcta");
  //     },
  //   },
  // })
  //   .done(function (data) {
  //     console.log(data);
  //     // let datos = JSON.parse(data);
  //     // if (datos.ok) {
  //     //   //I clean the form
  //     //   clean();
  //     //   //delete
  //     //   // $("#table").empty();
  //     //   // listTable();

  //     //   alert("Datos Guardado");
  //     //   $("#tableUser").empty();
  //     //   listTable();
  //     // } else {
  //     //   alert("Error al Guardar");
  //     // }
  //   })
  //   .fail(function () {
  //     alert("error");
  //   });
  // });

  $(document).on("click", "#btncerrar", function (e) {
    var ruta =
      "http://localhost/PruebaDeSeleccionIvanSoto/controllers/loginController.php";
    $.ajax({
      url: ruta,
      data: {
        peticion: "cerrar",
      },
      type: "POST",
      statusCode: {
        404: function () {
          alert.error("La Ruta de la pagina no es la correcta");
        },
      },
    })
      .done(function (data) {
        let datos = JSON.parse(data);
        if (datos.ok) {
          //I clean the form

          //delete
          // $("#table").empty();
          // listTable();
          alert("Salir");
          location.reload();
        } else {
          alert("Error al Guardar");
        }
      })
      .fail(function () {
        alert("error");
      });
  });

  function listTable() {
    let user = $("#username-peti").val();

    $.ajax({
      type: "POST",
      url: "http://localhost/PruebaDeSeleccionIvanSoto/controllers/userController.php",
      data: {
        peticion: "listdatauser",
        user: user,
      },
    }).done(function (data) {
      let dato = JSON.parse(data);

      // $("#contenedor").empty();
      for (let i = 0; i < dato.length; i++) {
        var datas = dato[i];
        if (datas.state == "Nuevo") {
          var button = `<button name="update" type="submit" id="updateUser"  class="btn btn-primary btn-sm ">Update</button>
          <button name="delete" type="submit" id="deleteUser" class="btn btn-danger btn-sm ">Delete</button>`;
        } else {
          button = "Sin acciones";
        }
        var table = `
            <tr >
              <td class="idtable">${datas.id}</td>
              <th scope="row">${datas.typepqr}</th>
              <td>${datas.user}</td>
              <td>${datas.description}</td>
              <td>${datas.state}</td>
              <td>${datas.creationdate}</td>
              <td>
                  ${button}
              </td>
            </tr>
        `;

        $("#tableUser").append(table);
      }
    });
  }

  listTable();

  $(document).on("click", "#deleteUser", function () {
    var id = 0;
    var fila = $(this).closest("tr");
    id = parseInt(fila.find("td:eq(0)").text());

    var ruta =
      "http://localhost/PruebaDeSeleccionIvanSoto/controllers/userController.php";

    $.ajax({
      type: "POST",
      url: ruta,
      data: {
        peticion: "delete",
        id: id,
      },
    }).done(function (data) {
      if (data) {
        //I clean the form
        $("#tableUser").empty();
        listTable();
        alert("Eliminado");
      } else {
        alert("Error al eliminar");
      }
    });
  });

  $(document).on("click", "#updateUser", function () {
    var id = 0;
    var fila = $(this).closest("tr");
    id = parseInt(fila.find("td:eq(0)").text());
    ID = id;
    // ID = parseInt(fila.find("td:eq(0)").text());

    var ruta =
      "http://localhost/PruebaDeSeleccionIvanSoto/controllers/userController.php";

    $.ajax({
      url: ruta,
      data: {
        peticion: "update",
        id: id,
      },
      type: "POST",
      statusCode: {
        404: function () {
          alert.error("La Ruta de la pagina no es la correcta");
        },
      },
    })
      .done(function (data) {
        var datos = JSON.parse(data);
        // console.log(datos);
        for (let i = 0; i < datos.length; i++) {
          let date = datos[i];
          console.log(date.typepqr);
          $("#tipo-pqr option:selected").val(date.typepqr);
          $("#descripcion-peti").val(date.description);
        }
      })
      .fail(function () {
        alert("error");
      });
  });

  function clean() {
    document.getElementById("formUser").reset();
  }
});
