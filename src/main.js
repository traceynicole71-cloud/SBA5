"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import product classes
const Product_1 = require("./models/Product");
const discountCalculator_1 = require("./utilities/discountCalculator");
const taxCalculator_1 = require("./utilities/taxCalculator");
const apiService_1 = require("./services/apiService");
const errorHandler_1 = require("./utilities/errorHandler");
async function main() {
    try {
        const productData = await (0, apiService_1.fetchProducts)();
        const productList = productData.map((data) => {
            return new Product_1.products(data.product, data.description, data.price, data.discountPercentage, data.category);
        });
    }
    finally { }
    ;
    Product_1.products.forEach((product) => {
        product.displayDetails();
        const discount = (0, discountCalculator_1.calculateDiscount)(product.price, product.discountPercentage);
        console.log(`Discount Amount: ${discount}`);
        const discountPrice = product.getPriceWithDiscount();
        console.log(`Price after Discount: ${discountPrice}`);
        const tax = (0, taxCalculator_1.calculateTax)(discountPrice, product.category);
        console.log(`Tax Amount: ${tax}`);
        const finalPrice = discountPrice + tax;
        console.log(`Final Price: ${finalPrice}`);
    });
}
try { }
catch (error) {
    (0, errorHandler_1.handleError)(error);
}
main();
//# sourceMappingURL=main.js.map