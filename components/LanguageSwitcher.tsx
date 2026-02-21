"use client";

import { useEffect, useState } from "react";
import { Languages, X } from "lucide-react";

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages: string;
            autoDisplay: boolean;
          },
          element: string
        ) => void;
      };
    };
    googleTranslateElementInit: () => void;
  }
}

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Load Google Translate script
    if (!document.getElementById("google-translate-script")) {
      window.googleTranslateElementInit = () => {
        if (!window.google?.translate) return;

        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      };

      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;

      document.body.appendChild(script);
    }

    // Hide Google top banner repeatedly (Google re-injects it)
    const interval = setInterval(() => {
      const banner = document.querySelector(
        "iframe.goog-te-banner-frame"
      ) as HTMLElement;

      if (banner) banner.style.display = "none";

      document.body.style.top = "0px";
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const changeLanguage = (langCode: string) => {
    let attempts = 0;

    const tryChange = () => {
      const combo = document.querySelector(
        ".goog-te-combo"
      ) as HTMLSelectElement;

      if (combo) {
        combo.value = langCode;
        combo.dispatchEvent(new Event("change"));
        setIsOpen(false);
      } else if (attempts < 10) {
        attempts++;
        setTimeout(tryChange, 300);
      }
    };

    tryChange();
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110"
        aria-label="Change Language"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Languages className="h-6 w-6" />}
      </button>

      {/* Language Popup */}
      <div
        className={`fixed bottom-20 right-6 z-50 w-48 rounded-lg bg-black p-4 shadow-xl border border-white/10 transition-all ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        <div className="flex flex-col gap-2">
          <button
            onClick={() => changeLanguage("en")}
            className="rounded-md px-4 py-2 text-sm text-white hover:bg-white/10 text-left"
          >
            English
          </button>
          <button
            onClick={() => changeLanguage("hi")}
            className="rounded-md px-4 py-2 text-sm text-white hover:bg-white/10 text-left"
          >
            Hindi (हिंदी)
          </button>
        </div>

        {/* Global styles to hide Google UI */}
        <style jsx global>{`
          iframe.goog-te-banner-frame,
          .goog-te-banner-frame.skiptranslate {
            display: none !important;
          }

          body {
            top: 0 !important;
            position: static !important;
          }

          .goog-logo-link,
          .goog-te-gadget span {
            display: none !important;
          }

          .goog-te-gadget {
            font-size: 0px !important;
          }
        `}</style>
      </div>
    </>
  );
}
