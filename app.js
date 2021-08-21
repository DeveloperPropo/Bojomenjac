const colors = ["#ce6a6b", "#ebaca2", "#bed3c3", "#4a919e", "#212e53", "#ec4f43", "#540020", "#97cded", "#02a0da", "#00a7c7", "#feab6b", "#426c79", "#80a71a", "#dee8ec", "#80cfd3", "#ffc16e", "#d02a2a", "#eae100", "#fd7c84", "#025b0e", "#68ef00", "#ffb9cb", "#673149", "#a55248", "#5e6668", "#f6fafb"];
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