import Search from "@/app/components/search/search";

export async function generateStaticParams() {
	return [
		{
			filter: "Tops",
		},
		{
			filter: "Bottoms",
		},
		{
			filter: "Footwear",
		},
		{
			filter: "Accessories",
		},
	];
}

async function Page({ params }) {
	const code = process.env.SEARCH_CODE;
	const { filter } = params;
	const data = await fetch(
		`http://api.searchspring.net/api/search/search.json?siteId=${code}&q=${filter}&resultsFormat=native`
	).then((res) => res.json());
	return (
		<main className="container">
			<Search filter={filter} data={data}></Search>
		</main>
	);
}

export default Page;
