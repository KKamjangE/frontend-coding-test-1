"use client";

import "./globals.css";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";

export default function RootLayout({ children }: { children: ReactNode }) {
	const router = useRouter();

	return (
		<html lang="en">
			<body>
				<header
					style={{
						padding: "1rem",
						background: "#f5f5f5",
						textAlign: "center",
					}}
				>
					<h1>Frontend Coding Test</h1>
					<nav style={{ marginTop: "1rem" }}>
						<button
							onClick={() => router.push("/")}
							style={{
								margin: "0 0.5rem",
								padding: "0.5rem 1rem",
								borderRadius: "6px",
								border: "none",
								backgroundColor: "#555",
								color: "white",
								cursor: "pointer",
							}}
						>
							Main
						</button>
						<button
							onClick={() => router.push("/statistics")}
							style={{
								margin: "0 0.5rem",
								padding: "0.5rem 1rem",
								borderRadius: "6px",
								border: "none",
								backgroundColor: "#555",
								color: "white",
								cursor: "pointer",
							}}
						>
							통계
						</button>
					</nav>
				</header>
				<main style={{ padding: "2rem" }}>{children}</main>
			</body>
		</html>
	);
}
