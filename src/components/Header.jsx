import { Link } from "react-router-dom";
import { Text, Flex, Container, Cluster } from "@lism-ui/core";
export default function Header() {
	return (
		<Container
			size="m"
			tag="header"
			className="z--header"
			hasGutter
			bxsh="2"
			pos="sticky"
			insets={{ t: "0" }}
			bgc="base"
		>
			<Flex py="30" gap="30">
				<Text tag="h1" fz={["m", "l"]}>
					Lism Playground @vite
				</Text>
				<Cluster tag="nav" gap="20" ms="auto" ml="a">
					<Link to={"/"}>HOME</Link>
					<Link to={"/about"}>About Page</Link>
					{/* <Link to={"/has-sidebar"}>Has Sidebar</Link>
					<Link to={"/test/container"}>Test</Link>
					<Link to={"/test/decorator"}>Test</Link>
					<Link to={"/test/gradation"}>Test</Link> */}
				</Cluster>
			</Flex>
		</Container>
	);
}
