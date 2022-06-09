<template>
	<section
		id="about"
		class="text-white sm:min-h-0 h-auto pt-28 sm:pt-32 sm:w-10/12 lg:w-8/12 opacity-0 anim_7"
		ref="anim_7"
		v-scroll-reveal.reset
	>
		<h2 class="uppercase text-xl mb-5 sm:text-2xl md:text-3xl lg:text-4xl">
			About us
		</h2>
		<p
			class="font-light text-lg opacity-60 leading-relaxed sm:text-xl lg:text-2xl sm:leading-relaxed md:leading-relaxed lg:leading-relaxed"
		>
			We are a passionate, dedicated and hard-working 
			development team specializing in frameworks such as:
			<span class="font-medium"
				>JavaScript, React.js, Vue.js and Node.js</span
			>. We have created and helped with a variety of projects in
			<span class="font-medium">Discord</span> doing anything from design to
			development, debugging and even event management (Beta Releases).
		</p>

		<ul class="flex flex-wrap mt-8">
			<li
				v-for="(skill, index) in skills"
				:key="index"
				class="text-white mr-3 mt-3 py-1 px-4 md:text-lg lg:text-xl"
			>
				{{ skill }}
			</li>
		</ul>
	</section>
</template>

<script>
export default {
	name: 'About',
	data() {
		return {
			skills: [
				'Javascript',
				'Typescript',
				'Vue.js',
				'React.js',
				'Node.js',
				'Next.js',
				'Express',
				'HTML',
				'CSS',
				'SASS',
				'Bootstrap',
				'jQuery',
				'TailwindCSS',
				'Firebase',
				'Auth0',
				'Next-Auth',
				'Supabase',
				'Clerk',
				'Webpack',
				'MongoDB',
				'RedisDB',
				'Postgres',
				'Python',
				'Figma',
				'CSharp',
				'CPlusPlus',
				'Clang',
				'GoLang',
				'Fastify'
			],
		}
	},
	mounted() {
		setInterval(() => {
			this.$refs.anim_7.classList.add('fade')
		}, 80)
	},
}
</script>

<style scoped>
li {
	background: #15141E;
	border-radius: 8px;
}
.anim_7 {
	transition: all 0.5s ease;
}
.anim_7.fade {
	opacity: 1;
	transition-delay: 2s;
}
</style>
