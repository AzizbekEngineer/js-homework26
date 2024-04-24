const API_URL = 'https://fakestoreapi.com'
let wrapper = document.querySelector('.wrapper')
const loading = document.querySelector('.loading')
const btnSeeMore = document.querySelector('.btn__se-more')

let limitCount = 6
let count = 1


async function fetchData(URL) {
    const data = await fetch(`${URL}/products?limit=${limitCount * count}`)
    console.log(data);
    data
        .json()
        .then(res => createCard(res))
        .catch(err => console.log(err))
        .finally(() => {
            loading.style.display = 'none'
            btnSeeMore.innerHTML = 'See More'
            btnSeeMore.removeAttribute('disabled')
        })
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
                    <p class = "desc"><b>Price:</b>${product.price} $</p>
                    <button data-id = "${product.id}" class = "seeMore">See more</button>
                </div>
            </div>
        `
    });
    wrapper.innerHTML = cards
}
btnSeeMore.addEventListener('click', () => {
    count++
    fetchData(API_URL)
    btnSeeMore.innerHTML = 'Loading....'
    btnSeeMore.setAttribute('disabled', true)
})

wrapper.addEventListener('click', (e) => {
    if (e.target.className = "seeMore") {
        let id = e.target.dataset.id
        window.open(`./pages/product.html?productId=${id}`, '_self')
    }
})


function createLoad(n) {
    let loadingCards = ''
    for (let i = 0; i < n; i++) {
        loadingCards += `
         <div class="loading__item">
            <div class="loading__img bg__animation"></div>
            <div class="loading__title bg__animation"></div>
            <div class="loading__title bg__animation"></div>
        </div>
        `
    };
    loading.innerHTML = loadingCards

}
createLoad(limitCount)
