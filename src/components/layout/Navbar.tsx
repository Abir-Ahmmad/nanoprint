import Link from "next/link";
import SearchBar from "../Products/SearchBar";
import MobileMenuToggle from "./MobileMenuToggle";
import CartButton from "./CartButton";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <section>
      <header className="sticky top-0 z-60 bg-surface">
        <nav className="flex items-center justify-between w-full h-12 md:h-15 border-b border-line px-5 shadow">
          <div>
            <Link
              href="/"
              className="uppercase hidden md:flex text-[18px] md:text-2xl font-semibold"
            >
              Nano Print
            </Link>
            <Link
              href="/"
              className="uppercase md:hidden text-[18px] md:text-2xl font-semibold"
            >
              Nprint
            </Link>
          </div>

          <div className="w-[50%] hidden lg:flex">
            <SearchBar />
          </div>

          <div className="hidden lg:flex items-center gap-5">
            
            <ThemeToggle />
            

            <CartButton />

            <button className="py-2 px-4 bg-[#4F46E5] rounded-lg text-white hover:cursor-pointer">
              <Link href="#">Sign Up</Link>
            </button>
          </div>

          <div className="flex items-center justify-between w-[75%] gap-2 lg:hidden">
            <div className="w-[65%] md:w-[85%] lg:hidden">
              <SearchBar />
            </div>
            <ThemeToggle />
            <CartButton />
            <MobileMenuToggle />
          </div>
        </nav>
      </header>
    </section>
  );
}
