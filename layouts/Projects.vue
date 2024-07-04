<template>
	<section
		id="projects"
		class="text-white sm:min-h-0 h-auto pt-28 sm:pt-32 sm:w-10/12"
		v-scroll-reveal.reset
	>
		<h2 class="uppercase text-xl mb-6 sm:text-2xl md:text-3xl lg:text-4xl">
			Our Projects
		</h2>
		<div class="grid sm:grid-cols-1 lg:grid-cols-3 gap-5">
			<div
				v-for="(project, index) in projects"
				:key="index"
				class="project-img relative overflow-hidden max-w-xl sm:w-96 sm:h-52 md:w-10/12 md:max-w-md lg:h-52 lg:max-w-xl lg:w-full"
			>
				<img :src="project.img" class="object-cover h-full w-full" />
				<div
					class="project-info absolute top-0 w-full h-full text-sm px-6 flex flex-col justify-center flex flex-col sm:text-base md:px-10"
				>
					<p class="text-lg sm:text-xl">
						{{ project.title }}
					</p>
					<p class="italic">{{ project.resume }}</p>
					<div class="flex justify-between mt-8">
						<button
							class="border p-1 rounded w-16 hover:bg-white hover:text-black sm:w-20"
						>
							<a :href="project.url" target="_blank">View</a>
						</button>
						<button class="hover:underline">
							<a :href="project.source" target="_blank">Source</a>
						</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import infinitybots from '@/assets/infinitybots.png'
import diswidgets from '@/assets/diswidgets.png'
import cordx from '@/assets/cordx.png'
import linkcord from '@/assets/linkcord.png'
import nexium from '@/assets/nexium.png'

export default {
	name: 'Projects',
	data() {
		return {
			projects: [
				{
					img: infinitybots,
					title: 'Infinity List',
					resume: 'Begin your Discord journey with our extensive directory.',
					url: 'https://infinitybots.gg',
					source: 'https://github.com/InfinityBotList',
				},
				{
					img: cordx,
					title: 'CordX',
					resume: 'Discover seamless media sharing and storage.',
					url: 'https://cordx.lol',
					source: 'https://github.com/CordXApp',
				},
				{
					img: diswidgets,
					title: 'DisWidgets',
					resume: 'Looking for new ways to Showcase your Discord Server? We offer a Free, Stylish and Simple Solution',
					url: 'https://beta.diswidgets.org',
					source: 'https://beta.diswidgets.org/discord',
				},
				{
					img: linkcord,
					title: 'Link Cord',
					resume: 'Create your custom Profile Page add your Social Media Links and share it for the world to see.',
					url: 'https://linkcord.bio',
					source: 'https://github.com/LinkCordApp',
				},
				{
					img: nexium,
					title: 'Nexium',
					resume: 'Nexium is here to revolutionize the way you find and connect with top-notch talent in the Discord community.',
					url: 'https://nexisite.xyz',
					source: 'https://github.com/NexiumOSS',
				}
			],
		}
	},
}
</script>

<style scoped>
.project-info {
	background: #16151E;
	border: 4px solid #7289DA;
	transform: translateY(-100%);
	transition: transform 0.4s ease-in-out;
}
.project-img:hover .project-info {
	transform: translateY(0);
}
/* img {
	filter: gray;
	-webkit-filter: grayscale(1);
	filter: grayscale(1);
} */
</style>