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
   
  }

  public function setUser($user)
  {
    $this->user = $user;
    
  }
  
  public function setTypepqr($typepqr)
  {
    $this->typepqr = $typepqr;
    
  }

  public function setDescription($description)
  {
    $this->description = $description;
   
  }

  public function getState()
  {
    return 'Nuevo';
   
  }

  public function getCreationdate()
  {
    return date(DATE_RFC2822);
  }

  public function getLimitedate()
  {
    return date(DATE_RFC2822);
  }



  function saveUser()
  {
    $sql = "INSERT INTO pqr(typepqr, user, description, state,creationdate,limitedate) values('".$this->typepqr."', '".$this->user."','".$this->description."','".$this->getState()."','".$this->getCreationdate()."','".$this->getLimitedate()."')";
    $sentence = $this->pdo->prepare($sql);
    // $sentence->execute(array(":typepqr" => $this->typepqr,":user" => $this->user,":description" => $this->description,":state" => 'Nuevo',":creationdate" => $this->getCreationdate(),":limitedate" => $this->getLimitedate()));
    $sentence->execute();
    return array('ok' => true);
  }

 
  function listpqr()
  {
  
    $sql = "SELECT * FROM pqr WHERE user = '".$this->user."'";
    $sentence = $this->pdo->prepare($sql);
    $sentence->execute();
    $listpqr = $sentence->fetchAll(PDO::FETCH_ASSOC);
    return $listpqr;
  }

  function deletePqr()
  {
    $sql = "DELETE FROM pqr WHERE id ='".$this->id."'";
    $sentence = $this->pdo->prepare($sql);
    $sentence->execute();
    return $sentence;
  }


  function getuser()
  {
    
    $sql = "SELECT * FROM pqr WHERE id = '".$this->id."'";
    $sentence = $this->pdo->prepare($sql);
    $sentence->execute();
    $listpqr = $sentence->fetchAll(PDO::FETCH_ASSOC);
    return $listpqr;
  }
  

}
?>