import { Layout } from '~/layouts';
import { StatusIndicator } from '../components/StatusIndicator'
import { Animate, List } from '~/components';
import useSWR from "swr";
import { STATUS_COLOR, READABLE_STATUS } from '~/types';
import { Pill } from '~/components';

export default function ProjectsPage(): JSX.Element {

	const { data: services } = useSWR("/api/status");

	return (
		<Layout.Default seo={{
			title: 'Our Projects | Toxic Development',
			description: 'A list of all of our github projects/repositories.',
		}}>
			<div className="my-24 mx-2 sm:mx-6 lg:mb-28 lg:mx-8">
				<div className="relative max-w-xl mx-auto">
					<List.Container>
						{services?.map((s: any, index) => (
							<Animate
								animation={{ y: [50, 0], opacity: [0, 1] }}
								key={index}
								transition={{
									delay: 0.1 * index,
								}}>
								<List.Status
									description={s?.description}
									icon={<StatusIndicator color={STATUS_COLOR[s?.status]} pulse />}
									title={s?.name}
									state={s?.status}
									visibility={true}
									status={s?.status}>
									{s?.status && (
										<div className="m-2 mt-0">
											<Pill.Status className="flex items-center justify-center w-full md:pb-2 bg-primary-500 bg-opacity-15 saturate-200 text-sm text-primary-500 rounded-lg" color={STATUS_COLOR[s?.status]}>
												{READABLE_STATUS[s?.status]}
											</Pill.Status>
										</div>
									)}
								</List.Status>
							</Animate>
						))}
					</List.Container>
				</div>
			</div>
		</Layout.Default>
	);
}
