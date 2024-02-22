import styles from "./style.module.css";

export default function Header() {
	return (
		<div className={styles.header}>
			<a href="/" className="bg-blue-500">
				Home
			</a>
			<a href="/" className="bg-blue-500">
				About
			</a>
		</div>
	);
}
