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
import metroreviews from '@/assets/metro.png'
import linkcord from '@/assets/linkcord.png'
import tweeter from '@/assets/tweeter.png'
import dscjobs from '@/assets/dscjobs.png'
import devhub from '@/assets/devhub.png'
import modhub from '@/assets/modhub.png'
import toxmod from '@/assets/toxmod.png'

export default {
	name: 'Projects',
	data() {
		return {
			projects: [
				{
					img: infinitybots,
					title: 'Infinity Bot List',
					resume: 'Search our vast list of bots for an exciting start to your Discord Server.',
					url: 'https://infinitybots.gg',
					source: 'https://github.com/InfinityBotList',
				},
				{
					img: metroreviews,
					title: 'Metro Reviews',
					resume: 'The Dedicated Community of Discord Bot Lists made by Discord Bot Lists.',
					url: 'https://metrobots.xyz',
					source: 'https://github.com/MetroReviews/Website',
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
					img: dscjobs,
					title: 'DscJobs',
					resume: 'Find the best Moderators & Developers for your servers!',
					url: 'https://dscjobs.org',
					source: 'https://github.com/DscJobs',
				},
				{
					img: devhub,
					title: 'Dev Hub',
					resume: 'The information sharing community made for developers and programmers alike.',
					url: 'https://devhub.life',
					source: 'https://discord.com/invite/6pRxaNeRX8',
				},
				{
					img: modhub,
					title: 'Mod Hub',
					resume: 'Find the best Moderators & Developers for your servers!',
					url: 'https://modhub.gg',
					source: 'https://github.com/ModHub-gg',
				},
				{
					img: tweeter,
					title: 'Tweeter',
					resume: 'The Number one Open-Source Discord Bot for Twitter Notification Streaming and Monitors.',
					url: 'https://tweeterbot.xyz/',
					source: 'https://github.com/TheRealToxicDev/Tweeter',
				},
				{
					img: toxmod,
					title: 'Tox Mod',
					resume: 'The Open-Source Discord Bot with a little bit of Attitude.',
					url: 'https://toxmod.xyz/',
					source: 'https://github.com/Tox-Mod/ToxModBot',
				},
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