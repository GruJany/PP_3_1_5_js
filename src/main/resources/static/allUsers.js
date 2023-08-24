const bodyTable = document.getElementById('tbody')
const span = document.getElementById('span')
const edit = document.getElementsByClassName('btn-primary')
fetch("http://localhost:8080/api/user").then((response => response.json())).then((user => authUser(user)))

function adminPage() {
    let tr = ''
    fetch("http://localhost:8080/api/admin/users").then((response => response.json()))
        .then((users => {
            for (let user of users) {
                tr += `<tr><td>${user.id}</td>
                  <td>${user.name}</td>
                  <td>${user.surname}</td>
                  <td>${user.age}</td>
                  <td>${user.email}</td>
                  <td>${user.roles.map(role => role.role)}</td>
                  <td> <button  type="button" class="btn btn-primary" data-toggle="modal" data-target="#editModal" onclick="editModal(${user.id})">Edit</button></td>
                  <td><a  style="color: white" class="btn btn-danger" data-target="#deleteModal" data-toggle="modal" onclick="deleteModal(${user.id})">delete</a></td></tr>`
            }
            bodyTable.innerHTML = tr
        }))

}

function authUser(user) {
    span.innerHTML = `<h5><b>${user.email}</b> with roles: ${user.roles.map(role => role.role)}</h5>`
}

adminPage()