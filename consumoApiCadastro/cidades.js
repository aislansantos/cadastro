const baseUrl = "http://localhost:3333/cidades";

async function consultaCidades() {
    const response = await fetch(baseUrl);
    const data = await response.json();
    console.log(data);
}

consultaCidades();
