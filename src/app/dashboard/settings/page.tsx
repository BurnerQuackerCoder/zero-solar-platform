import React from "react";

export default function SettingsPage() {
  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white tracking-tight">System Settings</h2>
        <p className="text-slate-400">Manage your society profile, alert preferences, and account details.</p>
      </div>

      <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-8 text-center">
        <h3 className="text-lg font-medium text-white mb-2">Module Under Construction</h3>
        <p className="text-slate-400">
          The settings panel is currently being configured for Vikhroli Heights CHS. 
          Contact your account manager to update society details.
        </p>
      </div>
    </div>
  );
}