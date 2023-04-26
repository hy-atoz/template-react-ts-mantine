import viteLogo from '/images/vite.svg';

const Home = () => {
	return (
		<div className='bg-gradient-to-r from-blue-600 to-violet-600 text-white items-center justify-center h-screen text-3xl flex'>
			<img src={viteLogo} alt='vite logo' />
			<p>{import.meta.env.VITE_APP_NAME}</p>
		</div>
	);
};

export default Home;
