import styles from "@/app/components/header/header.module.scss";
import Link from "next/link";

function Header() {
	return (
		<header className="container">
			<h1>
				<Link href="/">Threads</Link>
			</h1>
			<nav>
				<Link href={"/Tops/1"}>Tops</Link>
				<Link href={"/Bottoms/1"}>Bottoms</Link>
				<Link href={"/Footwear/1"}>Footwear</Link>
				<Link href={"/Accessories/1"}>Accessories</Link>
			</nav>
		</header>
	);
}

export default Header;
