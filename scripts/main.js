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

// createtile(element)




function showhidetags(element){
    const parent = element.parentElement
    const tags = parent.querySelector('.tags');
    const displayValue = window.getComputedStyle(tags).getPropertyValue('display');

    // Toggle the "display" property based on the current state
    if (displayValue === 'none') {
        tags.style.display = 'block';
    } else {
        tags.style.display = 'none';
    }


}

const searchInput = document.getElementById("search");


searchInput.addEventListener("input",(event)=>{
    const value = event.target.value
    console.log(value)
})