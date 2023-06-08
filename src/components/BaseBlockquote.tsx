import { Blockquote } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';
import classes from './BaseBlockquote.module.css';

const BaseBlockquote = () => {
	const icon = <IconInfoCircle />;
	return (
		<Blockquote
			// className={classes.testing}
			// unstyled
			color='blue'
			cite='– Forrest Gump'
			icon={icon}
			mt='xl'
		>
			Life is like an npm install – you never know what you are going to get.
		</Blockquote>
	);
};

export { BaseBlockquote };
