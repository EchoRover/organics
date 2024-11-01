
// Example object
const exampleObject = {
    name: "Grooves_Process",
    named: true,
    chemicals_used: "ROH",
    needs: "HCl ,anhy ZnCl2",
    Products: "RCl + H3O",
    chapter: "haloalkanes",
    tags: ["hello", "bas", "why"],
};

const colors = []

var names = []
var nameds = []
var images = []
var text_forms = []
var chemicals_useds = []
var needs = []
var products = []
var chapters = []
var tagsAll = []
var allthedata = []


// sub functions---------------------------------------------------------------

function appendList(data) {
    names.push(data.name)
    nameds.push(data.named)
    images.push(data.name)
    text_forms.push(data.name)
    chemicals_useds.push(data.name)
    needs.push(data.name)
    products.push(data.name)
    chapters.push(data.name)
    tagsAll.push(data.name)



}

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

function convertObjectValuesToLower(obj) {
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map((item) => convertObjectValuesToLower(item));
    }

    const lowerCasedObject = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            lowerCasedObject[key] =
                typeof value === "string" ? value.toLowerCase() : convertObjectValuesToLower(value);
        }
    }

    return lowerCasedObject;
}



function convertToLowerCase(value) {
    if (typeof value === "string") {
        return value.toLowerCase();
    } else if (Array.isArray(value)) {
        return value.map(convertToLowerCase);
    } else if (typeof value === "object" && value !== null) {
        const newObj = {};
        for (const key in value) {
            if (value.hasOwnProperty(key)) {
                newObj[key] = convertToLowerCase(value[key]);
            }
        }
        return newObj;
    } else {
        return value;
    }
}

// div related subs ---------------------------------------------------------------

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
    var tagsArray = data.tags.concat([data.name, data.chapter, data.text_form]);
    tagsArray = tagsArray.concat(data.chemicals_used)
    tagsArray = tagsArray.concat(data.needs)
    tagsArray = tagsArray.concat(data.products)
    if (data.named) {
        tagsArray.push("Named")
    }

    tagsArray = removeNullElements(tagsArray)

    return tagsArray;
}




function createreaction(data, uniqueid) {
    const container = document.getElementById("grid-of-reactions");
    const allthetags = generatetags(data)

    const tags = createtagdivs(allthetags)

    var the_name = ""

    if (data.named) {
        var the_name = "named"
    }


    const box = `

    <div class = "reaction " style = "background-color:${getRandomElementFromArray(colors)}" id = "id${uniqueid}">
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
    return allthetags


}










async function loadDataFromJsonFile(fileUrl) {
    return fetch(fileUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .catch((error) => {
            console.error("Error loading data:", error);
            throw error;
        });
}




async function create_all_reaction_divs() {
    try {
        const data = await loadDataFromJsonFile("data/data.json");
        data.forEach((element, index) => {
            appendList(element)
            tags = createreaction(element, index);
            element.tags = tags

            allthedata.push(convertToLowerCase(element))
        });

    } catch (error) {
        console.error("Error:", error);
    }
}



// after load

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

// search functions
const searchInput = document.getElementById("search");
function checkIfTextExists(textToFind, tags) {
    return tags.some(tag => tag.toLowerCase().startsWith(textToFind.toLowerCase()));
}

searchInput.addEventListener("input", (event) => {
    const value = event.target.value.toLowerCase()
    console.log(value)


    allthedata.forEach((reaction, index) => {
        const isvisible = checkIfTextExists(value, reaction.tags)
        const element = document.getElementById(`id${index}`)
        element.classList.toggle("hide", !isvisible)
    })
})






// top level statements
create_all_reaction_divs();

