import { component$, useResource$ } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';
import { useEndpoint } from '@builder.io/qwik-city';

export const onGet: RequestHandler = async ({ url }) => {
	const search = url.searchParams.get('search');
};

export default component$(() => {
	return (
		<>
			<h1>Bookfinder</h1>
			<form action="/bookfinder">
				<input
					type="text"
					name="search"
					placeholder="Author/Title/ISBN"
				/>
				<button type="submit">Search</button>
			</form>
		</>
	);
});
