//import product classes
import { product } from "./models/Product";
import { calculateDiscount } from "./utilities/discountCalculator";
import { calculateTax } from "./utilities/taxCalculator";
import { fetchProducts } from "./services/apiService";
import { handleError } from "./utilities/errorHandler";

async function main() {
    try {
        const productData = await fetchProducts();

        const productList: Product[] = productData.map((data: any) => {
            return new product(
                data.product,
                data.description,
                data.price,
                data.discountPercentage,
                data.category
            ))
        });
        
        products.forEach((product) => {
            product.displayDetails();

            const discount = calculateDiscount(product.price, product.discountPercentage);
            console.log(`Discount Amount: ${discount}`);
            const discountPrice = product.getPriceWithDiscount();
            console.log(`Price after Discount: ${discountPrice}`);
            const tax = calculateTax(discountPrice, product.category);
            console.log(`Tax Amount: ${tax}`);
            const finalPrice = discountPrice + tax;
            console.log(`Final Price: ${finalPrice}`);
        });
    } catch (error) {
        handleError(error);
    }

main();