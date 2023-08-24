const table = document.getElementById('tableBody')
const span = document.getElementById('span')

fetch("/api/user")
    .then(response => response.json())
    .then((user) => {
        let tr = `<tr><td>${user.id}</td>
                  <td>${user.name}</td>
                  <td>${user.surname}</td>
                  <td>${user.age}</td>
                  <td>${user.email}</td>
                  <td>${user.roles.map(role => role.role)}</td></tr>`
        table.innerHTML = tr

        span.innerHTML = `<h5><b>${user.email}</b> with roles: ${user.roles.map(role => role.role)}</h5>`
        let roles = `${user.roles.map(role => role.role)}`
        if (roles.indexOf("ADMIN") === -1) {
            document.getElementById('admin').style.display = "none";
        }
    })