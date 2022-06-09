
<template>
	<section
		id="home"
		class="text-white pt-28 sm:min-h-0 h-auto sm:pt-32 text-lg sm:text-xl lg:text-2xl sm:w-10/12 lg:w-8/12"
	>
		<p class="opacity-0 text-xl sm:text-2xl md:text-3xl lg:text-4xl anim_1" ref="anim_1">
			Hello, We are
		</p>
		<transition name="fade">
			<h1
				class="text-3xl font-bold ml-4 my-1 opacity-0 sm:text-4xl md:text-5xl lg:text-6xl transform translate-x-8 anim_2"
				ref="anim_2"
			>
				Infinity Development,
			</h1>
		</transition>

		<p class="mt-12 font-light leading-relaxed opacity-0 anim_3" ref="anim_3">
			A <span class="font-medium">passionate group of developers</span> based all
			around the globe. Working together to provide you with all the
			<span class="font-medium">Discord Bots, Websites</span> and
			<span class="font-medium">Services you know and love.</span>.
		</p>

		<div class="flex justify-center mt-12 opacity-0 anim_4" ref="anim_4">
			<a
				v-for="(social, index) in socialNetwork"
				:key="index"
				:href="social.link"
				target="_blank"
				><img
					:src="social.icon"
					:class="[
						socialNetwork.length - 1 != index ? 'pr-3' : '',
						'h-10 sm:h-10 lg:h-12',
					]"
			/></a>
		</div>

		<div class="chevron w-full mt-10 opacity-0 anim_5" ref="anim_5">
			<img :src="chevronDown" class="m-auto" />
		</div>
	</section>
</template>

<script>
export default {
	name: 'Introduction',
	data() {
		return {
			socialNetwork: [
				{
					icon: require('../assets/twitter.svg'),
					link: 'https://twitter.com/TheInfinityDevs',
				},
				{
					icon: require('../assets/github.svg'),
					link: 'https://github.com/InfinityBotList',
				},
				{
					icon: require('../assets/blogger.svg'),
					link: 'https://blog.botlist.app',
				},
				{
					icon: require('../assets/globe.svg'),
					link: 'https://infinitybots.gg',
				},
			],
			chevronDown: require('../assets/chevron-down.svg'),
		}
	},
	mounted() {
		let timer = setInterval(() => {
			this.$refs.anim_1.classList.add('fade')
			stopTimer()
		}, 80)
		const stopTimer = () => {
			this.$refs.anim_2.classList.add('rightToLeft')
			this.$refs.anim_3.classList.add('rightToLeft')
			this.$refs.anim_4.classList.add('fade')
			this.$refs.anim_5.classList.add('fade')	
			this.$refs.anim_6.classList.add('fade')
			clearInterval(timer)
			timer = null
		}
	},
}
</script>

<style scoped>
.chevron {
	animation-duration: 0.8s;
	animation-name: bounce;
	animation-iteration-count: infinite;
	animation-direction: alternate;
}
.anim_1,
.anim_2,
.anim_3,
.anim_4,
.anim_5,
.anim_6 {
	transition: all 0.5s ease;
}
.anim_1.fade {
	transition-delay: 0.25s;
	opacity: 0.6;
}
.anim_2.rightToLeft {
	opacity: 1;
	transition-delay: 0.5s;
	transform: translateX(0px);
}
.anim_3.rightToLeft {
	opacity: 0.6;
	transition-delay: 1s;
	transform: translateX(0px);
}
.anim_4.fade {
	opacity: 0.6;
	transition-delay: 1.5s;
}
.anim_5.fade, .anim_6.fade {
	opacity: 1;
	transition-delay: 1.75s;
}
@keyframes bounce {
	from {
		transform: translateY(0);
	}
	to {
		transform: translateY(20px);
	}
}
@media (max-width: 320px) {
	.chevron {
		display: none;
	}
	h2 {
		font-size: 20px;
	}
}
</style>