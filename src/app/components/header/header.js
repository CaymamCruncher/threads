"use client";
import styles from "@/app/components/header/header.module.scss";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Alex_Brush } from "next/font/google";

const alexBrush = Alex_Brush({
	weight: "400",
	subsets: ["latin"],
});

function Header() {
	const [isStuck, updateIsStuck] = useState(false);
	const headerRef = useRef(null);

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
				<h1 className={alexBrush.className}>
					<Link href="/">Threads</Link>
				</h1>
				<nav>
					<Link className="animated_link" href={"/Tops/1"}>
						Tops
					</Link>
					<span className={styles.header_spacer}></span>
					<Link className="animated_link" href={"/Bottoms/1"}>
						Bottoms
					</Link>
					<span className={styles.header_spacer}></span>
					<Link className="animated_link" href={"/Footwear/1"}>
						Footwear
					</Link>
					<span className={styles.header_spacer}></span>
					<Link className="animated_link" href={"/Accessories/1"}>
						Accessories
					</Link>
				</nav>
			</div>
		</header>
	);
}

export default Header;
