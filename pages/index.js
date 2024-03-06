import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

const Layout = dynamic(() => import("@/layout"));

export default function Main() {
	useEffect(() => {
		fetch("/api/hello")
			.then((res) => res.json())
			.then((res) => console.log("responsr => ", res))
			.catch((err) => console.log("error => ", err));
	}, []);
	return (
		<Layout metaTitle={"Home"} metaDescription={"ini adalah home"}>
			Home
		</Layout>
	);
}
