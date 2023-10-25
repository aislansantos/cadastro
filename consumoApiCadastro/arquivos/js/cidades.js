const baseUrl = "http://localhost:3333/cidades";
const baseUrlPost = "http://localhost:3333/cidade";
const cidades = document.querySelector("#cidades");

async function loadCities() {
    const response = await fetch(baseUrl);
    const data = await response.json();
    let listCities = data;
    return listCities;
}

async function loadTable() {
    const listCities = await loadCities();

    listCities.forEach((element) => {
        // carrega os dados de cidade na table.
        const cidade = document.createElement("tr");
        cidade.innerHTML = `<td>${element.id}</td><td>${element.municipio}</td>
        <td>Excluir | Editar </td>`;
        cidades.appendChild(cidade);
    });
}

async function insertCities(city) {
    console.log(city);

    let response = await fetch(baseUrlPost, {
        method: "POST",
        body: JSON.stringify({
            municipio: city,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Sucesso", data);
            console.log(data);
        })
        .catch((error) => {
            console.log("Error: ", error);
        });
}

loadTable();
