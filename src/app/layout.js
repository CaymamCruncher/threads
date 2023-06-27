import "@/app/styles/default.scss";
import Header from "@/app/components/header/header";

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
			</body>
		</html>
	);
}
