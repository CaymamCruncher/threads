import Search from "@/app/components/search/search";
import Link from "next/link";

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
	console.log(tops);

	return (
		<main>
			<section className="container">
				<h2>
					<Link href="/Tops/1">Tops</Link>
				</h2>
				<Search filter="Tops" data={tops} preview={true} />
			</section>
			<section className="container">
				<h2>
					<Link href="/Bottoms/1">Bottoms</Link>
				</h2>
				<Search filter="Bottoms" data={bottoms} preview={true} />
			</section>
			<section className="container">
				<h2>
					<Link href="/Footwear/1">Footwear</Link>
				</h2>
				<Search filter="Footwear" data={footwear} preview={true} />
			</section>
			<section className="container">
				<h2>
					<Link href="/Accessories/1">Accessories</Link>
				</h2>
				<Search filter="Accessories" data={accessories} preview={true} />
			</section>
		</main>
	);
}

export default Home;
