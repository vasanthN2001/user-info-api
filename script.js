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
    const number = userData.phone_number;
    const country = userData.address.country;
    const dateOfBirth = userData.date_of_birth;
    const userName = userData.username;
    const id = userData.id;

    //About
    document.getElementById("name").innerHTML =  firstName + " " + lastName ;
    document.getElementById("email").innerHTML ="📧 " + email;
    //Details
    document.getElementById("city").innerHTML = "🌍 " + city;
    document.getElementById("dateOfBirth").innerHTML = "🎂 " + dateOfBirth;
    document.getElementById("number").innerHTML = "📞 " + number;
    document.getElementById("country").innerHTML = "🌍 " + country;
    document.getElementById("userName").innerHTML = "👨 " + userName;
    document.getElementById("id").innerHTML = "🔐 " + id;
  };
  xhttp.open("GET", "https://random-data-api.com/api/v2/users", true);
  xhttp.send();
};

//Request methods

//Status code
