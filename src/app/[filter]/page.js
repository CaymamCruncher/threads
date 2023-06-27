function Page({ params }) {
	const { filter } = params;
	return (
		<main>
			<h2>{filter}</h2>
		</main>
	);
}

export default Page;
