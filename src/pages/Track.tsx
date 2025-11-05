import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const Track = () => {
  const { t } = useLanguage();
  const [rtcCode, setRtcCode] = useState("");
  const [facilitationCode, setFacilitationCode] = useState("");
  const [trackingData, setTrackingData] = useState<any>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!rtcCode || !facilitationCode) {
      toast.error(t.track.notFound);
      return;
    }

    const mockData = {
      status: t.track.status2,
      progress: 60,
      estimatedCompletion: "14 hours",
      stages: [
        { name: t.track.status1, completed: true, time: "48h ago" },
        { name: t.track.status2, completed: true, time: "46h ago" },
        { name: t.track.status3, completed: false, time: "In Progress" },
        { name: t.track.status4, completed: false, time: "Pending" },
      ],
    };

    setTrackingData(mockData);
    toast.success("Tracking data retrieved");
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-engraved">{t.track.title}</h1>
        <p className="text-center text-muted-foreground mb-8">{t.track.subtitle}</p>

        <form onSubmit={handleTrack} className="mb-8 bg-card p-8 rounded-lg border border-border">
          <div className="space-y-6">
            <div>
              <Label htmlFor="rtcCode" className="text-lg mb-2 block">RTC Tracking Code</Label>
              <Input id="rtcCode" value={rtcCode} onChange={(e) => setRtcCode(e.target.value)} placeholder="RTC-XXXXXX-XXXX" className="text-lg" />
            </div>
            <div>
              <Label htmlFor="facilitationCode" className="text-lg mb-2 block">{t.track.facilitationCode}</Label>
              <Input id="facilitationCode" value={facilitationCode} onChange={(e) => setFacilitationCode(e.target.value)} placeholder="FC-XXXXXX-XXXX" className="text-lg" />
            </div>
            <Button type="submit" className="w-full button-emboss text-lg py-6">{t.track.trackButton}</Button>
          </div>
        </form>

        {trackingData && (
          <div className="space-y-6">
            <div className="bg-card p-8 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-engraved">{t.track.statusTitle}</h2>
              <p className="text-xl text-ritual-gray mt-1">{trackingData.status}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Track;
