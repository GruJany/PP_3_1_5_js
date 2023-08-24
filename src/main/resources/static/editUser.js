const formEditUser = document.getElementById('formEdit')
let editRole = document.querySelector('#roleEdit').selectedOptions
const editModalClose = document.getElementById('editModalClose')

function editModal(id) {
    fetch("/api/admin/users/" + id).then(response => response.json())
        .then(editUser => {
            formEditUser.idEdit.value = editUser.id
            formEditUser.usernameEdit.value = editUser.name
            formEditUser.lastNameEdit.value = editUser.surname
            formEditUser.ageEdit.value = editUser.age
            formEditUser.emailEdit.value = editUser.email

        })
}

formEditUser.addEventListener('submit', editUser => {
    editUser.preventDefault()
    let roles = []
    for (let i = 0; i < editRole.length; i++) {
        roles.push({
            id: editRole[i].value
        })
    }
    let method = {
        method: 'PATCH',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            id: formEditUser.idEdit.value,
            name: formEditUser.usernameEdit.value,
            surname: formEditUser.lastNameEdit.value,
            age: formEditUser.ageEdit.value,
            email: formEditUser.emailEdit.value,
            password: formEditUser.passwordEdit.value,
            roles: roles
        })
    }
    fetch("/api/admin/users/" + formEditUser.idEdit.value, method).then(() => {
        adminPage();
        editModalClose.click();
    })
})