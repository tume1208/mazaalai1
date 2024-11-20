let label = document.getElementById("cartTab");
let ShoppingCart = document.getElementById("shopping-cart");

let generateCartItems = () => {
    if (basket.length !== 0) {
        return (ShoppingCart.innerHTML = basket
            .map((x) => {
                let { id, item } = x;
                let product = shopItemsData[id - 1]; // Assuming id starts from 1 and is sequential
                return `
                <div class="cart-item">
                    <table width="100%">
               <thead>
                <tr>
                </tr>
             </thead>
             <tbody>
                <td><i onclick="removeItem(${id})" id="bar" class="fa-solid fa-trash"></i></td>
                <td> <div class="image1"><img width="100%" src=${product.img} alt="" /></div></td>
                <td><p1>${product.name}</p1></td>
                <td>   <p1>${product.price}₮</p1></td>
                <td><button class="normal1">
                            <i onclick="increment(${id})" class="fa-solid fa-plus"></i>
                            <div id=${id} class="quantity">${item}</div>
                            <div>ширхэг</div>
                            <i onclick="decrement(${id})" class="fa-solid fa-minus"></i>
                        </button>
                        <div class="trash"><i onclick="removeItem(${id})" id="bar" class="fa-solid fa-trash"></i> </div></td>
                <td><h3> ${item * product.price}₮</h3></td>
            </tbody> 
            </table>
                `;
            })
            .join(""));
    } else {
        ShoppingCart.innerHTML = ``;
        label.innerHTML = `<h1>Сагс хоосон байна</h1>
        <a href="shop.html">
            <button class="normal">back to</button>
        </a>`;
    }
};
generateCartItems();

let increment = (id) => {
    let search = basket.find((x) => x.id === id);

    if (search === undefined) {
        basket.push({
            id: id,
            item: 1,
        });
    } else {
        search.item += 1;
    }
    generateCartItems();
    update(id);
    localStorage.setItem("data", JSON.stringify(basket));
};

let decrement = (id) => {
    let search = basket.find((x) => x.id === id);

    if (search === undefined || search.item === 0) return;
    else {
        search.item -= 1;
    }
    update(id);
    basket = basket.filter((x) => x.item !== 0);
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item;
};

let removeItem = (id) => {
    basket = basket.filter((x) => x.id !== id);
    generateCartItems();
    updateLocalStorage();
};
let updateLocalStorage = () => { 
    localStorage.setItem("data", JSON.stringify(basket)); 
};
generateCartItems();

