import { APP_NAME } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="p-5 text-center">
        {currentYear} {APP_NAME} &trade;.All Rights reserved
      </div>
    </footer>
  );
};

export default Footer;
