import { Disclosure } from '@headlessui/react';

import { Button, Navbar } from '~/components';
import { useNavigation } from '~/lib';

export function Standard(): JSX.Element {
	const { menu, settings } = useNavigation();

	return (
		<Disclosure as="nav" className="fixed top-0 left-0 z-10 w-full">
			<div className="px-2 mx-auto">
				<div className="relative flex items-center justify-between h-16">
					<Navbar.Dropdown items={menu} position="top-left">
						<Button.Icon aria-label="Menu">
							<Navbar.Icon icon="feather:menu" />
						</Button.Icon>
					</Navbar.Dropdown>
					<Navbar.Dropdown items={settings} position="top-right">
						<Button.Icon aria-label="Settings">
							<Navbar.Icon icon="feather:settings" />
						</Button.Icon>
					</Navbar.Dropdown>
				</div>
			</div>
		</Disclosure>
	);
}
