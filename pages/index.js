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
			<div className="text-red bg-white">
				Home
				{/* <Image src="/next.png" alt="Next.js Logo" width={400} height={400} />
				<img
					src="/next.png"
					style={{
						width: 400,
						height: 400,
					}}></img> */}
			</div>
		</Layout>
	);
}
