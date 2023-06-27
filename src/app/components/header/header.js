import styles from "@/app/components/header/header.module.scss";
import Link from "next/link";

function Header() {
	return (
		<header className="container">
			<h1>
				<Link href="/">Threads</Link>
			</h1>
			<nav>
				<Link href={"/tops"}>Tops</Link>
				<Link href={"/bottoms"}>Bottoms</Link>
				<Link href={"/footwear"}>Footwear</Link>
				<Link href={"/accessories"}>Accessories</Link>
			</nav>
		</header>
	);
}

export default Header;
