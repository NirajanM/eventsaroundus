import Link from "next/link"
export default function Header() {
    return (
        <header className="py-8 bg-slate-900 mb-16 text-white">
            <nav>
                <Link href="/" className="hover:scale-110 hover:font-bold">
                    Home
                </Link>
                <Link href="/events" className="hover:scale-110 hover:font-bold">
                    Events
                </Link>
                <Link href="/about-us" className="hover:scale-110 hover:font-bold">
                    About Us
                </Link>
            </nav>
        </header>
    )
}
