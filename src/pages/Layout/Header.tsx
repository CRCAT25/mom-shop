const Header = () => {
    return (
        <header className="bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-8xl mx-auto px-10 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <h1
                        className="text-5xl italic text-gray-800 text-shadow-soft"
                        style={{ fontFamily: 'Playball, cursive' }}
                    >
                        Cô Thoa Quán
                    </h1>
                </div>

                {/* Contact & Auth */}
                <div className="flex items-center gap-6">
                    <div className="text-right">
                        <p className="text-red-600 text-sm font-semibold">Liên hệ trực tiếp</p>
                        <p className="text-gray-800 font-bold text-lg">0935.551.538</p>
                    </div>

                    <div className="flex gap-3">
                        <button className="cursor-pointer px-6 py-2 border-2 border-[#ffb432] text-[#ffb432] font-semibold rounded-full hover:bg-orange-50 transition-all duration-300">
                            Đăng ký
                        </button>
                        <button className="cursor-pointer px-6 py-2 button-background-gradient text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
                            Đăng nhập
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;