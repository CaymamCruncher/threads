import Search from "@/app/components/search/search";

async function Home() {
	const tops = await fetch(
		`http://api.searchspring.net/api/search/search.json?siteId=${process.env.SEARCH_CODE}&q=tops&resultsFormat=native&page=1&resultsPerPage=3`
	).then((res) => res.json());
	const bottoms = await fetch(
		`http://api.searchspring.net/api/search/search.json?siteId=${process.env.SEARCH_CODE}&q=bottoms&resultsFormat=native&page=1&resultsPerPage=3`
	).then((res) => res.json());
	const footwear = await fetch(
		`http://api.searchspring.net/api/search/search.json?siteId=${process.env.SEARCH_CODE}&q=footwear&resultsFormat=native&page=1&resultsPerPage=3`
	).then((res) => res.json());
	const accessories = await fetch(
		`http://api.searchspring.net/api/search/search.json?siteId=${process.env.SEARCH_CODE}&q=accessories&resultsFormat=native&page=1&resultsPerPage=3`
	).then((res) => res.json());

	return (
		<main>
			<section className="container">
				<Search filter="Tops" data={tops} preview={true} />
			</section>
			<section className="container search_preview">
				<Search filter="Bottoms" data={bottoms} preview={true} />
			</section>
			<section className="container search_preview">
				<Search filter="Footwear" data={footwear} preview={true} />
			</section>
			<section className="container search_preview">
				<Search filter="Accessories" data={accessories} preview={true} />
			</section>
		</main>
	);
}

export default Home;
