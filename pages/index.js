import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Main() {
	return (
		<Layout metaTitle={"Home"} metaDescription={"ini adalah home"}>
			<div className="text-red">Home</div>
		</Layout>
	);
}
