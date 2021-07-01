  <?php include_once('./views/component/header.php') ?>
  <div class="sidenav">
           <div class="login-main-text">
              <h2>Application<br> Register Page</h2>
              <p>Login or register from here to access.</p>
           </div>
        </div>
        <div class="main">
           <div class="col-md-6 col-sm-12">
              <div class="login-form">
                 <form  action="#" method="post"  id="formregister">
                    <div class="form-group">
                       <label>User Name</label>
                       <input type="text" name="username-register" id="username-register" class="form-control" placeholder="User Name">
                    </div>
                    <div class="form-group">
                       <label>email</label>
                       <input type="email" name="email-register" id="email-register" class="form-control" placeholder="example@gmail.com">
                    </div>
                    <div class="form-group">
                       <label>Password</label>
                       <input type="password" name="password-register" id="password-register" class="form-control" placeholder="Password">
                    </div>
                    <div class="form-group">
                      <select class="form-select form-select-sm select-register" id="roles-register" aria-label=".form-select-sm example">
                        <option selected>select tipe user</option>
                        <option value="admin">Admin</option>
                        <option value="user">user</option>
                      </select>
                    </div> 
                    <div class="form-group">
                        <button type="submit" class="btn btn-secondary" id="registerbtn">Register</button> 
                    </div>
                <div class="form-group">
                    <a href="?login" class="text-dark  ml-3">go to login</a>
                </div> 
                 </form>


                 
              </div>
           </div>
        </div> 


<?php include_once('./views/component/footer.php') ?>