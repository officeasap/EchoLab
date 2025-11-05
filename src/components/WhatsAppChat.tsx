import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhatsAppChat = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useLanguage();
  const whatsappNumber = "23777345967"; // EchoLAB encrypted support

  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative bg-granite-button button-emboss p-4 rounded-full transition-all duration-300 hover:scale-110"
        aria-label={t.whatsapp.tooltip}
      >
        <MessageCircle
          size={28}
          className={`transition-all ${
            isHovered ? "text-ritual-gray" : "text-green-500"
          }`}
        />
        {isHovered && (
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-card rounded-lg text-sm whitespace-nowrap button-emboss">
            {t.whatsapp.tooltip}
          </div>
        )}
      </button>
    </div>
  );
};

export default WhatsAppChat;

