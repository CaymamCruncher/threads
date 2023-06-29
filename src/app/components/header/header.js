"use client";
import styles from "@/app/components/header/header.module.scss";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

function Header() {
	const [isStuck, updateIsStuck] = useState(false);
	const headerRef = useRef(null);
	let linkClasses = isStuck
		? "animated_link animated_link_white"
		: "animated_link";

	// check if header has stuck to top of screen and change styles of component
	useEffect(() => {
		const headerObserver = new IntersectionObserver(
			([e]) => {
				e.intersectionRatio < 1 ? updateIsStuck(true) : updateIsStuck(false);
			},
			{ threshold: [1] }
		);
		headerObserver.observe(headerRef.current);
	}, [headerRef]);

	return (
		<header
			ref={headerRef}
			className={
				isStuck ? `${styles.header} ${styles.header_stuck}` : styles.header
			}
		>
			<div
				className={
					isStuck
						? `${styles.header_container} ${styles.header_stuck_container}`
						: styles.header_container
				}
			>
				<h1>
					<Link href="/">Threads</Link>
				</h1>
				<nav>
					<Link className={linkClasses} href={"/Tops/1"}>
						Tops
					</Link>
					<Link className={linkClasses} href={"/Bottoms/1"}>
						Bottoms
					</Link>
					<Link className={linkClasses} href={"/Footwear/1"}>
						Footwear
					</Link>
					<Link className={linkClasses} href={"/Accessories/1"}>
						Accessories
					</Link>
				</nav>
			</div>
		</header>
	);
}

export default Header;
