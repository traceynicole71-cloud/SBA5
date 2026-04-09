"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchProducts = fetchProducts;
//API requests
const errorHandler_1 = require("./errorHandler");
const base_url = "https://dummyjson.com/products";
async function fetchProducts() {
    try {
        const response = await fetch(base_url);
        if (!response.ok) {
            throw new errorHandler_1.AppError("failed to fetch product", response.status);
        }
    }
    finally {
    }
    const data = await response.json();
    return data.products;
}
try { }
catch (error) {
    if (error instanceof errorHandler_1.AppError) {
        throw error;
    }
    throw new errorHandler_1.AppError("Error while fetching product");
}
//# sourceMappingURL=apiService.js.map