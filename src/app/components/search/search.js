"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "@/app/components/search/search.module.scss";
import Link from "next/link";

function Search({ filter, data, preview }) {
	// compute which page buttons to show
	function computePageButtons(pagination) {
		if (
			pagination.currentPage > 1 &&
			pagination.currentPage < pagination.totalPages
		) {
			return (
				<div className={styles.page_buttons}>
					<Link
						className={styles.page_buttons_previous}
						href={`/${filter}/${pagination.previousPage}`}
					>
						Previous
					</Link>
					<Link
						className={styles.page_buttons_next}
						href={`/${filter}/${pagination.nextPage}`}
					>
						Next
					</Link>
				</div>
			);
		} else if (pagination.currentPage > 1) {
			return (
				<div className={styles.page_buttons}>
					<Link
						className={styles.page_buttons_previous}
						href={`/${filter}/${pagination.previousPage}`}
					>
						Previous
					</Link>
					<button
						className={styles.page_buttons_next}
						disabled
						href={`/${filter}/${pagination.nextPage}`}
					>
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
					<Link
						className={styles.page_buttons_next}
						href={`/${filter}/${pagination.nextPage}`}
					>
						Next
					</Link>
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
			{!preview && (
				<div className={styles.heading_container}>
					<h2>{filter}</h2>
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
							onSubmit={() => router.push(`/${search}/1`)}
						/>
						<button
							className={styles.button}
							onClick={() => router.push(`/${search}/1`)}
						>
							Search
						</button>
					</div>
				</div>
			)}
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
								{item.price > item.msrp ? (
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
			{!preview && pageButtons}
		</>
	);
}

export default Search;
