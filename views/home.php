  <?php include_once('./views/component/header.php') ?>

  <nav class="navbar navbar-dark bg-primary">
    <h3 style="color:white;">PQR  <?= $_SESSION['rol']?></h3>
  </nav>

  <form action="#" method="post"  id="formUser">
    <div class="container mt-5">
      <div class="row">

        <div class="col-md-5">
          <!-- <select class="form-select form-select-sm select-register" id="roles-register" aria-label=".form-select-sm example">
            <option selected>select tipe user</option>
            <option value="admin">Admin</option>
            <option value="user">user</option>
          </select> -->
          <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" id="tipo-pqr">
            <option selected >Tipo pqr:</option>
            <option value="peticion">Peticion</option>
            <option value="queja">Queja</option>
            <option value="reclamos">Reclamos</option>
          </select>
        </div> 

        <div class="col-md-5">
          <input type="hidden" value="<?php $_SESSION['username'] ?>" id="username-peti" class="form-control">
        
        </div>

        
      </div>

      <div class="row mt-4">
        <div class="col-md-5">
          <textarea class="form-control" placeholder="descripcion.." id="descripcion-peti"></textarea>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-md-1">
          <button name="save" type="submit" id="saveUser" class="btn btn-primary btn-sm btn-block">Add</button>
        </div>
      </div>
    </div>
  </form>
  
  <?php if($_SESSION['rol'] == 'admin'){ ?>
  <div class="container">
    <div class="row">
      <div class="col-md-12 mt-5">

        <table class="table mb-5">
          <thead class="thead-dark">
            <tr>
              <th scope="col" class="idtable">id</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody id="table">

          </tbody>
        </table>

      </div>
    </div>
  </div>
  <?php } ?>

  <?php if($_SESSION['rol'] == 'user'){ ?>
  <div class="container">
    <div class="row">
      <div class="col-md-12 mt-5">

        <table class="table mb-5">
          <thead class="thead-dark">
            <tr>
              <th scope="col" class="idtable">id</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody id="table">

          </tbody>
        </table>

      </div>
    </div>
  </div>
  <?php } ?>




  
<?php include_once('./views/component/footer.php') ?>