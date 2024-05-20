function MaLogo() {
    return (
        <div className="flex items-center py-1 gap-4">
            <div className="bg-[#40495A] p-2 rounded-lg">
                <img src="/ma.webp" alt="logo My Assistence" width={20} />
            </div>
            <p className="font-bold text-[#40495A] text-2xl">My Assitence</p>
        </div>
    );
}

export default MaLogo;
