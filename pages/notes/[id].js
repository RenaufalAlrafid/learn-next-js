import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

const Layout = dynamic(() => import("@/layout"));

export async function getStaticPaths() {
	const res = await fetch("https://paace-f178cafcae7b.nevacloud.io/api/notes");
	const notes = await res.json();
	const paths = notes.data.map((note) => ({
		params: { id: note.id },
	}));

	return {
		paths,
		fallback: true, // false or "blocking"
	};
}

export async function getStaticProps(context) {
	const { id } = context.params;
	const res = await fetch(
		`https://paace-f178cafcae7b.nevacloud.io/api/notes/${id}`
	);
	const notes = await res.json();
	return { props: { notes }, revalidate: 10 };
}

export default function Main({ notes }) {
	console.log(notes.data);
	return (
		<Layout metaTitle={"Home"} metaDescription={"ini adalah home"}>
			<div className="bg-white p-4 text-black">
				<h1>{notes.data.title}</h1>
				<p>{notes.data.description}</p>
				<p>{notes.data.updated_at}</p>
			</div>
		</Layout>
	);
}
