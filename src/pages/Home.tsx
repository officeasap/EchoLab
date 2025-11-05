import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Zap, Lock } from "lucide-react";
import BannerCarousel from "@/components/BannerCarousel";
import { useLanguage } from "@/contexts/LanguageContext";

const Home = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <BannerCarousel />
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-engraved">
          {t.home.title}
        </h1>
        <p className="text-2xl md:text-3xl mb-4 text-granite-text">
          {t.home.subtitle}
        </p>
        <p className="text-xl mb-12 text-muted-foreground max-w-2xl mx-auto">
          {t.home.tagline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/register">
            <Button className="button-emboss text-lg px-8 py-6">
              {t.home.beginRegistration}
            </Button>
          </Link>
          <Link to="/track">
            <Button variant="secondary" className="button-emboss text-lg px-8 py-6">
              {t.home.trackStatus}
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-lg border border-border">
            <Shield className="w-12 h-12 mb-4 text-ritual-gray" />
            <h3 className="text-2xl font-bold mb-3 text-engraved">{t.home.feature1Title}</h3>
            <p className="text-muted-foreground">
              {t.home.feature1Desc}
            </p>
          </div>
          <div className="bg-card p-8 rounded-lg border border-border">
            <Zap className="w-12 h-12 mb-4 text-ritual-gray" />
            <h3 className="text-2xl font-bold mb-3 text-engraved">{t.home.feature2Title}</h3>
            <p className="text-muted-foreground">
              {t.home.feature2Desc}
            </p>
          </div>
          <div className="bg-card p-8 rounded-lg border border-border">
            <Lock className="w-12 h-12 mb-4 text-ritual-gray" />
            <h3 className="text-2xl font-bold mb-3 text-engraved">{t.home.feature3Title}</h3>
            <p className="text-muted-foreground">
              {t.home.feature3Desc}
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center text-engraved">{t.home.processTitle}</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            { step: "01", title: t.home.step1Title, desc: t.home.step1Desc },
            { step: "02", title: t.home.step2Title, desc: t.home.step2Desc },
            { step: "03", title: t.home.step3Title, desc: t.home.step3Desc },
            { step: "04", title: t.home.step4Title, desc: t.home.step4Desc },
            { step: "05", title: t.home.step5Title, desc: t.home.step5Desc },
          ].map((item) => (
            <div key={item.step} className="flex gap-6 bg-card p-6 rounded-lg border border-border">
              <div className="text-4xl font-bold text-ritual-gray">{item.step}</div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-engraved">{item.title}</h4>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6 text-engraved">{t.home.ctaTitle}</h2>
        <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
          {t.home.ctaDesc}
        </p>
        <Link to="/register">
          <Button className="button-emboss text-lg px-12 py-6">
            {t.home.ctaButton}
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
