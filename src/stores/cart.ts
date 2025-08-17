import { defineStore } from 'pinia'

export interface CartItem {
    id: string
    title: string
    price: number
    quantity: number
}

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [] as CartItem[],
    }),
    actions: {
        addItem(item: Omit<CartItem, 'quantity'>) {
            const existing = this.items.find(i => i.id === item.id)
            if (existing) {
                existing.quantity += 1
            } else {
                this.items.push({ ...item, quantity: 1 })
            }
        },
        removeItem(itemId: string) {
            const index = this.items.findIndex(i => i.id === itemId)
            if (index !== -1) {
                this.items.splice(index, 1)
            }
        },
        updateQuantity(itemId: string, quantity: number) {
            const item = this.items.find(i => i.id === itemId)
            if (item && quantity > 0) {
                item.quantity = quantity
            } else if (item && quantity <= 0) {
                this.removeItem(itemId)
            }
        },
        clearCart() {
            this.items = []
        }
    },
    getters: {
        totalItems: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: (state) => state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    }
})