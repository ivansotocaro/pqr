<?php

include "../config/connection.php";

class loginModel{

  private $pdo; 
  private $id; 
  private $username; 
  private $email; 
  private $password; 
  private $roles; 

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

  public function setUserName($username)
  {
    $this->username = $username;
    return $this->username;
  }
  
  public function setEmail($email)
  {
    $this->email = $email;
    return $this->email;
  }

  public function setPassword($password)
  {
    $this->password = $password;
    return $this->password;
  }

  public function setRoles($roles)
  {
    $this->roles = $roles;
    return $this->roles;
  }



 

  function userExist()
  {
    $sql = "SELECT * FROM users where username = :user";
    $sentece = $this->pdo->prepare($sql); 
    $sentece->execute(array(':user' => $this->username ));
    $listuser = $sentece->fetch(PDO::FETCH_ASSOC);
    
    if(password_verify($this->password, $listuser['password'])){
      return array('ok'=> 'true', 'roles'=> $listuser['roles'], 'username'=>  $listuser['username'] );
    }
    
    
    return array('ok'=> 'Error', 'data'=> null);

  }

  function saveUser()
  {
    $sql = "INSERT INTO users(username, email, password, roles) values(:username,:email,:password,:roles)";
    $sentence = $this->pdo->prepare($sql);
    $sentence->execute(array(":username" => $this->username, ":email" => $this->email, ":password" =>  password_hash($this->password, PASSWORD_DEFAULT), ":roles" => $this->roles));
    return $sentence;
  }

  

}
?>