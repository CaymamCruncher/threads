import styles from "@/app/components/header/header.module.scss";
import Link from "next/link";

function Header() {
	return (
		<header className="container">
			<h1>
				<Link href="/">Threads</Link>
			</h1>
			<nav>
				<Link href={"/Tops"}>Tops</Link>
				<Link href={"/Bottoms"}>Bottoms</Link>
				<Link href={"/Footwear"}>Footwear</Link>
				<Link href={"/Accessories"}>Accessories</Link>
			</nav>
		</header>
	);
}

export default Header;
