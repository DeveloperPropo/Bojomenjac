const colors = ["#ce6a6b", "#ebaca2", "#bed3c3", "#4a919e", "#212e53", "#ec4f43", "#540020", "#97cded", "#02a0da", "#00a7c7", "#feab6b", "#426c79", "#80a71a", "#dee8ec", "#80cfd3", "#ffc16e", "#d02a2a", "#eae100", "#fd7c84", "#025b0e", "#68ef00", "#ffb9cb", "#673149", "#a55248", "#5e6668", "#f6fafb", "#7de1f0", "#77a8ae", "#d6d6d7", "#d6d6d7", "#1a6872", "#55544b", "#2c546e", "#906b66", "#5298bd", "#e6d3c5", "#c1dced", "#3cacd4", "#1c4978", "#4c94ce", "#f0c4cc", "#6b96d2", "#bc6b7c", "#c29d6a", "#3474b4", "#6874d0", "#262a43", "#dd7b58", "#3a4443", "#f5f0ec", "#e9d5df", "#74abd9", "#7cc4fc", "#8cb2d4", "#92bccc", "#806952", "#32403f", "#a4bbc2", "#405475", "#4b6c87", "#a9cdbb", "#208887", "#66b7a5", "#e4f0eb", "#9d8b78", "#c9ece7", "#6a5620", "#8b7f40", "#63c1df", "#02549d", "#b780b5", "#ee9f33", "#b69b75", "#1eb3b3", "#8c5585", "#bc6c3d", "#c581be"];
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener('click', function () {
    const randomNumber = getRandomNumber()
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}
