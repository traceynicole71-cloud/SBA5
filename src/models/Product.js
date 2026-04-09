"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    title;
    description;
    price;
    discountPercentage;
    category;
    constructor(data) {
        this.title = data.product;
        this.description = data.description;
        this.price = data.price;
        this.discountPercentage = data.discountPercentage;
        this.category = data.category;
    }
    //display details
    displayDetails() {
        return `
        Product: ${this.title}
        Description: ${this.description}
        Price: ${this.price}
        Discount: ${this.discountPercentage}
        Category: ${this.category}
        `;
    }
    //get price with discount
    getPriceWithDiscount() {
        const discountAmount = (this.price * this.discountPercentage) / 100;
        return this.price - discountAmount;
    }
}
exports.Product = Product;
//# sourceMappingURL=Product.js.map