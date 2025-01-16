import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';

import { Blog, Pill } from '~/components';
import { getPost, getAllPostSlugs } from '~/lib/post';
import { Layout } from '~/layouts';

import type { GetStaticPaths, GetStaticProps } from 'next';
import type { ParsedUrlQuery } from 'querystring';
import type { Post } from '~/types';

interface PathProps extends ParsedUrlQuery {
	slug: string;
}

interface BlogPostProps {
	post: Post;
}

export const getStaticPaths: GetStaticPaths<PathProps> = async () => {
	const posts = await getAllPostSlugs();

	return {
		paths: posts.map((post) => ({
			params: {
				slug: post.replace(/\.md/, ''),
			},
		})),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps<BlogPostProps, PathProps> = async ({ params }) => {
	const { frontmatter, source } = await getPost(params.slug);

	return {
		props: {
			post: {
				frontmatter,
				source,
			},
		},
	};
};

//@ts-ignore
export default function BlogPost({ post }: BlogPostProps): JSX.Element {
	return (
		<>
			<Layout.Blog
				seo={{
					title: `${post.frontmatter.title} Infinity Development`,
					description: post.frontmatter.description ?? undefined,
					openGraph: {
						title: post.frontmatter.title,
						images: [
							{
								url: post.frontmatter.banner ?? '/banner.png',
								alt: post.frontmatter.description,
								width: 1280,
								height: 720,
							},
						],
					},
				}}>
				<div className="relative px-4 py-16 overflow-hidden">
					<div className="relative px-4 sm:px-6 lg:px-8">
						{post.frontmatter.banner && (post.frontmatter.banner_show ?? true) && (
							<div className="relative mx-auto my-2 sm:max-w-2xl lg:sm:max-w-6xl sm:my-4">
								<div className="w-full h-64 h-full mb-8 bg-gray-200 lg:h-96 dark:bg-gray-600 rounded-3xl motion-safe:animate-pulse" />
								<Image
									alt={post.frontmatter.banner_alt ?? post.frontmatter.title}
									className="absolute top-0 left-0 object-cover w-full h-auto mb-8 shadow-xl select-none max-h-64 lg:max-h-96 rounded-3xl default-transition"
									draggable={false}
									layout="fill"
									src={post.frontmatter.banner}
								/>
							</div>
						)}

						<div className="flex flex-col mx-auto my-4 space-y-4 text-lg text-center max-w-prose">
							<div>
								{post.frontmatter.title_prefix && (
									<span className="block text-base font-semibold tracking-wide text-center uppercase text-primary-600">
										{post.frontmatter.title_prefix}
									</span>
								)}
								<span className="text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 dark:text-white sm:text-4xl">
									{post.frontmatter.title}
								</span>
							</div>

							<span className="flex items-center justify-center">
								<Pill.Date>{post.frontmatter.date}</Pill.Date>
							</span>

							{post.frontmatter.description && post.frontmatter.description_show && (
								<p className="mt-8 text-xl leading-8 text-gray-400">
									{post.frontmatter.description}
								</p>
							)}
						</div>

						<article className="mx-auto prose prose-lg text-gray-500 max-w-prose prose-primary">
							<MDXRemote {...post.source} components={Blog.X} />
						</article>
					</div>
				</div>
			</Layout.Blog>
			<Blog.Styles.Code />
			<Blog.Styles.Elements />
		</>
	);
}
