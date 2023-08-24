const formDeleteUser = document.getElementById('deleteForm')
const deleteModalClose = document.getElementById('deleteModalClose')


function deleteModal(id) {
    fetch("/api/admin/users/" + id).then(response => response.json())
        .then(deleteUser => {
            formDeleteUser.idDelete.value = deleteUser.id
            formDeleteUser.usernameDelete.value = deleteUser.name
            formDeleteUser.lastNameDelete.value = deleteUser.surname
            formDeleteUser.ageDelete.value = deleteUser.age
            formDeleteUser.emailDelete.value = deleteUser.email
        })
}

formDeleteUser.addEventListener('submit', deleteUser => {
    deleteUser.preventDefault()
    let method = {
        method: 'DELETE'
    }

    fetch("http://localhost:8080/api/admin/users/" + formDeleteUser.idDelete.value, method).then(() => {
        adminPage();
        deleteModalClose.click();
    })
})