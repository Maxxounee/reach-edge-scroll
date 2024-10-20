<template>
	<div
		class="index"
		@scroll="checkScrollEdge"
		@wheel="scrollEdge.isScrolledOnce || checkScrollEdge()"
	>
		<div v-for="i in 10" class="block"></div>
		<div
			class="util"
			v-html="String(scrollEdge.reachedEdge)">

		</div>
	</div>
</template>

<script>

import WheelIndicator from '@/assets/wheelIndicator';

export default {
	data() {
		return {
			scrollEdge: {
				isScrolledOnce: false,
				wheelIndicator: null,
				reachedEdge: null,
				throttled: false,
			}
		};
	},
	mounted() {
		this.scrollEdge.wheelIndicator = new WheelIndicator({
			elem: this.$el,
			callback: this.fireScrollEdge,
		});
	},
	beforeDestroy() {
		this.scrollEdge.wheelIndicator.destroy();
	},
	methods: {
		checkScrollEdge() {
			const scroll = this.$el.scrollTop;
			const height = this.$el.scrollHeight - innerHeight;

			if (scroll < 69) {
				this.scrollEdge.reachedEdge = -1;
			} else if (scroll > height - 69) {
				this.scrollEdge.reachedEdge = 1;
			} else {
				this.scrollEdge.reachedEdge = null;
			}
		},
		fireScrollEdge({direction}) {
			if (direction && direction === this.scrollEdge.reachedEdge && !this.scrollEdge.throttled) {
				setTimeout(() => (this.scrollEdge.throttled = false), 200);

				console.log('EDGE', this.scrollEdge.reachedEdge);
			}
		},
	},
};
</script>
<style lang="scss">
.index {
	height: 100vh;
	overflow: scroll;

	.block {
		height: 50vh;
		background: rebeccapurple;
		border: 10px solid orangered;
	}

	.util {
		z-index: 123;
		display: flex;
		place-content: center;
		position: fixed;
		top: 50%;
		left: 50%;
		background: rgb(0 0 0 / 20%);
		color: white;
		pointer-events: none;
		font-size: 40px;
		width: 100px;
		border-radius: 20px;

	}
}
</style>
