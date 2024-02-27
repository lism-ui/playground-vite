import { Lism, Container } from "@lism-ui/core";

export default function OneColumn({ title = "", children }) {
	return (
		<Lism py="60">
			<Container size="m" bd="bottom" pb="20" hasGutter>
				<h1>{title || "page title..."} </h1>
			</Container>

			<Container
				size="m"
				hasGutter
				isFlow
				className="entry-content"
				mbs={50}
			>
				{children}
			</Container>
		</Lism>
	);
}
