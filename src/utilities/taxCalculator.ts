//create calculate tax
export function calculateTax(price: number, category: string): number {
    const defaultTaxRate = 0.0475; // Default tax rate for all products
    const groceryTaxRate = 0.03; // Tax rate for grocery category

    const taxRate = category.toLowerCase() === "groceries"
    ? groceryTaxRate
    : defaultTaxRate;

    return price * taxRate;
}
