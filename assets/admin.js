$(document).ready(function () {
  function listTableAdmin() {
    $.ajax({
      type: "POST",
      url: "http://localhost/PruebaDeSeleccionIvanSoto/controllers/userController.php",
      data: {
        peticion: "listadminall",
      },
    }).done(function (data) {
      let dato = JSON.parse(data);
      // $("#contenedor").empty();
      let button = "";
      for (let i = 0; i < dato.length; i++) {
        var datas = dato[i];
        if (datas.state == "Nuevo") {
          button = `<button class="btn btn-success" id="btnIniciar"> Iniciar </button>`;
        } else if (datas.state == "En progreso") {
          button = `<button class="btn btn-warning" id="btnCerrar"> Cerrar </button>`;
        } else if (datas.state == "Cerrado") {
          button = "En este estado no hay acciones";
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
        $("#tableAdmin").append(table);
      }
    });
  }
  listTableAdmin();

  $(document).on("click", "#btnIniciar", function (e) {
    var fila = $(this).closest("tr");
    id = parseInt(fila.find("td:eq(0)").text());

    var ruta =
      "http://localhost/PruebaDeSeleccionIvanSoto/controllers/userController.php";
    $.ajax({
      url: ruta,
      data: {
        peticion: "enprogreso",
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
        // console.log(data);
        // let datos = JSON.parse(data);
        if (data) {
          //I clean the form
          $("#tableAdmin").empty();
          listTableAdmin();
          //delete
          // $("#table").empty();
          // listTable();
        } else {
          alert("Error");
        }
      })
      .fail(function () {
        alert("error");
      });
  });

  $(document).on("click", "#btnCerrar", function (e) {
    var fila = $(this).closest("tr");
    id = parseInt(fila.find("td:eq(0)").text());

    var ruta =
      "http://localhost/PruebaDeSeleccionIvanSoto/controllers/userController.php";
    $.ajax({
      url: ruta,
      data: {
        peticion: "Cerrado",
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
        // console.log(data);
        // let datos = JSON.parse(data);
        if (data) {
          //I clean the form
          $("#tableAdmin").empty();
          listTableAdmin();
          //delete
          // $("#table").empty();
          // listTable();
        } else {
          alert("Error");
        }
      })
      .fail(function () {
        alert("error");
      });
  });
});
