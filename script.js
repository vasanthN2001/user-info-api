const fetchUserDetails = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    const jsonObj = JSON.parse(this.responseText);
    document.getElementById("userImage").src = jsonObj.avatar;
    // document.getElementById("userName").innerHTML = this.responseText;
    const userData = JSON.parse(xhttp.responseText);
    const firstName = userData.first_name;
    const lastName = userData.last_name;
    const city = userData.address.city;
    const email = userData.email;
    const gender = userData.gender;
    const number = userData.phone_number;
    const country = userData.country;
    const dateOfBirth = userData.date_of_birth;
    const userName = userData.username;
    const id = userData.id;

    //About
    document.getElementById("firstName").innerHTML = "First-Name  :" + firstName;
    document.getElementById("lastName").innerHTML = "Second-Name  :" + lastName;
    document.getElementById("email").innerHTML = "Email  :" + email;
    //Details
    document.getElementById("city").innerHTML = "City  " + city;
    document.getElementById("dateOfBirth").innerHTML = "date_of_birth  " + dateOfBirth;
    document.getElementById("gender").innerHTML = "Gender  " + gender;
    document.getElementById("number").innerHTML = "Phone-Number  " + number;
    document.getElementById("country").innerHTML = "Country  " + country;
    document.getElementById("userName").innerHTML = "Username  " + userName;
    document.getElementById("id").innerHTML = "Id  " + id;
  };
  xhttp.open("GET", "https://random-data-api.com/api/v2/users", true);
  xhttp.send();
};

//Request methods

//Status code
