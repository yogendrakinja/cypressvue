<template>
    <div v-if="loading" data-cy="loading" class="text-center">Loading products...</div>
    <div v-if="error" class="text-red-500 text-center">{{ error }}</div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" v-if="!loading && products.length">
        <ProductItem class="product-item" v-for="product in products" :key="product.id" :product="product" />
    </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { useProductStore } from '@/stores/product'; 
import ProductItem from './Item.vue';
import { storeToRefs } from 'pinia';
const productStore = useProductStore();
const {products, loading, error} = storeToRefs(productStore);

onMounted(() => {
    productStore.fetchProducts();
});
</script>