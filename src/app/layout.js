import "@/app/styles/globals.scss";
import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";

export const metadata = {
	title: "Threads",
	description: "A new age clothing store for all your stylish needs!",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
