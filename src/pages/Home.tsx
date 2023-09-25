import viteLogo from '/images/vite.svg';

const Home: React.FC = () => {
	return (
		<div className='flex h-screen items-center justify-center bg-gradient-to-r from-blue-600 to-violet-600 text-3xl font-medium text-white'>
			<img src={viteLogo} alt='vite logo' />
			<p>{import.meta.env.VITE_APP_NAME}</p>
			<p>{import.meta.env.MODE}</p>
		</div>
	);
};

export { Home };
