import AuthSuccess from "@/components/Accounts/AuthSuccess";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  let currentYear = new Date().getFullYear();
  return (
    <div>
      <AuthSuccess msg="You are now Logged In!" type="success" show={0} />

      <section className="bg-white">
        <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                About
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Blog
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Team
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Pricing
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Contact
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Terms
              </a>
            </div>
          </nav>
          <div className="flex justify-center mt-8 space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              <FacebookIcon />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Instagram</span>
              <InstagramIcon />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <TwitterIcon />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              <TwitterIcon />
            </a>
          </div>
          <p className="mt-8 text-base leading-6 text-center text-gray-400">
            © {currentYear} All rights reserved.
            <span className="ml-2">
              Developed by:
              <a
                href="https://www.facebook.com/hossain.shuvo.7860"
                target="_blank"
                className="text-blue-500 font-semibold ml-1"
              >
                HossAin Shuvo
              </a>
              <span className="mx-1">&</span>
              <a
                href="https://www.facebook.com/mdmahinbinraihan"
                target="_blank"
                className="text-blue-500 font-semibold"
              >
                Md Mahin Bin Raihan
              </a>
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Footer;
