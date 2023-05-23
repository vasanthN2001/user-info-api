const fetchUserDetails = () => {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        const jsonObj = JSON.parse(this.responseText)
        document.getElementById("userImage").src = jsonObj.avatar;
       // document.getElementById("userName").innerHTML = this.responseText;
        var userData = JSON.parse(xhttp.responseText);
        let name_first = userData.first_name;
        let name_last = userData.last_name;
        let City = userData.city;
        const email = userData.email;
        let gender = userData.gender;
        const number = userData.phone_number;
        let country = userData.country;
        let date_of_birth = userData.date_of_birth;
        let username = userData.username;

    //About
        document.getElementById("userName-first").innerHTML = "First-Name  :"+name_first;
        document.getElementById("userName-last").innerHTML = "Second-Name  :"+name_last;
        document.getElementById("email").innerHTML = "Email  :"+email;
    //Details
        document.getElementById("city").innerHTML = "City  "+City;
        document.getElementById("date_of_birth").innerHTML = "date_of_birth  "+date_of_birth;
        document.getElementById("gender").innerHTML = "Gender  "+gender;
       document.getElementById("number").innerHTML ="Phone-Number  "+ number;
       document.getElementById("country").innerHTML ="Country  "+ country;
       document.getElementById("username").innerHTML = "Username  "+username;
        /*document.getElementById("id").innerHTML = "Id"+id;
        document.getElementById("date_of_birth").innerHTML = "Date_of_birth"+date_of_birth;
        document.getElementById("employment").innerHTML = "Employment"+employment;*/


       


    }
    xhttp.open("GET", "https://random-data-api.com/api/v2/users", true);
    xhttp.send();

}



//Request methods

//Status code