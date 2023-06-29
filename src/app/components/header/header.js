import styles from "@/app/components/header/header.module.scss";
import Link from "next/link";

function Header() {
	return (
		<header className="container">
			<h1>
				<Link href="/">Threads</Link>
			</h1>
			<nav>
				<Link className="animated_link" href={"/Tops/1"}>
					Tops
				</Link>
				<Link className="animated_link" href={"/Bottoms/1"}>
					Bottoms
				</Link>
				<Link className="animated_link" href={"/Footwear/1"}>
					Footwear
				</Link>
				<Link className="animated_link" href={"/Accessories/1"}>
					Accessories
				</Link>
			</nav>
		</header>
	);
}

export default Header;
