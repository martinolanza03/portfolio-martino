import "../style/Header.css";
function Header() {
    return (<header className="flex flex-row justify-center bg-slate-950/80 backdrop-blur-sm border-b border-blue-900/20 fixed top-0 right-0 left-0">
        <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
                <div className=" text-blue-400 font-bold">Martino.</div>
                <div className="flex gap-8">
                    <div className="text-gray-300 hover:text-blue-400 transition-colors">Progetti</div>
                    <div className="text-gray-300 hover:text-blue-400 transition-colors">Contatti</div>
                </div>
            </div>
        </nav>
    </header>)
}

export default Header
