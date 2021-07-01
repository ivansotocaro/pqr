<?php include_once('./views/component/header.php') ?>
  <div class="sidenav">
           <div class="login-main-text">
              <h2>Application<br> Login Page</h2>
              <p>Login or register from here to access.</p>
           </div>
        </div>
        <div class="main">
           <div class="col-md-6 col-sm-12">
              <div class="login-form">
                 <form action="#" method="post"  id="formlogin">
                    <div class="form-group">
                       <label>User Name</label>
                       <input type="text" name="username" id="username" class="form-control" placeholder="User Name">
                    </div>
                    <div class="form-group">
                       <label>Password</label>
                       <input type="password" name="passwordlogin" id="password" class="form-control" placeholder="Password">
                    </div>
                    <button type="submit" class="btn btn-secondary" id="loginbtn">Login</button>
                    <div class="form-group">
                      <a href="?register" class="text-dark  ml-3">go to Register</a> 
                    </div>
                    
                 </form>
              </div>
           </div>
        </div>

<?php include_once('./views/component/footer.php') ?>