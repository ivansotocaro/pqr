<?php

include __DIR__ ."/config.php";

class connection{

  private $server;
  private $user;
  private $pass;
  private $db;

  function __construct()
  {
    $this->server = SERVER; 
    $this->user = USER; 
    $this->pass = PASS; 
    $this->db = DB; 
    
  }

  function connect(){

    $servidor = "mysql:host=".$this->server.";dbname=".$this->db;
    try {
      $pdo = new PDO($servidor, $this->user, $this->pass);
      // echo "Conectado";
      return $pdo;
  
    } catch (PDOException $e) {

      echo $e->getMessage();
    }

  }

  
}

 $pdo = new connection();
 $pdo->connect();


?>