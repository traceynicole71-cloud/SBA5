//API requests
import { AppError } from "./utilities/errorHandler";

const base_url = "https://dummyjson.com/products";

export async function fetchProducts(): Promise<ProductData[]> {
    try {
        const response = await fetch(base_url);
        if (!response.ok) {
            throw new AppError("failed to fetch product", response.status);
        }
    }
}