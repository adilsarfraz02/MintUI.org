"use server";
import { signOut } from "@/auth";
const Logout = () => {
//   const LogoutHandler = async () => {
//     await signOut();
//   };
  return (
    <button
      className="inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-none disabled:pointer-events-none bg
            disabled:opacity-50 frame px-4 py-2 relative
            h-10 w-full justify-start max-lg:hidden rounded-lg bg-background text-sm font-normal shadow-none
            lg:w-64"
            
    >
      <span className="inline-flex">Logout</span>
    </button>
  );
};
export default Logout;
