import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const Fiat = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    accountName: "",
    bankName: "",
    accountNumber: "",
    swiftCode: "",
    iban: "",
    currency: "",
    country: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const required = [
      formData.accountName,
      formData.bankName,
      formData.swiftCode,
      formData.currency,
      formData.country,
    ];

    if (required.some((field) => !field)) {
      toast.error(t.fiat.errorMessage);
      return;
    }

    try {
      const response = await fetch("/api/send-bank-details", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Server error");
      }

      toast.success(t.fiat.successMessage);
    } catch (err) {
      console.error("Submission failed:", err);
      toast.error("Failed to send bank details. Please try again.");
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-engraved">
          {t.fiat.title}
        </h1>
        <p className="text-center text-muted-foreground mb-8">
          {t.fiat.subtitle}
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-card p-8 rounded-lg border border-border"
        >
          <div>
            <Label htmlFor="accountName">{t.fiat.accountName}</Label>
            <Input
              id="accountName"
              value={formData.accountName}
              onChange={(e) =>
                setFormData({ ...formData, accountName: e.target.value })
              }
              placeholder={t.fiat.accountNamePlaceholder}
              className="mt-2"
              required
            />
          </div>

          <div>
            <Label htmlFor="bankName">{t.fiat.bankName}</Label>
            <Input
              id="bankName"
              value={formData.bankName}
              onChange={(e) =>
                setFormData({ ...formData, bankName: e.target.value })
              }
              placeholder={t.fiat.bankNamePlaceholder}
              className="mt-2"
              required
            />
          </div>

          <div>
            <Label htmlFor="country">{t.fiat.country}</Label>
            <Select
              value={formData.country}
              onValueChange={(value) =>
                setFormData({ ...formData, country: value })
              }
            >
              <SelectTrigger className="mt-2">
                <SelectValue placeholder={t.fiat.countryPlaceholder} />
              </SelectTrigger>
              <SelectContent>
                {[
                  { code: "US", name: "United States" },
                  { code: "UK", name: "United Kingdom" },
                  { code: "FR", name: "France" },
                  { code: "DE", name: "Germany" },
                  { code: "ID", name: "Indonesia" },
                  { code: "CN", name: "China" },
                  { code: "IN", name: "India" },
                  { code: "JP", name: "Japan" },
                  { code: "KR", name: "South Korea" },
                  { code: "VN", name: "Vietnam" },
                  { code: "KH", name: "Cambodia" },
                  { code: "SA", name: "Saudi Arabia" },
                  { code: "BR", name: "Brazil" },
                  { code: "NG", name: "Nigeria" },
                  { code: "ZA", name: "South Africa" },
                  { code: "CA", name: "Canada" },
                  { code: "AU", name: "Australia" },
                  { code: "RU", name: "Russia" },
                  { code: "MX", name: "Mexico" },
                  { code: "AR", name: "Argentina" },
                  { code: "CL", name: "Chile" },
                  { code: "CO", name: "Colombia" },
                  { code: "PE", name: "Peru" },
                  { code: "VE", name: "Venezuela" },
                  { code: "EG", name: "Egypt" },
                  { code: "AE", name: "United Arab Emirates" },
                  { code: "QA", name: "Qatar" },
                  { code: "OM", name: "Oman" },
                  { code: "KW", name: "Kuwait" },
                  { code: "BH", name: "Bahrain" },
                  { code: "JO", name: "Jordan" },
                  { code: "LB", name: "Lebanon" },
                  { code: "IQ", name: "Iraq" },
                  { code: "MA", name: "Morocco" },
                  { code: "DZ", name: "Algeria" },
                  { code: "PH", name: "Philippines" },
                  { code: "TH", name: "Thailand" },
                  { code: "MY", name: "Malaysia" },
                  { code: "PK", name: "Pakistan" },
                ].map(({ code, name }) => (
                  <SelectItem key={code} value={code}>
                    {name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="swiftCode">{t.fiat.swift}</Label>
            <Input
              id="swiftCode"
              value={formData.swiftCode}
              onChange={(e) =>
                setFormData({ ...formData, swiftCode: e.target.value })
              }
              placeholder={t.fiat.swiftPlaceholder}
              className="mt-2"
              required
            />
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-bold mb-2 text-engraved">
              {t.fiat.securityTitle}
            </h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• {t.fiat.security1}</li>
              <li>• {t.fiat.security2}</li>
            </ul>
          </div>

          <Button
            type="submit"
            className="w-full button-emboss text-lg py-6"
          >
            {t.fiat.submitButton}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Fiat;
