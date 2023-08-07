const element = {
    "name": "Grooves_Process",
    "named": true,
    "image": "images/",
    "text_form": null,
    "chemicals_used": "ROH",
    "needs": "HCl ,anhy ZnCl2",
    "products": "RCl + H3O",
    "chapter": "haloalkanes",
    "tags": []
}

const colors = []

function getRandomElementFromArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }

    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function removeNullElements(arr) {
    return arr.filter((element) => element !== null);
}


function createtagdivs(tagsArray) {

    const tagcontainer = document.createElement('div')
    tagcontainer.style = ""
    tagcontainer.classList.add("tags");
    tagsArray.forEach(element => {
        const tag = document.createElement('div')
        tag.innerHTML = element
        tag.classList.add("tag")
        tagcontainer.appendChild(tag)

    });
    // console.log(tagcontainer.outerHTML)

    return tagcontainer
}

function generatetags(data) {
    var tagsArray = data.tags.concat([data.name, data.chapter, data.text_form, data.chemicals_used, data.needs, data.products]);
    tagsArray = removeNullElements(tagsArray)
    console.log(tagsArray);
    return tagsArray;
}




function createreaction(data) {
    const container = document.getElementById("grid-of-reactions");

    const tags = createtagdivs(generatetags(data))

    var the_name = ""

    if (data.named){
        var the_name = "named"
    }


    const box = `

    <div class = "reaction " style = "background-color:${getRandomElementFromArray(colors)}">
            <div class = "name  ${the_name}">${data.name}</div>
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
                    <div class = "catalys">${data.needs}</div>
                </div>
                <div class="row">
                    <div class="heading">
                        Product:
                    </div>
                    <div class = "product">${data.products}</div>
                </div>
                
                
                
            </div>
            
            <button onclick="showhidetags(this)">Tags</button>
            ${tags.outerHTML}
        </div>

    
    `

    // <div class="tags">${data.tags} ${data.text_form}</div>
    container.innerHTML += box


}

async function fetchData() {
    try {
        const response = await fetch("data/data.json");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

async function create_all_reactions() {
    try {
        const data = await fetchData();
        data.forEach(element => {
            createreaction(element);
        });
    } catch (error) {
        console.error("Error:", error);
    }
}

create_all_reactions();




// for (i = 1; i < 100; i++) {
//     createreaction(element)

// }

// createreaction(element)





function showhidetags(element) {
    const parent = element.parentElement
    const tags = parent.querySelector('.tags');
    const displayValue = window.getComputedStyle(tags).getPropertyValue('display');
    console.log(displayValue)

    if (displayValue == 'none') {
        console.log("whu")
        tags.style.display = 'flex';
    } else {
        tags.style.display = 'none';
        console.log(displayValue)
    }


}

const searchInput = document.getElementById("search");


searchInput.addEventListener("input", (event) => {
    const value = event.target.value
    console.log(value)
})