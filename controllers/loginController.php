<?php
session_start();

include "./../models/loginModel.php";
include "./../config/global.php";

class loginController extends loginModel
{

  function __construct()
  {
    parent::__construct();
  }
}


if (isset($_POST["peticion"])) {
  $listdata = $_POST["peticion"];
  $model = new userController();


  switch ($listdata) {

      //Listdata product
    case 'login':
      $model->setPassword($_POST["password"]);
      $model->setUserName($_POST["username"]);
      $datos = $model->userExist();

      if($datos['ok'] == 'true'){
        $_SESSION['rol'] = $datos['roles'];
        $_SESSION['username'] = $datos['username'];
        echo json_encode($datos);
      }else{
        echo json_encode($datos);
      }
      break;

      //save data from product
    case 'save':
      
      $model->setUserName($_POST["username"]);
      $model->setEmail($_POST["email"]);
      $model->setPassword($_POST["password"]);
      $model->setRoles($_POST["roles"]);
    
     
      $datos = $model->saveUser();
      echo json_encode($datos);
      break;

    case 'delete':

      // $model->setId($_POST["id"]);
      // $datos = $model->deleteProduct();
      // echo $datos;

      break;

    case 'update':

      // $model->setId($_POST["id"]);
      // $datos = $model->getProduct();
      // echo json_encode($datos);

      break;
  }
}
// $obj = new productController();
// $obj->list();
