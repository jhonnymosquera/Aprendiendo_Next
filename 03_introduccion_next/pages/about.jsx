import HeadLayout from "@/components/layouts/HeadLayout";
import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function about() {
	return (
		<>
			<HeadLayout title={"About"} description={"About Page"} />

			<h1>About</h1>
		</>
	);
}
