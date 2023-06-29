import "@/app/styles/globals.scss";
import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
	weight: ["300", "500", "700"],
	subsets: ["latin"],
});

export const metadata = {
	title: "Threads",
	description: "A new age clothing store for all your stylish needs!",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
