const container = document.querySelector(".container")
const coffees = [
  { name: "Perspiciatis", image: "images/coffee1.jpeg" },
  { name: "Voluptatem", image: "images/coffee2.jpeg" },
  { name: "Explicabo", image: "images/coffee3.jpeg" },
  { name: "Rchitecto", image: "images/coffee4.jpeg" },
  { name: " Beatae", image: "images/coffee5.jpeg" },
  { name: " Vitae", image: "images/coffee6.jpeg" },
  { name: "Inventore", image: "images/coffee7.jpeg" },
  { name: "Veritatis", image: "images/coffee8.jpeg" },
]


const showCoffees = () => {
    let output = ""
    coffees.forEach(
        ({name, iamge }) =>
        (output += '
             <div class="card">
             <img class= "card--avatar src=${image}" />
             <h1 class="card--title">${name}</h1>
             <a class="card--link" href="#">Taste</a>)
             </div>
     ')
    )

    container.innerHTML = output
}


document.addEventListener("DOMContentLoaded", showCoffees)


if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
           .register("/serviceWorker.js")
           .then(res => this.console.log("Service worker registered"))
           .catch(err => this.console.log("service worker not registered", err))
    })
}
