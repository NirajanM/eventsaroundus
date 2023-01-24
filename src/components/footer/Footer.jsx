
export default function Footer() {
    return (
        <footer className="py-8 bg-slate-900 mt-16 text-white">
            <div>
                &copy; {new Date().getFullYear()} all rights reserved
            </div>
            <span>
                Developed with love by <a href="https://nirajanmalla.com.np" className="font-bold">
                    Nirajan Malla
                </a>
            </span>
        </footer>
    )
}
