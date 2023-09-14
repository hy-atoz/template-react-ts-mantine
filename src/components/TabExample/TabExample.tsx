import { Tabs, rem } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import classes from './TabExample.module.css';

const TabExample = () => {
	const iconStyle = { width: rem(12), height: rem(12) };

	return (
		<Tabs defaultValue='gallery'>
			<Tabs.List className={classes.list}>
				<Tabs.Tab
					className={classes.tab}
					value='gallery'
					leftSection={<IconPhoto style={iconStyle} />}
				>
					Gallery
				</Tabs.Tab>
				<Tabs.Tab
					className={classes.tab}
					value='messages'
					leftSection={<IconMessageCircle style={iconStyle} />}
				>
					Messages
				</Tabs.Tab>
				<Tabs.Tab
					className={classes.tab}
					value='settings'
					leftSection={<IconSettings style={iconStyle} />}
				>
					Settings
				</Tabs.Tab>
			</Tabs.List>

			<Tabs.Panel className={classes.panel} value='gallery'>
				Gallery tab content
			</Tabs.Panel>

			<Tabs.Panel className={classes.panel} value='messages'>
				Messages tab content
			</Tabs.Panel>

			<Tabs.Panel className={classes.panel} value='settings'>
				Settings tab content
			</Tabs.Panel>
		</Tabs>
	);
};

export { TabExample };
