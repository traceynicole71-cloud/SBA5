"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTax = calculateTax;
//create calculate tax
function calculateTax(price, category) {
    const defaultTaxRate = 0.0475; // Default tax rate for all products
    const groceryTaxRate = 0.03; // Tax rate for grocery category
    const taxRate = category.toLowerCase() === "groceries"
        ? groceryTaxRate
        : defaultTaxRate;
    return price * taxRate;
}
//# sourceMappingURL=taxCalculator.js.map