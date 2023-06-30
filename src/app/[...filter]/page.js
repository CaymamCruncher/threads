import Search from "@/app/components/search/search";

export async function generateStaticParams() {
	return [
		{
			filter: ["Tops", "1"],
		},
		{
			filter: ["Bottoms", "1"],
		},
		{
			filter: ["Footwear", "1"],
		},
		{
			filter: ["Accessories", "1"],
		},
	];
}

async function Page({ params }) {
	const code = process.env.SEARCH_CODE;
	const [filter, pageNum] = params.filter;
	const data = await fetch(
		`http://api.searchspring.net/api/search/search.json?siteId=${code}&q=${filter}&resultsFormat=native&page=${pageNum}`
	).then((res) => res.json());
	return (
		<main className="container">
			<Search filter={filter} data={data} preview={false}></Search>
		</main>
	);
}

export default Page;
