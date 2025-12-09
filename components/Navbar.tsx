import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5 transition-all duration-300">
      <Link href="/" className="transition-transform hover:scale-105">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="relative regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all duration-300 group">
            {link.label}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-50 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button 
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden transition-transform hover:scale-110"
      />
    </nav>
  )
}

export default Navbar