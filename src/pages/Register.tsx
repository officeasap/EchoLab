import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Register = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    packageId: "",
    estimatedValue: "",
    payoutMethod: "bank",
    bankAccount: "",
    swiftCode: "",
    accountName: "",
    cryptoWallet: "",
    cryptoCurrency: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.packageId || !formData.estimatedValue) {
      toast.error(t.register.errorMessage);
      return;
    }

    if (formData.payoutMethod === "bank" && (!formData.bankAccount || !formData.swiftCode || !formData.accountName)) {
      toast.error(t.register.errorMessage);
      return;
    }

    if (formData.payoutMethod === "crypto" && (!formData.cryptoWallet || !formData.cryptoCurrency)) {
      toast.error(t.register.errorMessage);
      return;
    }

    // Simulate registration
    toast.success(t.register.successMessage);
    setTimeout(() => {
      navigate("/submit");
    }, 2000);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-engraved">
          {t.register.title}
        </h1>
        <p className="text-center text-muted-foreground mb-8">{t.register.subtitle}</p>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg border border-border">
          <div>
            <Label htmlFor="fullName">{t.register.fullName}</Label>
            <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="mt-2"
              required
            />
          </div>

          <div>
            <Label htmlFor="email">{t.register.email}</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-2"
              required
            />
          </div>

          <div>
            <Label htmlFor="phone">{t.register.phone}</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="mt-2"
              required
            />
          </div>

          <div>
            <Label htmlFor="packageId">{t.register.packageId}</Label>
            <Input
              id="packageId"
              value={formData.packageId}
              onChange={(e) => setFormData({ ...formData, packageId: e.target.value })}
              className="mt-2"
              required
            />
          </div>

          <div>
            <Label htmlFor="estimatedValue">{t.register.estimatedValue}</Label>
            <Input
              id="estimatedValue"
              type="number"
              value={formData.estimatedValue}
              onChange={(e) => setFormData({ ...formData, estimatedValue: e.target.value })}
              className="mt-2"
              required
            />
          </div>

          <div className="space-y-4">
            <Label>{t.register.payoutMethod}</Label>
            <RadioGroup
              value={formData.payoutMethod}
              onValueChange={(value) => setFormData({ ...formData, payoutMethod: value })}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bank" id="bank" />
                <Label htmlFor="bank">{t.register.bankTransfer}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="crypto" id="crypto" />
                <Label htmlFor="crypto">{t.register.cryptoWallet}</Label>
              </div>
            </RadioGroup>
          </div>

          {formData.payoutMethod === "bank" && (
            <div className="space-y-4 p-4 bg-background rounded-lg">
              <div>
                <Label htmlFor="bankAccount">{t.fiat.iban}</Label>
                <Input
                  id="bankAccount"
                  value={formData.bankAccount}
                  onChange={(e) => setFormData({ ...formData, bankAccount: e.target.value })}
                  className="mt-2"
                  required
                />
              </div>
              <div>
                <Label htmlFor="swiftCode">{t.fiat.swift}</Label>
                <Input
                  id="swiftCode"
                  value={formData.swiftCode}
                  onChange={(e) => setFormData({ ...formData, swiftCode: e.target.value })}
                  className="mt-2"
                  required
                />
              </div>
              <div>
                <Label htmlFor="accountName">{t.fiat.accountName}</Label>
                <Input
                  id="accountName"
                  value={formData.accountName}
                  onChange={(e) => setFormData({ ...formData, accountName: e.target.value })}
                  className="mt-2"
                  required
                />
              </div>
            </div>
          )}

          {formData.payoutMethod === "crypto" && (
            <div className="space-y-4 p-4 bg-background rounded-lg">
              <div>
                <Label htmlFor="cryptoWallet">{t.crypto.walletLabel}</Label>
                <Input
                  id="cryptoWallet"
                  value={formData.cryptoWallet}
                  onChange={(e) => setFormData({ ...formData, cryptoWallet: e.target.value })}
                  className="mt-2"
                  required
                />
              </div>
              <div>
                <Label htmlFor="cryptoCurrency">{t.crypto.currencyLabel}</Label>
                <Input
                  id="cryptoCurrency"
                  value={formData.cryptoCurrency}
                  onChange={(e) => setFormData({ ...formData, cryptoCurrency: e.target.value })}
                  className="mt-2"
                  required
                />
              </div>
            </div>
          )}

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-bold mb-2 text-engraved">{t.register.termsTitle}</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• {t.register.term1}</li>
              <li>• {t.register.term2}</li>
            </ul>
          </div>

          <Button type="submit" className="w-full button-emboss text-lg py-6">
            {t.register.submitButton}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
