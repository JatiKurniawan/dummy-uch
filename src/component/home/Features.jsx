

function Features() {
  return (
    <div className="bg-main font-jof flex flex-col items-center text-white px-6 py-10 gap-6" id="feature">
        <h1 className="text-xl font-black lg:text-3xl">APP FEATURES</h1>
        <p className="text-center w-5/6 lg:text-lg">Temukan fitur-fitur utama dari aplikasi UTY Creative Hub yang membuat pembookingan ruangan menjadi lebih mudah dan efisien bagi mahasiswa Universitas Teknologi Yogyakarta. Aplikasi kami dirancang dengan kenyamanan Anda sebagai prioritas, menawarkan pengalaman yang mulus dan ramah pengguna. Berikut adalah fitur-fitur aplikasi kami:</p>
        <div className="flex flex-col items-center mt-8 gap-8 md:flex-row md:justify-evenly">
            <div className="flex flex-col items-center gap-8 md:gap-16 lg:gap-28">
                <div className="flex flex-col items-center gap-2 md:items-end md:w-2/3">
                    <img src="icon-features-1.png" alt="" className="w-16 object-cover"/>
                    <h2 className="text-base font-bold lg:text-lg">User-Friendly</h2>
                    <p className="text-center text-sm md:text-right md:text-base">Pengalaman pengguna yang optimal dengan navigasi yang mudah dan fitur-fitur yang memudahkan penggunaan aplikasi bagi semua mahasiswa.</p>
                </div>
                <div className="flex flex-col items-center gap-2 md:items-end md:w-2/3">
                    <img src="icon-features-2.png" alt="" className="w-16 object-cover"/>
                    <h2 className="text-base font-bold lg:text-lg text-center">QR Scan & Magnetic Door Lock Integration</h2>
                    <p className="text-center text-sm md:text-right md:text-base">Akses ruangan dengan aman dan efisien melalui integrasi pemindaian kode QR dan kunci pintu magnetik.</p>
                </div>
            </div>
            <img src="img-phone-1.png" alt="" className="hidden md:block"/>
            <div className="flex flex-col items-center gap-8 md:gap-16 lg:gap-28">
                <div className="flex flex-col items-center gap-2 md:items-start md:w-2/3">
                    <img src="icon-features-3.png" alt="" className="w-16 object-cover"/>
                    <h2 className="text-base font-bold lg:text-lg">Location-Based Service (LBS)</h2>
                    <p className="text-center text-sm md:text-left md:text-base">Temukan dan akses ruangan dengan mudah menggunakan layanan berbasis lokasi yang terintegrasi dalam aplikasi.</p>
                </div>
                <div className="flex flex-col items-center gap-2 md:items-start md:w-2/3">
                    <img src="icon-features-4.png" alt="" className="w-16 object-cover"/>
                    <h2 className="text-base font-bold lg:text-lg">Biometric & PIN Security</h2>
                    <p className="text-center text-sm md:text-left md:text-base">Keamanan tambahan dengan autentikasi biometrik dan PIN untuk melindungi akses ke akun Anda dan memastikan hanya Anda yang dapat membooking dan mengakses ruangan.</p>
                </div>
            </div>
            <img src="img-phone-1.png" alt="" className="md:hidden"/>
        </div>
    </div>
  )
}

export default Features