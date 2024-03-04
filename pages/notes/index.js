import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const Layout = dynamic(() => import("@/layout"));

export async function getStaticProps() {
	const res = await fetch("https://paace-f178cafcae7b.nevacloud.io/api/notes");
	const notes = await res.json();
	return { props: { notes }, revalidate: 10 };
}

export default function Main({ notes }) {
	console.log(notes.data);
	return (
		<Layout metaTitle={"Home"} metaDescription={"ini adalah home"}>
			{notes.data.map((note) => {
				return (
					<div key={note.id} className="bg-white p-4 text-black">
						<Link href={`/notes/${note.id}`}>{note.title}</Link>
					</div>
				);
			})}
		</Layout>
	);
}
