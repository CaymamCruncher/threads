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
			let arrowButtons = (
				<div className={styles.page_buttons_arrow}>
					<Link
						className={styles.page_buttons_arrow_previous}
						href={`/${filter}/${pagination.previousPage}`}
					>
						Previous
					</Link>
					<Link
						className={styles.page_buttons_arrow_next}
						href={`/${filter}/${pagination.nextPage}`}
					>
						Next
					</Link>
				</div>
			);
			let bottomButtons = (
				<div className={styles.page_buttons_container}>
					<Link
						className={styles.page_buttons}
						href={`/${filter}/${pagination.previousPage}`}
					>
						Previous
					</Link>
					<Link
						className={styles.page_buttons}
						href={`/${filter}/${pagination.nextPage}`}
					>
						Next
					</Link>
				</div>
			);
			return [arrowButtons, bottomButtons];
		} else if (pagination.currentPage > 1) {
			let arrowButtons = (
				<div className={styles.page_buttons_arrow}>
					<Link
						className={styles.page_buttons_arrow_previous}
						href={`/${filter}/${pagination.previousPage}`}
					>
						Previous
					</Link>
					<button className={styles.page_buttons_arrow_next} disabled>
						Next
					</button>
				</div>
			);
			let bottomButtons = (
				<div className={styles.page_buttons_container}>
					<Link
						className={styles.page_buttons}
						href={`/${filter}/${pagination.previousPage}`}
					>
						Previous
					</Link>
					<button className={styles.page_buttons} disabled>
						Next
					</button>
				</div>
			);
			return [arrowButtons, bottomButtons];
		} else if (pagination.currentPage < pagination.totalPages) {
			let arrowButtons = (
				<div className={styles.page_buttons_arrow}>
					<button className={styles.page_buttons_arrow_previous} disabled>
						Previous
					</button>
					<Link
						className={styles.page_buttons_arrow_next}
						href={`/${filter}/${pagination.nextPage}`}
					>
						Next
					</Link>
				</div>
			);
			let bottomButtons = (
				<div className={styles.page_buttons_container}>
					<button className={styles.page_buttons} disabled>
						Previous
					</button>
					<Link
						className={styles.page_buttons}
						href={`/${filter}/${pagination.nextPage}`}
					>
						Next
					</Link>
				</div>
			);
			return [arrowButtons, bottomButtons];
		} else {
			let arrowButtons = (
				<div className={styles.page_buttons_arrow}>
					<button className={styles.page_buttons_arrow_previous} disabled>
						Previous
					</button>
					<button className={styles.page_buttons_arrow_next} disabled>
						Next
					</button>
				</div>
			);
			let bottomButtons = (
				<div className={styles.page_buttons_container}>
					<button className={styles.page_buttons} disabled>
						Previous
					</button>
					<button className={styles.page_buttons} disabled>
						Next
					</button>
				</div>
			);
			return [arrowButtons, bottomButtons];
		}
	}

	const [search, updateSearch] = useState("");
	const router = useRouter();
	const { results, pagination } = data;
	const [arrowButtons, pageButtons] = computePageButtons(pagination);
	// Check if there are any results
	if (results.length < 1) {
		return (
			<div className={styles.heading_container}>
				<h2>No Results Found</h2>
				<div className={styles.form_container}>
					<form
						className={styles.input_container}
						onSubmit={(e) => {
							e.preventDefault();
							router.push(`/${search}/1`);
						}}
					>
						<label htmlFor="searchbar" className={styles.label}>
							Search
						</label>
						<input
							id="searchbar"
							name="searchbar"
							type="text"
							placeholder="Search"
							required
							value={search}
							className={styles.input}
							onChange={(e) => updateSearch(e.target.value)}
						/>
						<button className={styles.button} type="submit">
							Search
						</button>
					</form>
				</div>
			</div>
		);
	}

	return (
		<>
			<div className={styles.heading_container}>
				{preview ? (
					<h2>
						<Link className="animated_link" href={`/${filter}/1`}>
							{filter}
						</Link>
					</h2>
				) : (
					<h2>{filter}</h2>
				)}
				<div className={styles.form_container}>
					<form
						className={styles.input_container}
						onSubmit={(e) => {
							e.preventDefault();
							router.push(`/${search}/1`);
						}}
					>
						<label htmlFor="searchbar" className={styles.label}>
							Search
						</label>
						<input
							id="searchbar"
							name="searchbar"
							type="text"
							placeholder="Search"
							required
							value={search}
							className={styles.input}
							onChange={(e) => updateSearch(e.target.value)}
						/>
						<button className={styles.button} type="submit">
							Search
						</button>
					</form>
					{!preview && arrowButtons}
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
