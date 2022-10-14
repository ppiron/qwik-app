import { component$, Resource } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';
import { useEndpoint, useLocation } from '@builder.io/qwik-city';

interface Book {
	title: string;
	author: string;
}

export const onGet: RequestHandler = async ({ url }) => {
	const search = url.searchParams.get('search');
	if (!search) return;
	// const response = await fetch(
	// 	`https://www.googleapis.com/books/v1/volumes?q=${search}&key=`
	// );
	// console.log((await response.json())['items'][0]);
	return {
		title: 'title',
		author: 'endi',
	};
};

export default component$(() => {
	const data = useEndpoint<Book | null>();
	const location = useLocation();
	const search: string | undefined = location.query['search'];

	return (
		<>
			<h1>Bookfinder</h1>
			<form action="/bookfinder">
				<input
					type="text"
					name="search"
					placeholder="Author/Title/ISBN"
					value={search}
				/>
				<button type="submit">Search</button>
			</form>
			<Resource
				value={data}
				onResolved={(data) => {
					if (!data) {
						return <p>Results will display here.</p>;
					}
					return <p>{data.title}</p>;
				}}
			/>
		</>
	);
});
