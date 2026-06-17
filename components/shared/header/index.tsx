import Image from "next/image";
import Link from "next/link";

import { APP_NAME } from "@/lib/constants";

const Header = () => {
  return (
    <header className="w-full border-b border-gray-400 text-gray-700">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              priority={true}
              src="/find.png"
              width={48}
              height={48}
              alt={`${APP_NAME} logo`}
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
