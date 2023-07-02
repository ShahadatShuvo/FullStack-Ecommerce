import LoginForm from "@/components/Accounts/LoginForm";
import Navbar from "@/components/HomePage/Navbar";

function Account() {
  return (
    <div className="bg-white h-full">
      <Navbar />
      <div className="bg-gray-50 min-h-[50vh] text-center">
        Welcome to account
      </div>
    </div>
  );
}

export default Account;
