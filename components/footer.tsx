import Link from "next/link";

interface FooterProps {
  developerName: string;
  developerUrl: string;
}

export default function Footer({ developerName, developerUrl }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-4 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-2 sm:mb-0">
            © {currentYear} All rights reserved.
          </p>
          <p className="text-sm text-gray-600">
            Developed by{" "}
            <Link
              href={developerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {developerName}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
