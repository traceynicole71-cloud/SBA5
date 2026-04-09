//API requests
import { AppError } from "./errorHandler";

const base_url = "https://dummyjson.com/products";

export async function fetchProducts(): Promise<ProductData[]> {
    try {
        const response = await fetch(base_url);
        if (!response.ok) {
            throw new AppError("failed to fetch product", response.status);
        }
    }

    const data = await response.json();
    return data.products;
} catch (error) {
    if (error instanceof AppError) {
        throw error;
    }
    throw new AppError("Error while fetching product");
}
