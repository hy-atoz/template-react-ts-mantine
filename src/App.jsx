function App() {
	return (
		<div className='bg-gradient-to-b from-blue-600 to-violet-600 text-white flex items-center justify-center h-screen text-3xl'>
			<p>{import.meta.env.VITE_APP_NAME}</p>
		</div>
	);
}

export default App;
