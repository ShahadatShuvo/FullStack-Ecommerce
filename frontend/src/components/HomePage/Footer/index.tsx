import AuthSuccess from "@/components/Accounts/AuthSuccess";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { GlobalStates } from "@/app/context";
import { useContext } from "react";
import Link from "next/link";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

function Footer() {
  const { refreshToken, isDarkTheme } = useContext(GlobalStates);

  let currentYear = new Date().getFullYear();

  // useEffect(() => {
  //   // Function to request a new access token using the refresh token
  //   const requestNewAccessToken = async () => {
  //     try {
  //       const response = await fetch(`${apiUrl}/api/account/refresh-token/`, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           refreshToken: refreshToken,
  //         }),
  //       });

  //       if (response.ok) {
  //         const data = await response.json();
  //         setToken(data, "accessToken");
  //         console.log("new access token", data);
  //       } else {
  //         // Handle error response
  //         console.error("Failed to refresh access token");
  //       }
  //     } catch (error) {
  //       console.error("Error occurred while refreshing access token", error);
  //     }
  //   };
  //   if (!accessToken && refreshToken) {
  //     requestNewAccessToken();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div>
      {refreshToken && (
        <AuthSuccess msg="You are now Logged In!" type="success" show={0} />
      )}

      <section>
        <div className="w-screen-xl py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="px-5 py-2">
              <Link
                href="/about"
                className={
                  isDarkTheme
                    ? "text-base leading-6 text-gray-500 hover:text-gray-200"
                    : "text-base leading-6 text-gray-500 hover:text-gray-900"
                }
              >
                About
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link
                href="/pageNotFound"
                className={
                  isDarkTheme
                    ? "text-base leading-6 text-gray-500 hover:text-gray-200"
                    : "text-base leading-6 text-gray-500 hover:text-gray-900"
                }
              >
                Blog
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link
                href="/team"
                className={
                  isDarkTheme
                    ? "text-base leading-6 text-gray-500 hover:text-gray-200"
                    : "text-base leading-6 text-gray-500 hover:text-gray-900"
                }
              >
                Team
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link
                href="/contact"
                className={
                  isDarkTheme
                    ? "text-base leading-6 text-gray-500 hover:text-gray-200"
                    : "text-base leading-6 text-gray-500 hover:text-gray-900"
                }
              >
                Contact
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link
                href="/checkout/terms&conditions/tax"
                className={
                  isDarkTheme
                    ? "text-base leading-6 text-gray-500 hover:text-gray-200"
                    : "text-base leading-6 text-gray-500 hover:text-gray-900"
                }
              >
                Terms
              </Link>
            </div>
          </nav>
          <div className="flex justify-center mt-8 space-x-6">
            <Link
              href="/pageNotFound"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Facebook</span>
              <FacebookIcon />
            </Link>
            <Link
              href="/pageNotFound"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Instagram</span>
              <InstagramIcon />
            </Link>
            <Link
              href="/pageNotFound"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Twitter</span>
              <TwitterIcon />
            </Link>
            <Link
              href="/pageNotFound"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">GitHub</span>
              <TwitterIcon />
            </Link>
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
