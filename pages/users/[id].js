import Layout from "@/layout";
import React from "react";
import { useRouter } from "next/router";

export default function UserByName() {
  const router = useRouter();
  const { id } = router.query;
	return (
		<Layout>
			<h1>User by {id}</h1>
		</Layout>
	);
}
