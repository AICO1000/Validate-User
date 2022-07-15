UserDatabase = {
    "samuel": {
        firstname: "samuel",
        lastname: "adamu",
        password: "aico1234",
        account_number: "0234350285",
        account_activation: true
    },
    "toyin": {
        firstname: "oluwatoyin",
        lastname: "joseph",
        password: "toyin1234",
        account_number: "0234250285",
        account_activation: true
    }
}

function displayUserDetails() {
    let username = prompt("Enter your username")
    while (validateUsername(username) == false) {
        username = prompt("Invalid username, Enter your username")
    }
    if (username === null) {
        return
    }

    let password = prompt("Enter your password")
    while (validateUserPassword(password) == false) {
        password = prompt("Invalid password, Enter your password")
    }
    if (password === null) {
        return

    }
    let confirmPassword = prompt("Confirm Password")
    while (confirmPassword !== password) {
        confirmPassword = prompt("Invalid password, Enter your password")
    }
    if (confirmPassword === null) {
        return
    }

    const user = UserDatabase[username]
    if (user == undefined) {
        alert("user not found")
        return
    }
    alert(`user was found with the following details:\n
    firstname: ${user.firstname}\n
    lastname: ${user.lastname}\n
    account number: ${user.account_number}\n
    account activation: ${user.account_activation}\n`)
    console.log(user)
}
displayUserDetails()


function validateUsername(username) {
    if (username == null) {
        return true
    }
    if (username.length > 10) {
        return false
    } else {
        return true
    }
}
function validateUserPassword(password) {
    if (password == null) {
        return true
    }
    if (password.length < 6) {
        return false
    } else {
        return true
    }
}