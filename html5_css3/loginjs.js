function validate()
{
  var username = document.getElementById("username").value;
  var password = document.getElementById("pwd").value;

  if ( username == "educore" && password == "educore#123")
  {
    alert ("Login successful");
    window.location = "aboutus.html"; // Redirecting to other page.
    return false;
  }
  else if(username == '' || password == '')
  {
    alert("Login Unsuccessful");
    return false;
  }
}
