// import Front from "~/layouts/front";
import {
	Container,
	Lism,
	Spacer,
	Center,
	Button,
	Columns,
} from "@lism-ui/core";

export default function Index() {
	return (
		<>
			<Container size="m" hasGutter bgc="base-3" py="60">
				<h1 className="-fw:thin">Lism Playground (Vite)</h1>
			</Container>

			<Container
				size="m"
				hasGutter
				isFlow
				mbs={60}
				// bd
			>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Debitis perspiciatis quaerat corporis dolor nemo impedit
					magni esse delectus recusandae quidem aut itaque molestiae,
					velit facere inventore voluptatibus minima veniam libero.
				</p>
				<p>...</p>

				<Columns gap="40">
					<Lism bgc="base-2" p="box" bxsh="3" bdrs="m" isFlow="s">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit.
						</p>
					</Lism>
					<Lism bgc="base-2" p="box" bxsh="3" bdrs="m" isFlow="s">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit.
						</p>
					</Lism>
				</Columns>
				<Center mbs="50">
					<Button href="#">Button</Button>
				</Center>
			</Container>
			<Spacer h={40} />
		</>
	);
}
