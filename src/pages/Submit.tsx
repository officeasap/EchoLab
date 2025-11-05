import { Button } from "@/components/ui/button";
import { MapPin, Truck, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Submit = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-engraved">
          {t.submit.title}
        </h1>
        <p className="text-center text-muted-foreground mb-8">{t.submit.subtitle}</p>

        <div className="space-y-8">
          <div className="bg-card p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold mb-6 text-engraved">{t.submit.title}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-ritual-gray" />
                <h3 className="text-xl font-bold mb-2 text-engraved">{t.submit.method1Title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{t.submit.method1Desc}</p>
                <Button className="button-emboss w-full">{t.submit.initiateButton}</Button>
              </div>
              <div className="text-center">
                <Truck className="w-12 h-12 mx-auto mb-4 text-ritual-gray" />
                <h3 className="text-xl font-bold mb-2 text-engraved">{t.submit.method2Title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{t.submit.method2Desc}</p>
                <Button className="button-emboss w-full">{t.submit.initiateButton}</Button>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 mx-auto mb-4 text-ritual-gray" />
                <h3 className="text-xl font-bold mb-2 text-engraved">{t.submit.method3Title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{t.submit.method3Desc}</p>
                <Button className="button-emboss w-full">{t.submit.initiateButton}</Button>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold mb-4 text-engraved">{t.submit.nextTitle}</h2>
            <div className="space-y-4">
              {[t.submit.step1, t.submit.step2, t.submit.step3, t.submit.step4].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-2xl font-bold text-ritual-gray">0{i+1}</div>
                  <p className="text-muted-foreground">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-muted p-6 rounded-lg">
            <h3 className="font-bold mb-3 text-engraved">{t.submit.securityTitle}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• {t.submit.security1}</li>
              <li>• {t.submit.security2}</li>
              <li>• {t.submit.security3}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submit;
