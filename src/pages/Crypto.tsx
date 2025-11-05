import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Bitcoin, Coins } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Crypto = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    walletAddress: "",
    currency: "",
    networkType: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.walletAddress || !formData.currency || !formData.networkType) {
      toast.error(t.crypto.errorMessage);
      return;
    }

    toast.success(t.crypto.successMessage);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-engraved">
          {t.crypto.title}
        </h1>
        <p className="text-center text-muted-foreground mb-8">{t.crypto.subtitle}</p>

        <div className="mb-8 bg-card p-6 rounded-lg border border-border">
          <div className="flex items-center gap-4 mb-4">
            <Bitcoin className="w-12 h-12 text-ritual-gray" />
            <div>
              <h2 className="text-xl font-bold text-engraved">{t.crypto.supportedTitle}</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {["BTC", "ETH", "USDT", "USDC", "XRP", "LTC", "ADA", "DOT"].map((crypto) => (
              <div key={crypto} className="bg-background p-3 rounded-lg text-center">
                <Coins className="w-6 h-6 mx-auto mb-1 text-ritual-gray" />
                <span className="text-sm font-bold text-granite-text">{crypto}</span>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg border border-border">
          <div>
            <Label htmlFor="currency">{t.crypto.currencyLabel}</Label>
            <Select
              value={formData.currency}
              onValueChange={(value) => setFormData({ ...formData, currency: value })}
            >
              <SelectTrigger className="mt-2">
                <SelectValue placeholder={t.crypto.currencyPlaceholder} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="BTC">Bitcoin (BTC)</SelectItem>
                <SelectItem value="ETH">Ethereum (ETH)</SelectItem>
                <SelectItem value="USDT">Tether (USDT)</SelectItem>
                <SelectItem value="USDC">USD Coin (USDC)</SelectItem>
                <SelectItem value="XRP">Ripple (XRP)</SelectItem>
                <SelectItem value="LTC">Litecoin (LTC)</SelectItem>
                <SelectItem value="ADA">Cardano (ADA)</SelectItem>
                <SelectItem value="DOT">Polkadot (DOT)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="networkType">{t.crypto.networkLabel}</Label>
            <Select
              value={formData.networkType}
              onValueChange={(value) => setFormData({ ...formData, networkType: value })}
            >
              <SelectTrigger className="mt-2">
                <SelectValue placeholder={t.crypto.networkPlaceholder} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mainnet">Mainnet</SelectItem>
                <SelectItem value="erc20">ERC-20 (Ethereum)</SelectItem>
                <SelectItem value="trc20">TRC-20 (Tron)</SelectItem>
                <SelectItem value="bep20">BEP-20 (Binance Smart Chain)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="walletAddress">{t.crypto.walletLabel}</Label>
            <Input
              id="walletAddress"
              value={formData.walletAddress}
              onChange={(e) => setFormData({ ...formData, walletAddress: e.target.value })}
              placeholder={t.crypto.walletPlaceholder}
              className="mt-2 font-mono"
              required
            />
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-bold mb-2 text-engraved">{t.crypto.securityTitle}</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• {t.crypto.security1}</li>
              <li>• {t.crypto.security2}</li>
              <li>• {t.crypto.security3}</li>
            </ul>
          </div>

          <Button type="submit" className="w-full button-emboss text-lg py-6">
            {t.crypto.submitButton}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Crypto;
