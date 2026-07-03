let img = document.getElementById("profile-img")

let random = Math.floor(Math.random() * 4) + 1;
console.log(random)

if (random === 1) {
    img.src = "pics/viirx-default-pfp.png"
}

if (random === 2) {
    img.src = "pics/viirx-sad-pfp.png"
}

if (random === 3) {
        img.src = "pics/viirx-greet-pfp.png"
}

if (random === 4) {
        img.src = "pics/viirx-greet2-pfp.png"
}
