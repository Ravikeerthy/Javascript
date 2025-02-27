function validateSubmit() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let contact = document.getElementById("contact").value;
    let country = document.getElementById("country").value;

    let fields = [username, email, password, contact, country];
    let fieldNames = ["Username", "Email", "Password", "Contact", "Country"];
    let i = 0;

    // Using while loop to check for empty fields
    while (i < fields.length) {
        if (fields[i] === "") {
            console.log(fieldNames[i] + " cannot be empty!");
            alert(fieldNames[i] + " cannot be empty!")
            return;
        }
        i++;
    }

    // Using if-else for basic validations
    if (username.length < 3) {
        console.log("Username must be at least 3 characters long!");
        alert("Username must be at least 3 characters long!")
        return;
    } else if (!email.includes("@")) {
        console.log("Invalid email format!");
        alert("Invalid email format!")
        return;
    } else if (password.length < 6) {
        console.log("Password must be at least 6 characters!");
        alert("Password must be at least 6 characters!");
        return;
    }else if (contact.length < 10) {
        console.log("Mobile number must be at least 10 numbers!");
        alert("Mobile number must be at least 10 numbers!");
        return;
    }

    // Using switch for country validation
    switch (country) {
        case "India":
        case "USA":
        case "UK":
            break; 
        default:
            console.log("Please select a valid country!");
            alert("Please select a valid country!");
            
            return;
    }

    alert("Validation successful!");
}


