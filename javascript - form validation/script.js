var users_arr = [];
var html;
var user;
var getdata;
var rate_value;


window.onload = function()
{
  if(localStorage.data)
  {
  draw_table();
  }
 else
 {
   console.log("no data");
 }
};

// var myFunction = function (val) {
//   return val;
// }


function createUser(username1,password1,firstname1,lastname1,email1,gender1,location1){
      this.username = username1;
      this.password = password1;
      this.firstname = firstname1;
      this.lastname = lastname1;
      this.email = email1;
      this.gender = gender1;
      this.location = location1;
}
  function validate()
{
  var elem_obj = document.querySelectorAll('[ma_validate="true"]');
 // var elem_obj = $('[ma_validate="true"]');
  
  var err_elem_obj = document.querySelectorAll('[actn="err"]');
  //err_elem_obj = $('[actn="err"]');
  
  if(err_elem_obj.length > 0)
  {
    for(var j=0;j<err_elem_obj.length;j++){
      err_elem_obj[j].remove();
    }
  }
  
  for(var i=0;i<elem_obj.length;i++){
    if(elem_obj[i].value===''){
var err_html = '<p actn="err">please fill '+elem_obj[i].getAttribute('placeholder')+'</p>';
elem_obj[i].insertAdjacentHTML('afterend',err_html);
      
    }
  }
  if(document.getElementById("male").checked===false && document.getElementById("female").checked===false)
  {
    document.getElementById("gen").insertAdjacentHTML('afterend',"please select gender");
  }
  make_new_user();
}
  

  function make_new_user(){
    
  var username = document.getElementById("uname").value;
  var password = document.getElementById("pwd").value;
  var firstname= document.getElementById("fname").value;
  var lastname= document.getElementById("lname").value;
  var email= document.getElementById("email").value;
  ////gender//
  var genders = document.getElementsByName('gender');
for(var i = 0; i < genders.length; i++){
    if(genders[i].checked){
        gender_value = genders[i].value;
        console.log(gender_value);
    }
}
var gender = gender_value;
console.log(gender);
  ////
  var location= document.getElementById("location").value;
  
  if(username!=="" && password!=="" && firstname!=="" && lastname!=="" && email!=="" && gender!=="" && location!=="")
  {
  
  /////// submit user details
   users_arr[users_arr.length]= new createUser(username,password,firstname,lastname,email,gender,location);
   localStorage.setItem("data", JSON.stringify(users_arr));
   //draw_table();
   //location.reload();
   window.location.reload(true);
  }
}

function draw_table(){
  
  getdata = localStorage.getItem("data");
  users_arr = JSON.parse(getdata);

  html += "<table border='1'>";
  html += '<tr><th>username</th><th>password</th><th>firstname</th><th>lastname</th><th>email</th><th>gender</th><th>location</th></tr>';
    for(var i=0; i < users_arr.length; i++)
    {
    html += "<tr style='color:red'>"
    html += "<td>" + users_arr[i].username  + "</td>";
    html += "<td>" + users_arr[i].password  + "</td>";
    html += "<td>" + users_arr[i].firstname + "</td>";
    html += "<td>" + users_arr[i].lastname  + "</td>";
    html += "<td>" + users_arr[i].email     + "</td>";
    html += "<td>" + users_arr[i].gender     + "</td>";
    html += "<td>" + users_arr[i].location  + "</td>";
    html += "</tr>";
    }
    html += "</table>";
  document.getElementById("printTable").innerHTML = html;
    
}