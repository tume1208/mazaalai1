// Function to get query parameter by name
function getQueryParam(param) {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

let shop = document.getElementById("prodetails");


let generateShop = () => {
    let productId = getQueryParam('id'); // Get the product ID from the URL
    let selectedItem = shopItemsData.find((x) => x.id == productId); // Find the selected item
    if (!selectedItem) {
        console.error('Product not found');
        return;
    }
    let { id, name, price, img, desc, images } = selectedItem;
    let search = basket ? basket.find((x) => x.id ==id) || [] : [];
    shop.innerHTML = `
        <div id=product-id-${id} class="single-pro-image">
            <img src=${img} width="100%" id="Mainimg" alt="">
            <div class="small-img-group">
               <div class="small-img-group">
                ${images.map(image => 
                    ` <div class="small-img-col"> 
                        <img src=${image} width="100%" class="small-img" alt="">
                     </div> 
                  `).join('')} 
                </div>
            </div>
        </div>
        <div class="single-pro-details">
            <h6>Home / Toner</h6>
            <h4>${name}</h4>
            <h1>₮ ${price}</h1>
            <select>
                <option> Toner</option>
                <option> Gel Cleanser </option>
                <option> Eye Cream </option>
                <option> Sheet Mask </option>
                <option> Intensive Cream </option>
            </select>
            <button class="normal">
                <i onclick="increment(${id})" class="fa-solid fa-plus"></i>
                <div id=${id} class="quantity">
                    ${search.item === undefined ? 0 : search.item}
                </div>
                <div>Сагсанд хийх</div>
                <i onclick="decrement(${id})" class="fa-solid fa-minus"></i>
            </button>
            <h4>Бүтээгдэхүүний мэдээлэл</h4>
            <span>
               ${desc}
                😊
            </span>
        </div>
    `;
    // Add event listeners to small images 
    var Mainimg = document.getElementById("Mainimg"); 
    var smallimg = document.getElementsByClassName("small-img"); 
    for (var i = 0; i < smallimg.length; i++) 
        { smallimg[i].onclick = function() 
            { Mainimg.src = this.src; 

            }
        } 
};

generateShop();
if (!basket) { basket = []; }
let increment = (id) => {
    let search = basket.find((x) => x.id===id);

    if (search === undefined) {
        basket.push({
            id: id,
            item: 1,
        });
    } else {
        search.item += 1;
    }
    update(id);
    localStorage.setItem("data", JSON.stringify(basket));
};

let decrement = (id) => {
    let search = basket.find((x) => x.id===id);

    if (search === undefined || search.item === 0) return;
    else {
        search.item -= 1;
    }
    update(id);
    basket = basket.filter((x) => x.item !== 0);
    localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
    let search = basket.find((x) => x.id===id);
    document.getElementById(id).innerHTML = search.item;
};


