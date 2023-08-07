const element = {
    "name": "Grooves_Process",
    "named": true,
    "image": "images/",
    "text_form": "roh + hcl",
    "chemicals_used": "ROH",
    "needs": "HCl anhy ZnCl2",
    "Products": "RCl + H3O",
    "chapter": "haloalkanes",
    "tags": []
}






function createreaction(data){
    const container = document.getElementById("grid-of-reactions");
    const box = `
    <div class = "reaction ">
            <div class = "name named-reation">${data.name}</div>
            <div class = "image"><img src = "data/images/${data.name.toLowerCase()}.png" onerror="setDefaultImage(this)"></div>
            <div class = "info">
                <div class="row">
                    <div class = "heading">
                        Reactant:
                    </div>
                    <div class = "reactant">${data.chemicals_used}</div>

                </div>
                <div class="row">
                    <div class="heading">
                        Needs:
                    </div>
                    <div class = "catalys">${data.chemicals_used}</div>
                </div>
                <div class="row">
                    <div class="heading">
                        Product:
                    </div>
                    <div class = "product">${data.Products}</div>
                </div>
                
                
                
            </div>
            
            <button onclick="showhidetags(this)">Tags</button>
            <div class="tags">whay,waht ehwe whay,whay,waht ehwewahtwhay,waht ehwe whay,waht ehweehwe whay,waht ehwe whay,waht ehwe</div>
        </div>
    
    `
    container.innerHTML += box


}

createreaction(element)




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