import logoWhatsapp from "../../assets/images/logo_adv.avif";

export default function Navbar() {
    return (
        <nav id="top" className="bg-[#FFFF] min-h-[122px] flex items-center justify-center px-4 py-6">
            <div className="flex items-center justify-center w-full max-w-7xl">
                <div className="flex items-center justify-center gap-4">
                    <div className="w-[80px] sm:w-[180px] h-[3px] bg-[#c4942c] rounded"></div>
                    <img src={logoWhatsapp.src} alt="WhatsApp" className="w-28 h-28" />
                    <div className="w-[80px] sm:w-[180px] h-[3px] bg-[#c4942c] rounded"></div>
                </div>
            </div>
        </nav>
    );
}