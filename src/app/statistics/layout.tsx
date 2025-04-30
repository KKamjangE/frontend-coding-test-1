import NavLink from "@/components/ui/NavLink";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import type { ReactNode } from "react";

export default function Statisticslayout({
	children,
}: { children: ReactNode }) {
	return (
		<section>
			<h1 className="text-[15px] font-bold text-gray-600 mb-[15]">
				비즈니스 인사이트
			</h1>
			<div className="flex gap-5">
				<nav className="w-[185]">
					<Accordion type="single" collapsible>
						<AccordionItem value="고객 분석">
							<AccordionTrigger>고객 분석</AccordionTrigger>
							<AccordionContent>
								<NavLink
									name="대시보드"
									path="/statistics/customer-analysis/dashboard"
									className="p-2.5"
								/>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="마케팅 분석">
							<AccordionTrigger>마케팅 분석</AccordionTrigger>
						</AccordionItem>
						<AccordionItem value="매출 분석">
							<AccordionTrigger>매출 분석</AccordionTrigger>
						</AccordionItem>
						<AccordionItem value="서비스 분석">
							<AccordionTrigger>서비스 분석</AccordionTrigger>
						</AccordionItem>
						<AccordionItem value="성과 관리">
							<AccordionTrigger>성과 관리</AccordionTrigger>
						</AccordionItem>
					</Accordion>
				</nav>
				{children}
			</div>
		</section>
	);
}
