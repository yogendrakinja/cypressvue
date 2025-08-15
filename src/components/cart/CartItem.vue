<template>
	<tr class="bg-white dark:bg-gray-800">
		<th
			scope="row"
			class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
		>
			{{ props.item.title }}
		</th>
		<td class="px-6 py-4">
			{{ props.item.quantity }}
		</td>
		<td class="px-6 py-4">
			{{ props.item.price * props.item.quantity }}
		</td>
	</tr>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{
	item: {
		id: number;
		title: string;
		quantity: number;
		price: number;
	};
}>();
</script>
