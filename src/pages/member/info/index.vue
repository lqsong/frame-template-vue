<script setup lang="ts"></script>

<template>
	<div class="member-info">
		<div class="member-info-header">个人信息</div>

		<div class="member-info-card">
			<div class="member-info-cell">
				<div>姓名</div>
				<div>张三</div>
			</div>
			<div class="member-info-cell">
				<div>性别</div>
				<div>男</div>
			</div>
			<div class="member-info-cell">
				<div>生日</div>
				<div>xxx</div>
			</div>
			<div class="member-info-cell">
				<div>地区</div>
				<div>xxx xx xx</div>
			</div>
		</div>

		<div class="member-info-card">
			<div class="member-info-cell">
				<div>账号</div>
				<div>zhangsan</div>
			</div>
			<div class="member-info-cell">
				<div>邮箱</div>
				<div>xxxxx@xx.xx</div>
			</div>
			<div class="member-info-cell">
				<div>手机</div>
				<div>xxxxxxxxxxx</div>
			</div>
		</div>

		<div class="member-info-card">
			<div class="member-info-cell">
				<div>登录密码</div>
				<div>xxxxxx</div>
			</div>
			<div class="member-info-cell">
				<div>锁定密码</div>
				<div>xxxxx</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.member-info {
	.member-info-header {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 40px;
		background-color: var(--ft-bg-color);
		border-bottom: 1px solid var(--ft-divider-color);
	}
	.member-info-card {
		margin: 12px 0 0;
		overflow: hidden;
		box-shadow: 0 0 10px var(--ft-shadow-color-1);
	}
	.member-info-cell {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 40px;
		margin: 0 10px;
		border-bottom: 1px solid var(--ft-divider-color);
		&:last-child {
			border: 0;
		}
	}
}
</style>
