function MaLogo() {
    return (
        <div className="flex items-center py-1 gap-4">
            <div className={`bg-pink-500 p-2 rounded-lg`}>
                <img src="/ma.webp" alt="logo My Assistence" width={30} />
            </div>
            <h4 className={`font-bold text-[#40495A] text-2xl sm:text-3xl`}>
                My Assitence
            </h4>
        </div>
    );
}

export default MaLogo;
