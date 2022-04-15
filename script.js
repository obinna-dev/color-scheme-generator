let seedColor = ""
let selectedColorScheme = ""
let colorsArr = []
let colorSchemeHtml = ""
const colorPickerForm = document.getElementById("color-picker-form")

function renderColors() {
    
    for (let color of colorsArr) {
        colorSchemeHtml += `
        <div id="color-bar" class="color-bar">
            <img src="${color.image.bare}" alt="${color.name.value} HexCode ${color.name.closest_named_hex}">
            <p>colors go here</p>
        </div>
        `
        console.log(`The color is ${color.hex.value} and you can view the image here ${color.image.bare}`)
    }
    document.getElementById("color-bars-container").innerHTML = colorSchemeHtml
}

colorPickerForm.addEventListener("submit", (e) => {
    e.preventDefault()
    seedColor = document.getElementById("seed-color-picker").value.replace("#", "")
    selectedColorScheme = document.getElementById("select-color-scheme").value
    console.log(seedColor + "  & " + selectedColorScheme)
    console.log(`https://www.thecolorapi.com/scheme?hex=${seedColor}&format=html&mode=${selectedColorScheme}&count=5`)

    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${selectedColorScheme}&count=5`)
        .then(res => res.json())
        .then(data => {
            console.log(data.colors)
            colorsArr = data.colors
            renderColors()
            
        })
})