import Link from "next/link";
import Head from "../components/Head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Recipes App</title>
			</Head>
			<h1>Recipes App</h1>
			<Link href="/recipes/blog">
				<a>Recipes Blog</a>
			</Link>
			<br />
			<Link href="/users/new-recipe">
				<a>New Recipe</a>
			</Link>
		</>
	);
}
