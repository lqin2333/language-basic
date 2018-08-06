<!DOCTYPE html>
<html lang="en" >
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Blog -- Login</title>

    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">

    <!-- Custom styles for this template -->
    <link href="{{asset('/public/css/admin/signin.css')}}" rel="stylesheet">
  </head>

  <body class="text-center" data-gr-c-s-loaded="true" cz-shortcut-listen="true">
    <form action="" method="post" class="form-signin">
        {{csrf_field()}}
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputName" class="sr-only">Email address</label>
      <input type="name" id="inputName" class="form-control" placeholder="Name" required="" autofocus="" name="name">
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required=""  name="password">
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-muted">© 2017-2018</p>
    </form>


</body></html>
