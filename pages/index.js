import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/layout";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Main() {
	useEffect(() => {
		fetch("/api/hello")
			.then((res) => res.json())
			.then((res) => console.log("responsr => ", res))
			.catch((err) => console.log("error => ", err));
	}, []);
	return (
		<Layout metaTitle={"Home"} metaDescription={"ini adalah home"}>
			<div className="text-red">Home</div>
		</Layout>
	);
}
