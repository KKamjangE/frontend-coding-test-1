import "./globals.css";
import type { ReactNode } from "react";
import NavLink from "@/components/statistics/NavLink";

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body>
				<header className="border-b-2 border-grap-100 w-full">
					<nav className="px-[26]">
						<NavLink name="대시보드" path="/1" />
						<NavLink name="DESK" path="/2" />
						<NavLink name="예약 관리" path="/3" />
						<NavLink name="상담실" path="/4" />
						<NavLink name="현황판" path="/5" />
						<NavLink name="진료실" path="/6" />
						<NavLink name="고객관리" path="/7" />
						<NavLink name="어드민" path="/8" />
						<NavLink name="통계" path="/statistics" />
						<NavLink name="마켓팅" path="/9" />
						<NavLink name="TM" path="/10" />
					</nav>
				</header>
				<main className="px-[55] pt-[30]">{children}</main>
			</body>
		</html>
	);
}
