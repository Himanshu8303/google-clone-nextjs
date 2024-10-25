import Link from 'next/link';
import CountryLookup from "./CountryLookup";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 text-sm text-gray-500 bg-[#f2f2f2] w-full">
      <div className="border-b px-8 py-3">
        <CountryLookup />
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0">
        <ul className="flex items-center space-x-6">
          {/* <li className="link">About</li>
          <li className="link">Advertising</li>
          <li className="link">Business</li>
          <li className="link">How Search works</li> */}
          <li className="link">
          <Link href="https://about.google/intl/ALL_in/">About</Link>
          </li>
          <li className="link">
          <Link href="https://ads.google.com/intl/en_in/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">Advertising</Link>
          </li>
          <li className="link">
          <Link href="https://www.google.com/intl/en_in/business/">Business</Link>
          </li>
          <li className="link">
          <Link href="https://www.google.com/search/howsearchworks/?fg=1">How Search works</Link>
          </li>
        </ul>
        
        <ul className="flex items-center space-x-6">
          <li className="link">
          <Link href="https://policies.google.com/privacy?hl=en-IN&fg=1">Privacy</Link>
          </li>
          <li className="link">
          <Link href="https://policies.google.com/terms?hl=en-IN&fg=1">Terms</Link>
          </li>
          <li className="link">
          <Link href="https://www.google.com/preferences?hl=en-IN&fg=1">Settings</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
