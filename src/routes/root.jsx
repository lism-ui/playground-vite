import { Outlet } from "react-router-dom";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { Stack } from "@lism-ui/core";

export default function Root() {
	return (
		<Stack minH="100dvh">
			<Header />
			<Outlet />
			<Footer />
		</Stack>
	);
}
