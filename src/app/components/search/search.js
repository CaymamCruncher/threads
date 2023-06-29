"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "@/app/components/search/search.module.scss";

function Search({ filter, data }) {
	// compute which page buttons to show
	function computePageButtons(pagination) {
		if (
			pagination.currentPage > 1 &&
			pagination.currentPage < pagination.totalPages
		) {
			return (
				<div className={styles.page_buttons}>
					<button className={styles.page_buttons_previous}>Previous</button>
					<button className={styles.page_buttons_next}>Next</button>
				</div>
			);
		} else if (pagination.currentPage > 1) {
			return (
				<div className={styles.page_buttons}>
					<button className={styles.page_buttons_previous}>Previous</button>
					<button className={styles.page_buttons_next} disabled>
						Next
					</button>
				</div>
			);
		} else {
			return (
				<div className={styles.page_buttons}>
					<button className={styles.page_buttons_previous} disabled>
						Previous
					</button>
					<button className={styles.page_buttons_next}>Next</button>
				</div>
			);
		}
	}

	const [search, updateSearch] = useState("");
	const router = useRouter();
	const { results, pagination } = data;
	console.log(pagination);
	let pageButtons = computePageButtons(pagination);
	return (
		<>
			<div className={styles.heading_container}>
				<h2 className={styles.heading}>{filter}</h2>
				<div className={styles.input_container}>
					<label htmlFor="searchbar" className={styles.label}>
						Search
					</label>
					<input
						id="searchbar"
						name="searchbar"
						type="text"
						placeholder="Search"
						value={search}
						className={styles.input}
						onChange={(e) => updateSearch(e.target.value)}
					/>
					<button
						className={styles.button}
						onClick={() => router.push(`/${search}`)}
					>
						Search
					</button>
				</div>
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
							<div className={styles.item_price_container}>
								{item.price < item.msrp ? (
									<div>
										<p
											className={`${styles.item_price} ${styles.item_crossed_out}`}
										>
											${item.price}
										</p>
										<p className={styles.item_msrp}>${item.msrp}</p>
									</div>
								) : (
									<>
										<p className={styles.item_price}>${item.price}</p>
									</>
								)}
								<button className={styles.item_button}>Add to cart</button>
							</div>
						</article>
					))}
				</div>
			) : (
				<div>
					<h3>No results Found</h3>
				</div>
			)}
			{pageButtons}
		</>
	);
}

export default Search;
