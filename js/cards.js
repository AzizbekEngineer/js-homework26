const API_URL = 'https://fakestoreapi.com'
let wrapper = document.querySelector('.wrapper')
let limitCount = 4
let count = 1


async function fetchData(URL) {
    const data = await fetch(`${URL}/products`)
    console.log(data);
    data
        .json()
        .then(res => createCard(res))
        .catch(err => console.log(err))
}
fetchData(API_URL)

function createCard(data) {
    let cards = ''
    console.log(data);
    data.forEach(product => {
        cards += `
            <div class="card">
                <div class="card__img">
                    <img src="${product.image}" alt="">
                </div>
                <div class="card__info">
                    <h3 class = "desc">${product.title}</h3>
                    <p class = "desc">${product.category}</p>
                    <button data-id = "${product.id}" class = "seeMore">See more</button>
                </div>
            </div>
        `
    });
    wrapper.innerHTML = cards
}
wrapper.addEventListener('click', (e) => {
    if (e.target.className = "seeMore") {
        let id = e.target.dataset.id
        window.open(`./pages/product.html?productId=${id}`, '_self')
    }
})
