import dynamic from "next/dynamic";
import React from "react";
const Layout = dynamic(() => import("@/layout"));

export default function Posts({ posts }) {
	console.log(posts);
	return (
		<Layout metaTitle={"Home"} metaDescription={"ini adalah home"}>
			{posts.map((post) => {
				return (
					<div key={post.id} className="bg-white p-4 text-black">
						<p>{post.id}</p>
						<h1>{post.title}</h1>
						<p>{post.body}</p>
					</div>
				);
			})}
		</Layout>
	);
}

export async function getServerSideProps() {
	// Fetch data from external API
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	const posts = await res.json();
	// Pass data to the page via props
	return { props: { posts } };
}
