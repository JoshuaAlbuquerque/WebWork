"use client";
import { usePathname } from "next/navigation";
export default function Post() {
const pathname = usePathname();
return <p> {pathname}</p>;// as far as i can tell we are passing the path of the file we want so we can have one code do it dynamically
}
