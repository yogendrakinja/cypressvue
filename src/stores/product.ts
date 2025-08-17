import { defineStore } from 'pinia'
import axios from 'axios'
import type { Product } from '@/types/product'

export const useProductStore = defineStore('product', {
    state: () => ({
        products: [] as Array<Product>,
        loading: false as boolean,
        error: null as string | null,
    }),
    actions: {
        async fetchProducts() {
            this.loading = true
            this.error = null
            try {
                const response = await axios.get('https://fakestoreapi.com/products')
                this.products = response.data
            } catch (err: any) {
                this.error = err.message || 'Failed to fetch products'
            } finally {
                this.loading = false
            }
        },
    },
})