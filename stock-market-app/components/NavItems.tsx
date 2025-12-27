"use client"
import { NAV_ITEMS } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavItems: React.FC = () => {
    const pathname=usePathname();
    const isActive = (path: string) => {
        if(path=="/") return "/";
        return pathname.startsWith(path)
    }
    return (
        <ul className="flex flex-col sm:flex-row gap-3 p-2 sm:gap-10 font-medium">
            {
                NAV_ITEMS.map((item) => (
                    <li key={item.title}>
                        <Link href={item.href} 
                        className={`hover:text-yellow-500 transition-colors ${isActive(item.href) ? 'text-gray-100' : ''}`}
                        >{item.title}</Link>
                    </li>
                ))
            }
        </ul>
    );
}

export default NavItems;