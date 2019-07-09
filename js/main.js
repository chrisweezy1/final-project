const nav = document.getElementById("navId");
const button = document.getElementById("toggleMenu");
button.addEventListener("click", function () {
    console.log("the code");
    nav.classList.toggle("open");
});



/*const product_1 = document.getElementById("product_1");
const product_2 = document.getElementById("product_2");
const product_3 = document.getElementById("product_3");
const product_4 = document.getElementById("product_4");
fetch("http://www.splashbase.co/api/v1/images/search?query=laptop")
    .then(resp => resp.json()
    ).then(data => {
        let pictures = data.images
        let image_ul = data.images[1].url
        product_1.src = pictures[1].url
        product_2.src = pictures[2].url
        product_3.src = pictures[3].url
        product_4.src = pictures[4].url

    })*/

let products = []
for (i = 1; i <= 4; i++) {
    products[i] = document.getElementById("product_" + i);
}
fetch("http://www.splashbase.co/api/v1/images/search?query=laptop")
    .then(resp => resp.json()
    ).then(data => {
        let pictures = data.images
        let image_ul = data.images[1].url
        for (i = 1; i <= 4; i++) {
            products[i].src = pictures[i].url
        }

    })

