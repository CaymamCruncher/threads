"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "@/app/components/search/search.module.scss";

function Search({ filter, data }) {
	const [search, updateSearch] = useState("");
	const router = useRouter();
	const { results, pagination } = data;
	return (
		<>
			<h2>{filter}</h2>
			<div>
				<label htmlFor="searchbar">Search</label>
				<input
					id="searchbar"
					type="text"
					value={search}
					onChange={(e) => updateSearch(e.target.value)}
				/>
				<button onClick={() => router.push(`/${search}`)}>Submit</button>
			</div>
			{results ? (
				<div className={styles.item_container}>
					{results.map((item) => (
						<article className={styles.item} key={item.id}>
							<h3 className={styles.item_header}>{item.name}</h3>
							<Image
								className={styles.item_image}
								alt={item.name}
								src={item.imageUrl}
								width={233}
								height={350}
							/>
						</article>
					))}
				</div>
			) : (
				<div>
					<h3>No results Found</h3>
				</div>
			)}
		</>
	);
}

export default Search;
