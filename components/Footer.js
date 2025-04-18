import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-[#82b400] text-white py-10">
            <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                {/* Logo */}
                <Image src="/images/treash-logo.png" alt="Treash Logo" width={120} height={50} />

                {/* Social Media */}
                <div className="mt-6 md:mt-0 flex flex-col gap-4 text-sm">
                    <div className="flex items-center gap-2">
                        <Image src="/images/ig.png" alt="Instagram" width={20} height={20} />
                        @treashapp
                    </div>
                    <div className="flex items-center gap-2">
                        <Image src="/images/twitter.png" alt="X" width={20} height={20} />
                        @treash
                    </div>
                </div>
            </div>
        </footer>
    );
}
