console.log(products);

function generateStars(rating) {
	const fullStar = `<i class="bi bi-star-fill"></i>`,
		halfStar = `<i class="bi bi-star-half"></i>`,
		emptyStar = '<i class="bi bi-star"></i>';

	let dynamicHTML = "";

	const countOfFullStars = Math.floor(rating), //pilnu zv kiekis
		halfStarShouldExist = rating - countOfFullStars >= 0.5, //true arba false
		emptyStarCount = halfStarShouldExist
			? 4 - countOfFullStars
			: 5 - countOfFullStars;
	for (let i = 0; i < countOfFullStars; i++) dynamicHTML += fullStar;
	if (halfStarShouldExist) dynamicHTML += halfStar;
	for (let i = 0; i < emptyStarCount; i++) dynamicHTML += emptyStar;
	return dynamicHTML;
}

function showProducts() {
	let dynamicHTML = "";
	for (const product of products) {
		dynamicHTML += `	<hr />
        <div class="product">
            <div class="product-image">
                <span class="discount">-${Math.round(
									product.discountPercentage
								)}%</span>
                <img
                    src="${product.thumbnail}"
                    alt="product image"
                    class="product-img"
                />
            </div>
            <div class="product-details">
                <h3 class="product-title">${product.title}</h3>
                <span class="stars"
                    >${generateStars(4.49)}</span>
                <p class="product-description">
                  ${product.description}
                </p>
            </div>
            <div class="product-price">
                <div class="price">
                    $${(
											product.price *
											((100 - product.discountPercentage) / 100)
										).toFixed(
											2
										)} <sup class="older-price">$${product.price.toFixed(
			2
		)}</sup>
                </div>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        </div>`;
	}
	document.querySelector(".container").innerHTML = dynamicHTML;
}
showProducts();
