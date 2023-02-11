<script setup lang="ts"></script>

<template>
	<div class="member-index">
		<div class="member-index-header">
			<div class="username">張三</div>
			<div class="header-card">
				<div class="header-card-item">
					<span class="text">积分</span>
					<span>100</span>
				</div>
				<div class="header-card-item">
					<span class="text">消息</span>
					<span>99</span>
				</div>
			</div>
		</div>
		<div class="member-index-card marginTop32">
			<router-link class="member-index-cell" to="/member/info">
				<div>个人信息</div>
				<div>&gt;</div>
			</router-link>
			<div class="member-index-cell">
				<div>xxx</div>
				<div>&gt;</div>
			</div>
			<div class="member-index-cell">
				<div>xxx</div>
				<div>&gt;</div>
			</div>
		</div>

		<div class="member-index-card">
			<div class="member-index-cell">
				<div>xxx</div>
				<div>&gt;</div>
			</div>
			<div class="member-index-cell">
				<div>xxx</div>
				<div>&gt;</div>
			</div>
			<div class="member-index-cell">
				<div>xxx</div>
				<div>&gt;</div>
			</div>
		</div>

		<div class="member-index-card">
			<div class="member-index-cell">
				<div>xxx</div>
				<div>&gt;</div>
			</div>
			<div class="member-index-cell">
				<div>xxx</div>
				<div>&gt;</div>
			</div>
			<div class="member-index-cell">
				<div>xxx</div>
				<div>&gt;</div>
			</div>
		</div>

		<div class="member-index-card">
			<div class="member-index-cell">
				<div>xxx</div>
				<div>&gt;</div>
			</div>
			<div class="member-index-cell">
				<div>xxx</div>
				<div>&gt;</div>
			</div>
			<div class="member-index-cell">
				<div>xxx</div>
				<div>&gt;</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss">
:root {
	--ft-member-index-header-bg: var(--ft-color-primary);
}
html.dark {
	--ft-member-index-header-bg: var(--ft-color-black);
}
</style>
<style scoped lang="scss">
.member-index {
	margin-bottom: 20px;
	.member-index-header {
		position: relative;
		height: 200px;
		background-color: var(--ft-member-index-header-bg);
		.username {
			padding: 40px 0 0 30px;
			font-size: 24px;
			color: var(--ft-color-white-rgb-1);
		}
		.header-card {
			position: absolute;
			right: 12px;
			bottom: -20px;
			left: 12px;
			display: flex;
			background-color: var(--ft-bg-color);
			border-radius: 8px;
			box-shadow: 0 0 10px var(--ft-shadow-color-1);
			.header-card-item {
				display: flex;
				flex: 1;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				height: 70px;
				border-left: 1px solid var(--ft-divider-color);
				&:first-child {
					border: 0;
				}
				.text {
					font-size: 16px;
				}
			}
		}
	}
	.member-index-card {
		margin: 12px 12px 0;
		overflow: hidden;
		border-radius: 8px;
		box-shadow: 0 0 10px var(--ft-shadow-color-1);
		&.marginTop32 {
			margin-top: 32px;
		}
	}
	.member-index-cell {
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
