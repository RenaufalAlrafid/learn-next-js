import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
	Flex,
	Grid,
	GridItem,
	Card,
	CardBody,
	CardHeader,
	CardFooter,
	Heading,
	Text,
} from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

const Layout = dynamic(() => import("@/layout"));

// export async function getStaticProps() {
// 	const res = await fetch("https://paace-f178cafcae7b.nevacloud.io/api/notes");
// 	const notes = await res.json();
// 	return { props: { notes }, revalidate: 10 };
// }

export default function Main() {
	const [notes, setNotes] = useState([]);
	useEffect(() => {
		async function getNotes() {
			const res = await fetch(
				"https://paace-f178cafcae7b.nevacloud.io/api/notes"
			);
			const listNotes = await res.json();
			setNotes(listNotes);
		}
		getNotes();
	}, []);
	console.log(notes);
	return (
		<Layout metaTitle={"Home"} metaDescription={"ini adalah home"}>
			<Flex>
				<Grid templateColumns="repeat(3, 1fr)" gap={6}>
					{notes?.data?.map((note) => {
						return (
							<GridItem key={note.id}>
								<Card>
									<CardHeader>
										<Heading>{note.title}</Heading>
									</CardHeader>
									<CardBody>
										<Text>{note.description}</Text>
									</CardBody>
									<CardFooter justify={"space-between"} flexWrap={"wrap"}>
										<Link href={`/notes/${note.id}`}>Edit</Link>
										<Link href={`/notes/${note.id}`}>Delete</Link>
									</CardFooter>
								</Card>
							</GridItem>
						);
					})}
				</Grid>
			</Flex>
		</Layout>
	);
}
