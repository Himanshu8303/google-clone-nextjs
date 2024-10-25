import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

export default function HomeHeader() {
  return (
    <header className="flex justify-end p-5 text-sm">
      <div className="flex space-x-4 items-center">
        <Link href="https://mail.google.com" className="hover:underline">
          Gmail
        </Link>
        <Link href="https://image.google.com" className="hover:underline">
          Images
        </Link>
        <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2" />
        <Link href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com%2F&ec=GAZAmgQ&hl=en&ifkv=AcMMx-ejZeY442uewLene5ide7ng1I5lpZf0dGKhWK6CKtdAMQk6677RWbRKva11C3GabWoAOPABiQ&passive=true&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1916352178%3A1729855505648729&ddm=0">
        <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow">Sign in</button>
        </Link>
      </div>
    </header>
  );
}
