import Image from "next/image";

const Footer = () => {
  return (
    <footer className="sm:px-10 px-5 pt-7 pb-3  border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="w-12 h-12 rounded-full flex justify-center items-center bg-black-300 border border-black-200">
          <Image src="/assets/github.svg" width={12} height={12} alt="github" className="w-1/2 h-1/2" />
        </div>
        <div className="w-12 h-12 rounded-full flex justify-center items-center bg-black-300 border border-black-200">
          <Image src="/assets/twitter.svg" width={12} height={12} alt="twitter" className="w-1/2 h-1/2" />
        </div>
        <div className="w-12 h-12 rounded-full flex justify-center items-center bg-black-300 border border-black-200">
          <Image src="/assets/instagram.svg" width={12} height={12} alt="instagram" className="w-1/2 h-1/2" />
        </div>
      </div>

      <p className="text-white-500">© 2025 Isaac Semanu. All rights reserved.</p>
    </footer>
  );
};

export default Footer;