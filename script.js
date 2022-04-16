let colorsArr = []
let colorSchemeHtml = ""
let colorSchemeHexCode = ""
const colorPickerForm = document.getElementById("color-picker-form")

function copyToClipboard(copyText) {
    navigator.clipboard.writeText(copyText);
    alert("Copied the color: " + copyText);
}

function renderColors() {
    colorsArr.map((color)=>{
        colorSchemeHtml += `
        <div id="color-bar" class="color-bar" style="background-color:${color.hex.value}" 
        aria-label="${color.name.value} HexCode is ${color.name.closest_named_hex}"
        onclick="copyToClipboard('${color.hex.value}')">
        </div>
        `
        colorSchemeHexCode += `
        <div id="color-hex" class="color-hex one" onclick="copyToClipboard('${color.hex.value}')"><p>${color.hex.value}</p></div>`
    })
    document.getElementById("color-bars-container").innerHTML = colorSchemeHtml
    document.getElementById("color-hex-container").innerHTML = colorSchemeHexCode
    colorSchemeHtml = ""
    colorSchemeHexCode = ""
}

colorPickerForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const seedColor = document.getElementById("seed-color-picker").value.replace("#", "")
    const selectedColorScheme = document.getElementById("select-color-scheme").value
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${selectedColorScheme}&count=5`)
        .then(res => res.json())
        .then(data => {
            colorsArr = data.colors
            renderColors()
        })
})