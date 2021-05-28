
let signup = document.getElementById("signup");
let formbox = document.getElementById("formbox");



function renderSignUp(){
    formbox.innerHTML = `<p class="center"><strong>Create </strong>your new account</p><form class="form signup-form">
    <div class="form-group">
      <label for="name-signup">UserName:</label>
      <input class="form-input" type="text" id="name-signup" />
    </div>
    <div class="form-group">
      <label for="email-signup">Email:</label>
      <input class="form-input" type="text" id="email-signup" />
    </div>
    <div class="form-group">
      <label for="password-signup">password:</label>
      <input class="form-input" type="password" id="password-signup" />
    </div>
    <div class="form-group">
      <button class="btn btn-primary" type="submit" id="signupbutton" onclick="event.preventDefault(),signupFormHandler()">signup now</button>
    </div>
  </form>`;
  };

