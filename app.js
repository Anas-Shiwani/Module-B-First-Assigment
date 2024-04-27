var mobiles = {
    iPhone: {
        iphone7: {
            RAM: "2GB",
            ROM: "32GB",
            Camera: "12MP",
            Display: "4.7 inch LCD",
        },
        iphone8: {
            RAM: "2GB",
            ROM: "64GB",
            Camera: "12MP",
            Display: "4.7 inch LCD",
        },
        iphone8plus: {
            RAM: "3GB",
            ROM: "64GB",
            Camera: "12MP + 12MP dual-camera",
            Display: "5.5 inch LCD",
        },
        iphoneX: {
            RAM: "3GB",
            ROM: "64GB",
            Camera: "12MP + 12MP dual-camera",
            Display: "5.8 inch OLED",
        },
        iphone11: {
            RAM: "4GB",
            ROM: "64GB",
            Camera: "12MP + 12MP dual-camera",
            Display: "6.1 inch LCD",
        },
    },
    Xiomi: {
        redmiA2: {
            RAM: "4GB",
            ROM: "64GB",
            Camera: "12MP + 20MP dual-camera",
            Display: "5.99 inch LCD",
        },
        redmi10: {
            RAM: "6GB",
            ROM: "128GB",
            Camera: "48MP + 8MP + 2MP + 2MP quad-camera",
            Display: "6.67 inch LCD",
        },
        redmi11: {
            RAM: "6GB",
            ROM: "128GB",
            Camera: "50MP + 8MP + 2MP triple-camera",
            Display: "6.81 inch LCD",
        },
        redmi12: {
            RAM: "8GB",
            ROM: "256GB",
            Camera: "108MP + 8MP + 5MP triple-camera",
            Display: "6.81 inch OLED",
        },
        redmi13: {
            RAM: "8GB",
            ROM: "256GB",
            Camera: "108MP + 12MP + 5MP triple-camera",
            Display: "6.67 inch OLED",
        },
        redmi13C: {
            RAM: "12GB",
            ROM: "512GB",
            Camera: "200MP + 20MP + 5MP triple-camera",
            Display: "6.8 inch OLED",
        },
    },
    Realme: {
        realmiNote50: {
            RAM: "6GB",
            ROM: "128GB",
            Camera: "64MP + 8MP + 2MP triple-camera",
            Display: "6.6 inch LCD",
        },
        realmiC67: {
            RAM: "4GB",
            ROM: "64GB",
            Camera: "48MP + 2MP dual-camera",
            Display: "6.5 inch LCD",
        },
        realmiC53: {
            RAM: "6GB",
            ROM: "128GB",
            Camera: "64MP + 8MP + 2MP triple-camera",
            Display: "6.5 inch LCD",
        },
        realmi9: {
            RAM: "8GB",
            ROM: "128GB",
            Camera: "108MP + 13MP + 2MP + 2MP quad-camera",
            Display: "6.4 inch OLED",
        },
        realmi9i: {
            RAM: "4GB",
            ROM: "128GB",
            Camera: "50MP + 2MP dual-camera",
            Display: "6.6 inch LCD",
        },
    },
    Tecno: {
        spark20: {
            RAM: "4GB",
            ROM: "64GB",
            Camera: "13MP + 2MP + 2MP triple-camera",
            Display: "6.8 inch LCD",
        },
        spark20Pro: {
            RAM: "6GB",
            ROM: "128GB",
            Camera: "48MP + 8MP + 2MP triple-camera",
            Display: "6.8 inch LCD",
        },
        spark20C: {
            RAM: "3GB",
            ROM: "64GB",
            Camera: "16MP + 2MP dual-camera",
            Display: "6.52 inch LCD",
        },
        POVA6: {
            RAM: "6GB",
            ROM: "128GB",
            Camera: "48MP + 2MP + 2MP triple-camera",
            Display: "6.8 inch LCD",
        },
        PhantomV: {
            RAM: "8GB",
            ROM: "256GB",
            Camera: "50MP + 8MP + 13MP triple-camera",
            Display: "6.95 inch OLED",
        },
    },
};

var brand = document.getElementById("brand");
var model = document.getElementById("model");
var main = document.getElementById("main");
var box = document.getElementById("box");

// Populate brand select options
var allBrands = Object.keys(mobiles);
for (var i = 0; i < allBrands.length; i++) {
    brand.innerHTML += `<option>${allBrands[i]}</option>`;
}

function selectBrand() {
    main.innerHTML = ""; // Clear previous content in main
    var selectedBrand = brand.value;
    var allModels = Object.keys(mobiles[selectedBrand]);
    model.innerHTML = ""; // Clear previous content in model
    for (var i = 0; i < allModels.length; i++) {
        model.innerHTML += `<option value="${allModels[i]}">${allModels[i]}</option>`;
    }
}

function selectModel() {
    main.innerHTML = ""; // Clear previous content in main
    var selectedBrand = brand.value;
    var selectedModel = model.value;
    var modelNameHeading = document.createElement('h1');
    modelNameHeading.textContent = selectedModel;
    main.appendChild(modelNameHeading);
    var modelDetails = mobiles[selectedBrand][selectedModel];
    box.innerText = ""; // Clear previous content in box
    for (var spec in modelDetails) {
        box.innerText += `${spec}: ${modelDetails[spec]}\n`;
    }
}

