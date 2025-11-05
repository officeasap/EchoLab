import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { MessageCircle, Mail, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Support = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rtcCode: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.message) {
      toast.error(t.support.errorMessage);
      return;
    }

    try {
      await fetch("/api/send-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "support",
          payload: formData,
        }),
      });

      toast.success(t.support.successMessage);
      setFormData({
        name: "",
        email: "",
        rtcCode: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      toast.error("Failed to submit inquiry.");
    }
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/23777345967", "_blank");
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-engraved">
          {t.support.title}
        </h1>
        <p className="text-center text-muted-foreground mb-8">
          {t.support.subtitle}
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-card p-6 rounded-lg border border-border text-center">
            <MessageCircle className="w-12 h-12 mx-auto mb-3 text-ritual-gray" />
            <h3 className="text-lg font-bold mb-2 text-engraved">
              {t.support.whatsappTitle}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {t.support.whatsappDesc}
            </p>
            <Button onClick={handleWhatsApp} className="button-emboss w-full">
              {t.support.whatsappButton}
            </Button>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border text-center">
            <Mail className="w-12 h-12 mx-auto mb-3 text-ritual-gray" />
            <h3 className="text-lg font-bold mb-2 text-engraved">
              {t.support.formTitle}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {t.support.formDesc}
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border text-center">
            <Shield className="w-12 h-12 mx-auto mb-3 text-ritual-gray" />
            <h3 className="text-lg font-bold mb-2 text-engraved">
              {t.support.privacyTitle}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t.support.privacyDesc}
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-card p-8 rounded-lg border border-border space-y-6"
        >
          <h2 className="text-2xl font-bold mb-6 text-engraved">
            {t.support.formTitle}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name">{t.support.name}</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder={t.support.namePlaceholder}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="email">{t.support.email}</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder={t.support.emailPlaceholder}
                className="mt-2"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="rtcCode">{t.support.rtcCode}</Label>
              <Input
                id="rtcCode"
                value={formData.rtcCode}
                onChange={(e) =>
                  setFormData({ ...formData, rtcCode: e.target.value })
                }
                placeholder={t.support.rtcCodePlaceholder}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="subject">{t.support.subject}</Label>
              <Input
                id="subject"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                placeholder={t.support.subjectPlaceholder}
                className="mt-2"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="message">{t.support.message}</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder={t.support.messagePlaceholder}
              className="mt-2 min-h-[150px]"
              required
            />
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-bold mb-2 text-engraved">
              {t.support.guidelinesTitle}
            </h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• {t.support.guideline1}</li>
              <li>• {t.support.guideline2}</li>
              <li>• {t.support.guideline3}</li>
            </ul>
          </div>

          <Button type="submit" className="w-full button-emboss text-lg py-6">
            {t.support.submitButton}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Support;
