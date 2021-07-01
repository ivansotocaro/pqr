$(document).ready(function () {
  console.log("admin");
  // function listTable() {
  //   let user = $("#username-peti").val();
  //   $.ajax({
  //     type: "POST",
  //     url: "http://localhost/PruebaDeSeleccionIvanSoto/controllers/userController.php",
  //     data: {
  //       peticion: "listdatauser",
  //       user: user,
  //     },
  //   }).done(function (data) {
  //     let dato = JSON.parse(data);
  //     // $("#contenedor").empty();
  //     for (let i = 0; i < dato.length; i++) {
  //       var datas = dato[i];
  //       if (datas.state == "Nuevo") {
  //         var button = `<button name="update" type="submit" id="updateUser"  class="btn btn-primary btn-sm ">Update</button>
  //         <button name="delete" type="submit" id="deleteUser" class="btn btn-danger btn-sm ">Delete</button>`;
  //       } else {
  //         button = "Sin acciones";
  //       }
  //       var table = `
  //           <tr >
  //             <td class="idtable">${datas.id}</td>
  //             <th scope="row">${datas.typepqr}</th>
  //             <td>${datas.user}</td>
  //             <td>${datas.description}</td>
  //             <td>${datas.state}</td>
  //             <td>${datas.creationdate}</td>
  //             <td>
  //                 ${button}
  //             </td>
  //           </tr>
  //       `;
  //       $("#tableUser").append(table);
  //     }
  //   });
  // }
  // listTable();
});
