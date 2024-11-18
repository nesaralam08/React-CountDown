export default function Footer() {
    return (
        <>
            <footer className="footer footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by <a href="https://nesaralam.online/" target="_blank" className="text-blue-600 underline">Nesar Alam</a></p>
                </aside>
            </footer>
        </>
    )
}