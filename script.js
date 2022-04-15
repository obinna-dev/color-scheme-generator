// const seedColor = document.getElementById("seed-color-picker").value
// console.log("seedColor")


// fetch("https://www.thecolorapi.com/scheme")
//     .then(res => res.json())
//     .then(data => console.log(data))

let seedColor = ""
let selectedColorScheme = ""
let colorsArr = []


const colorPickerForm = document.getElementById("color-picker-form").addEventListener("submit", (e) => {
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

            for (let color of colorsArr) {
                colorSchemeHtml += `
                
                `
                console.log(`The color is ${color.hex.value} and you can view the image here ${color.image.bare}`)

            }
        })
    
})




// {"colors": [
//     {
//      "hex": {"value": "#000000"}, "image": {"bare": "url"}
//     },
//     {
//      "hex": {"value": "#fff"}, "image": {"bare": "url"}
//     }
//   ]
//  }
// loop through colors array and log out the hex and image key value pairs in the object for each loop
// image has to be logged out in html backticks string and pushed to DOM