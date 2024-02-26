import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<Layout metaTitle={"Profile"} metaDescription={"ini adalah profile saya"}>
			<div className="text-red">Profile</div>
		</Layout>
	);
}
