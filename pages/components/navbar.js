import Link from "next/link";

export default function TopNav() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About Us</Link>
      <Link href="/puja">About Durga Puja</Link>
      <Link href="/contact">Contact Us</Link>
      <Link href="/share">Share</Link>
    </nav>
  )
}