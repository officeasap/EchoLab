import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

// SVG flag imports
import FlagEN from "svg-country-flags/svg/gb.svg";
import FlagCH from "svg-country-flags/svg/cn.svg";
import FlagIND from "svg-country-flags/svg/id.svg";
import FlagFR from "svg-country-flags/svg/fr.svg";

type Language = "EN" | "CH" | "IND" | "FR";

const languageMeta: Record<Language, { label: string; flag: string }> = {
  EN: { label: "EN", flag: FlagEN },
  IND: { label: "IND", flag: FlagIND },
  CH: { label: "中文", flag: FlagCH },
  FR: { label: "FR", flag: FlagFR },
};

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  const handleClick = (lang: Language) => {
    setLanguage(lang);
    setExpanded(false); // Collapse menu after picking
  };

  const visibleLanguages: Language[] = expanded
    ? ["EN", "IND", "CH", "FR"]
    : [language];

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 bg-card border border-border rounded-lg p-2 button-emboss transition-all duration-300
      flex gap-2 items-center
      ${expanded ? "flex-col-reverse" : "flex-col"}`}
    >
      {visibleLanguages.map((lang) => {
        const { label, flag } = languageMeta[lang];
        const isActive = language === lang;

        return (
          <Button
            key={lang}
            onClick={() => (expanded ? handleClick(lang) : setExpanded(true))}
            variant={isActive ? "default" : "ghost"}
            className={`flex items-center gap-2 text-sm px-3 py-1 rounded-md transition-all
              ${isActive
                ? "button-emboss bg-granite-button text-foreground"
                : "text-muted-foreground"
              }`}
          >
            <img
              src={flag}
              alt={`${label} flag`}
              className="w-5 h-5 rounded-sm shadow-sm"
            />
            <span>{label}</span>
          </Button>
        );
      })}
    </div>
  );
};

export default LanguageToggle;
