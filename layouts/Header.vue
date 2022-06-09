<template>
	<nav
		class="w-10/12 h-10 flex justify-between items-center fixed top-0 py-8 z-50 max-w-screen-xl sm:max-w-screen-xl sm:w-10/12 sm:flex-col sm:h-auto sm:items-end sm:text-right sm:p-0 sm:bg-transparent"
	>
		<span class="w-3/12 mr-3 sm:mr-0 sm:h-11" />
		<ul class="flex flex-1 justify-between sm:flex-col sm:mt-2">
			<li
				v-for="(section, index) in menu"
				:key="index"
				class="text-white uppercase font-normal text-lg sm:text-xl sm:mt-2 md:text-2xl"
			>
				<a
					:href="section.href"
					:target="section.target ? '_blank' : ''"
					:class="{ resume: section.target }"
					>{{ section.title }}</a
				>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: 'Header',
	data() {
		return {
			menu: [
				{ title: 'Home', href: '#home' },
				{ title: 'About', href: '#about' },
				{ title: 'Projects', href: '#projects' },
				{ title: 'Discord', href: 'https://infinitybots.gg/discord', target: true },
				{ title: 'Twitter', href: 'https://twitter.com/TheInfinityDevs', target: true },
			],
		}
	},
}
</script>

<style scoped>
nav {
	background: #15141E;
}
span {
	height: 1px;
	background: rgba(255, 255, 255, 0.15);
}
@media screen and (max-width: 640px) {
	.resume {
		display: none;
	}
}
@media screen and (min-width: 640px) {
	nav {
		background: transparent;
	}
	span {
		height: 4.25rem;
		width: 1px;
	}
}
@media screen and (max-width: 320px) {
	span {
		display: none;
	}
}
</style>