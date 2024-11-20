document.addEventListener('DOMContentLoaded', (event) => {
    let shop = document.getElementById("product1");    
let generateShop = () => {
    return (shop.innerHTML = shopItemsData
        .map((x) => {
            let { id, name, price, img, link } = x;
            console.log(basket);
            let search = basket ? basket.find((x) => x.id === id) : [];
            return `
            <div id=product-id-${id} class="pro-container">
                <div class="tab__item">
                    <div class="pro" onclick="window.location.href='${link}?id=${id}'">
                        <img src=${img} alt="">
                        <div class="des">
                            <span>Cosrx</span>
                            <h5>${name}</h5>
                            <div class="star">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <h4>${price}₮</h4>
                        </div>
                        <a href="#"><i class="fa-solid fa-bag-shopping"></i></a>
                    </div>
                </div>
            </div>
            `;
        })
        .join(""));
};

generateShop();
});