const formNewUser = document.getElementById('addUser')
let newRole = document.querySelector('#role').selectedOptions
const tableAdmin = document.getElementById('tableAdmin')

formNewUser.addEventListener('submit', newUser => {
    newUser.preventDefault()
    let roles = []
    for (let i = 0; i < newRole.length; i++) {
        roles.push({
            id: newRole[i].value
        })
    }
    let method = {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            name: formNewUser.name.value,
            surname: formNewUser.surname.value,
            age: formNewUser.age.value,
            email: formNewUser.email.value,
            password: formNewUser.password.value,
            roles: roles
        })
    }
    fetch("/api/admin/users", method).then(() => {
        formNewUser.reset();
        adminPage();
        tableAdmin.click();
    })
})