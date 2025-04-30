"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
	name: string;
	path: string;
	className?: string;
}

export default function NavLink({ name, path, className }: NavLinkProps) {
	const pathname = usePathname();
	return (
		<Link href={path}>
			<button
				type="button"
				className={cn(
					"px-[31] py-[21] font-bold hover:cursor-pointer",
					pathname === path ? "text-primary-100" : "text-gray-600",
					className,
				)}
			>
				{name}
			</button>
		</Link>
	);
}
