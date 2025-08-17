<template>
	<div
		class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
	>
		<a href="#">
			<img class="rounded-t-lg" :src="props.product.image" :alt="props.product.title" />
		</a>
		<div class="p-5">
			<a href="#">
				<h5
					class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
				>
					{{ props.product.title }}
				</h5>
			</a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Price: ${{ props.product.price }}
                </p>
			<!-- <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> -->
			<button type="button" @click="cartStore.addItem(props.product)" class="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
				Add to Cart
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { useCartStore } from "@/stores/cart";
import type { Product } from "@/types/product";
const cartStore = useCartStore();

const props = defineProps<{product: Product}>();
</script>
