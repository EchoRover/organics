const element = {
    "name":"",
    "Named":null,
    "image":"images/img",
    "text_form":"hello",
    "chemicals_used":"HCl",
    "catalysts":"Pyridine",
    "products":"R-Cl",
    "chapter":null

}



function createtile(data){
    const container = document.getElementById("grid-of-reactions");
    const box = `
    <div>
        <div>${data.name}</div>
        <div>${data.image}</div>
        <div>${data.chemicals_used}</div>
        <div>${data.catalysts}</div>
        <div>${data.products}</div>
    </div>
    
    `
    container.innerHTML += box


}

createtile(element)