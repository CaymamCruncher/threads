import styles from "@/app/components/footer/footer.module.scss";

function Footer() {
	return (
		<footer>
			<div className="container">
				<div className={styles.icons_container}>
					<a
						className={styles.icons_github}
						href="https://github.com/CaymamCruncher/threads"
						target="_blank"
					>
						Github
					</a>
					<a
						className={styles.icons_linkedin}
						href="https://www.linkedin.com/in/hayden-tofts-97b82517b/"
						target="_blank"
					>
						LinkedIn
					</a>
				</div>
				<small>&copy;2023 Threads All Rights Reserved</small>
			</div>
		</footer>
	);
}

export default Footer;
