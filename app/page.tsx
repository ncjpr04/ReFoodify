import { LandingPageComponent } from "@/components/landing-page";
import Navbar from "@/components/navbar"; // Changed to default import
import { Toaster } from 'sonner'; // Importing Toaster from sonner

export default function Home() {
  return (
    <div className="w-full lg:px-10 px-5 flex justify-center items-center overflow-hidden">
      {/* This is where the Toast notifications will be displayed */}
      <Toaster />
      <Navbar />
      <LandingPageComponent />
    </div>
  );
}
