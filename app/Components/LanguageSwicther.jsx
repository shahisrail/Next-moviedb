"use client";

import Image from "next/image";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  console.log(pathname);

  const languages = [
    {
      code: "en",
      language: "English",
      imageSrc: "https://i.postimg.cc/Y23VBvty/download.jpg",
    },
    {
      code: "bn",
      language: "Bangla",
      imageSrc: "/bd.png",
    },
  ];
  const found = languages.find((lang) => pathname.includes(lang.code));
  const [selectedLanguage, setSelectedLanguage] = useState(
    found ?? languages[0]
  );
  const [showManu, setShowManu] = useState(false);

  const handleLanguageChange = (lang) => {
    const newLanguage = languages.find((l) => l.code === lang);
    setSelectedLanguage(newLanguage);
    setShowManu(false);
    router.push(`/${lang}`);
  };

  return (
    <div className="flex gap-4 items-center">
      <div className="relative">
        <button
          className="flex items-center gap-2"
          onClick={() => setShowManu(!showManu)}
        >
          <Image
            className="max-w-8"
            src={selectedLanguage.imageSrc}
            alt={selectedLanguage.language}
            height={100}
            width={165}
          />
          {selectedLanguage.language}
        </button>
        {showManu && (
          <div className="absolute right-0 top-full mt-2 w-40 rounded-md bg-white text-black p-2 z-10 shadow-lg">
            {languages.map((entry) => (
              <li
                key={entry.code}
                onClick={() => handleLanguageChange(entry.code)}
                className="flex items-center gap-2 p-2 rounded-md cursor-pointer dark:hover:bg-gray-100"
              >
                <Image
                  className="max-w-8"
                  src={entry.imageSrc}
                  alt={entry.language}
                  height={100}
                  width={165}
                />
                {entry.language}
              </li>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
