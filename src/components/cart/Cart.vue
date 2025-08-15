<template>
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Quantity
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <template  v-if="cartStore.items.length > 0">
            <CartItem v-for="item in cartStore.items" :key="item.id" :item="item" />
            </template>
            <tr v-else>
                <td colspan="3" class="text-center">No Products in a cart</td>
            </tr>
        </tbody>
    </table>
</div>
</template>
<script setup lang="ts">
import { useCartStore } from '@/stores/cart';
import CartItem from './CartItem.vue';
const cartStore = useCartStore();
</script>