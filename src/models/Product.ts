this.description = data.description;
this.price = data.price;
this.discountPercentage = data.discountPercentage;
this.category = data.category;

//display details
displayDetails(): string {
    return `
    Product: ${this.title}
    Description: ${this.description}
    Price: ${this.price}
    Discount: ${this.discpountPercentage}
    Category: ${this.category}
    `;
}

//get price with discount
getPriceWithDiscount(): number {
const discountAmount = (this.price * this.discountPercentage) / 100;
return this.price - discountAmount;
}
