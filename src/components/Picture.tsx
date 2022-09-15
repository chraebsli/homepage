export function Picture({
	path, name, sizes, r, children,
}: { path: string, name: string, sizes: number[], r?: boolean, children: React.ReactNode }) {
	const defaultSrc = (ext: string) => `/media/${ path }/${ name }-${ sizes[0] }${ ext }`;
	const createSrcSet = (size: number, ext: string) => `/media/${ path }/${ name }-${ size }${ ext } ${ size }w`;

	return (
		<picture
			style={ r ? { display: "flex", justifyContent: "center", alignItems: "center" } : {} }
		>
			<source
				key={ 0 }
				srcSet={ `${ defaultSrc(".webp") }, ${ sizes.map(size => createSrcSet(size, ".webp")).join(", ") }` }
				type="image/webp"
			/>
			{ children }
		</picture>
	);
}
