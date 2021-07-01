<?php

include "../config/connection.php";

class userModel{

  private $pdo; 
  private $id; 
  private $user; 
  private $typepqr; 
  private $description; 
  private $state; 
  private $creationdate; 
  private $limitedate; 

  function __construct()
  {
    $this->pdo = new connection();
    $this->pdo = $this->pdo->connect();
  }

  public function setId($id)
  {
    $this->id = $id;
    return $this->id;
  }

  public function setUser($user)
  {
    $this->user = $user;
    return $this->user;
  }
  
  public function setTypepqr($typepqr)
  {
    $this->typepqr = $typepqr;
    return $this->typepqr;
  }

  public function setDescription($description)
  {
    $this->$description = $description;
    return $this->$description;
  }

  public function setState($state)
  {
    $this->state = $state;
    return $this->state;
  }

  public function setCreationdate()
  {
    $this->creationdate = date(DATE_RFC2822);
    return $this->creationdate;
  }

  public function setLimitedate()
  {
    $this->limitedate = date(DATE_RFC2822);
    return $this->limitedate;
  }





  // function listProduct()
  // {
  //   $sql = "SELECT * FROM users";
  //   $sentece = $this->pdo->prepare($sql); 
  //   $sentece->execute();
  //   $listproduct = $sentece->fetchAll(PDO::FETCH_ASSOC);
  //   return $listproduct;
  // }


  // function userExist()
  // {
  //   $sql = "SELECT * FROM users where username = :user";
  //   $sentece = $this->pdo->prepare($sql); 
  //   $sentece->execute(array(':user' => $this->username ));
  //   $listuser = $sentece->fetch(PDO::FETCH_ASSOC);
    
  //   if(password_verify($this->password, $listuser['password'])){
  //     return array('ok'=> 'true', 'roles'=> $listuser['roles'], 'username'=>  $listuser['username'] );
  //   }
    
    
  //   return array('ok'=> 'Error', 'data'=> null);

  // }

  function saveUser()
  {
    $sql = "INSERT INTO pqr(typepqr, user, description, state,creationdate,limitedate) values(:typepqr,:user,:description,:state,:creationdate,:limitedate)";
    $sentence = $this->pdo->prepare($sql);
    $sentence->execute(array(":typepqr" => $this->typepqr,":user" => $this->user,":description" => $this->description,":state" => $this->state,":creationdate" => $this->setCreationdate(),":limitedate" => $this->setLimitedate()));
    return $sentence;
  }

  // $sql = "INSERT INTO users(username, email, password, roles) values(:username,:email,:password,:roles)";
  // $sentence = $this->pdo->prepare($sql);
  // $sentence->execute(array(":username" => $this->username, ":email" => $this->email, ":password" =>  password_hash($this->password, PASSWORD_DEFAULT), ":roles" => $this->roles));
  // return $sentence;


  // function deleteProduct()
  // {
  //   $sql = "DELETE FROM product WHERE id =". $this->id;
  //   $sentence = $this->pdo->prepare($sql);
  //   $sentence->execute();
  //   return $sentence;
  // }



}
?>