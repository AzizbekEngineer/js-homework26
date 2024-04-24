const API_URL = 'https://fakestoreapi.com'
let items = document.querySelector('.items')
console.log(api);


async function fetchData(URL) {
    let param = new URLSearchParams(window.location.search)
    let id = param.get('productId')
    console.log('ok');

    const data = await fetch(`${URL}/products/${id}`)
    console.log(data);
    data
        .json()
        .then(res => createContent(res))
        .catch(err => console.log(err))
}
fetchData(API_URL)

function createContent(data) {
    items.innerHTML = `
                <div class="item">
                    <div class="item__img">
                        <img src="${data.img}"
                        alt="">
                        <br>
                    </div>
                    <div class="item__infos">
                        <h3>${data.name}</h3>
                        <p>${data.info}</p>
                        <p>${data.createdAt.split("T")[0]}</p>
                        <p>${data.updatedAt.split('T')[0]}</p>
                        <p>${data.category}</p>
                        <p>${data.size}</p>
                        <p>${data.price}</p>
                    </div>
                </div>
    `
}
// {
//     "createdAt": "2024-04-24T05:07:25.248Z",
//         "updatedAt": "2024-04-24T02:20:00.347Z",
//             "name": "sweet grains",
//                 "img": "https://cdn.pixabay.com/photo/2012/06/27/15/02/candy-50838_640.jpg",
//                     "unit": "kg",
//                         "info": "delicious and colorful sweet grains",
//                             "size": 10,
//                                 "category": "sweetness",
//                                     "price": "30000 so'm",
//                                         "id": "17"
// }