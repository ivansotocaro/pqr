$(document).ready(function () {
  $(document).on("click", "#saveUser", function (e) {
    e.preventDefault();

    var user = "";
    var typepqr = "";
    var description = "";
    var state = "";
    var ruta = "";

    ruta =
      "http://localhost/PruebaDeSeleccionIvanSoto/controllers/userController.php";

    var user = $("#username-peti").val();
    var typepqr = $("#tipo-pqr option:selected").val();
    var description = $("#descripcion-peti").val();
    var state = "Nuevo";
    console.log(user + typepqr + description + state);
    // $.ajax({
    //   url: ruta,
    //   data: {
    //     peticion: "registerUser",
    //     user,
    //     typepqr,
    //     description,
    //     state,
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
    //     if (data) {
    //       //I clean the form
    //       clean();
    //       //delete
    //       // $("#table").empty();
    //       // listTable();
    //       alert("Datos Guardado");
    //     } else {
    //       alert("Error al Guardar");
    //     }
    //   })
    //   .fail(function () {
    //     alert("error");
    //   });
  });

  // function listTable() {
  //   $.ajax({
  //     type: "POST",
  //     url: "../controllers/productController.php",
  //     data: {
  //       peticion: "listdata",
  //     },
  //   }).done(function (data) {
  //     dato = JSON.parse(data);

  //     $("#contenedor").empty();
  //     for (let i = 0; i < dato.length; i++) {
  //       var datas = dato[i];
  //       var table = `
  //           <tr >
  //             <td class="idtable">${datas["id"]}</td>
  //             <th scope="row">${datas["name"]}</th>
  //             <td>${datas["price"]}</td>
  //             <td>${datas["description"]}</td>
  //             <td>
  //                 <button name="update" type="submit" id="update"  class="btn btn-primary btn-sm ">Update</button>
  //                 <button name="delete" type="submit" id="delete" class="btn btn-danger btn-sm ">Delete</button>
  //             </>
  //           </tr>
  //       `;

  //       $("#table").append(table);
  //     }
  //   });
  // }

  // listTable();

  // $(document).on("click", "#delete", function () {
  //   var id = 0;
  //   var fila = $(this).closest("tr");
  //   id = parseInt(fila.find("td:eq(0)").text());
  //   var ruta = "../controllers/productController.php";

  //   $.ajax({
  //     type: "POST",
  //     url: ruta,
  //     data: {
  //       peticion: "delete",
  //       id: id,
  //     },
  //   }).done(function (data) {
  //     if (data) {
  //       //I clean the form
  //       $("#table").empty();
  //       listTable();
  //       alert("Eliminado");
  //     } else {
  //       alert("Error al eliminar");
  //     }
  //   });
  // });

  // $(document).on("click", "#update", function () {
  //   var id = 0;
  //   var fila = $(this).closest("tr");
  //   id = parseInt(fila.find("td:eq(0)").text());

  //   var ruta = "../controllers/productController.php";

  //   $.ajax({
  //     url: ruta,
  //     data: {
  //       peticion: "update",
  //       id: id,
  //     },
  //     type: "POST",
  //     statusCode: {
  //       404: function () {
  //         alert.error("La Ruta de la pagina no es la correcta");
  //       },
  //     },
  //   })
  //     .done(function (data) {
  //       var datos = JSON.parse(data);

  //       for (let i = 0; i < dato.length; i++) {
  //         ///POr aqui voy- 05/09/2020
  //       }
  //     })
  //     .fail(function () {
  //       alert("error");
  //     });
  // });

  function clean() {
    document.getElementById("formUser").reset();
  }
});
