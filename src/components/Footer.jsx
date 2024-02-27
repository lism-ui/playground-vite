// import { Link } from 'react-router-dom';
import { Container, Box } from "@lism-ui/core";

export default function Footer() {
	return (
		<Container
			size="m"
			tag="footer"
			className="z--footer"
			hasGutter
			bgc="content"
			c="base"
			mt="auto"
		>
			<Box py="50">Footer area</Box>
			<Box isFullwide hasGutter py="10" bgc="content-2">
				<p className="-ta:c -fz:xs">Copyright ...</p>
			</Box>
		</Container>
	);
}
