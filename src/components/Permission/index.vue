<script setup lang="ts">
import { computed } from "vue";
import { useUserStore } from "@/store/user";
import { hasPermissionRoles } from "@/utils/router";

interface PermissionProps {
	roles?: string | string[];
}
const props = withDefaults(defineProps<PermissionProps>(), {});

const userStore = useUserStore();

// 是否有权限
const isPermission = computed(() => hasPermissionRoles(userStore.roles, props.roles));
</script>
<template>
	<slot v-if="isPermission"></slot>
	<slot v-else name="nodata">
		<div class="ft-permission-no-data">无权限</div>
	</slot>
</template>
<style lang="scss" scoped>
.ft-permission-no-data {
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100px;
}
</style>
