import { Navbar } from "@/components/shared/Navbar";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-32 max-w-4xl min-h-screen">
        <h1 className="text-3xl font-bold text-white mb-6">Terms & Conditions</h1>
        <p className="text-slate-400">
          At Zero Solar, we take your data privacy seriously. This document is currently being finalized by our legal team and will be updated shortly.
        </p>
      </div>
    </>
  );
}