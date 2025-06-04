import ProcessSection from "@/components/sections/ProcessSection";
import PricingSection from "@/components/sections/PricingSection";
import PayoutsSection from "@/components/sections/PayoutsSection"; // Add this
import AppDownloadSection from "@/components/sections/AppDownloadSection"; // Add this

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <ProcessSection />
      <PricingSection />
      <PayoutsSection />
      <AppDownloadSection />
    </main>
  );
}