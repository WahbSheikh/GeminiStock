import { User, Bell, DollarSign, Moon, Shield, LogOut, Newspaper } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="max-w-3xl space-y-8 animate-in fade-in duration-500">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <section className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="p-6 border-b border-border flex items-center gap-4">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-2xl font-bold text-primary">
            JD
          </div>
          <div>
            <h2 className="text-xl font-bold">John Doe</h2>
            <p className="text-muted text-sm">Pro Member • Joined Jan 2024</p>
          </div>
          <button className="ml-auto text-sm border border-border px-4 py-2 rounded-lg hover:bg-white/5">
            Edit Profile
          </button>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-6">
        <Section title="Preferences">
          <SettingItem icon={DollarSign} title="Currency" value="USD ($)" />
          <SettingItem icon={Moon} title="Theme" value="Dark (System)" />
        </Section>

        <Section title="Notifications">
          <ToggleItem icon={Bell} title="Price Alerts" checked={true} />
          <ToggleItem icon={Newspaper} title="News Digest" checked={false} />
        </Section>

        <Section title="Security">
          <SettingItem icon={Shield} title="Password" value="••••••••" />
          <SettingItem icon={Shield} title="2FA Authentication" value="Enabled" />
        </Section>

        <button className="flex items-center gap-2 text-red-500 font-semibold hover:bg-red-500/10 px-4 py-3 rounded-lg w-full justify-center border border-red-500/20 transition-all">
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-muted uppercase tracking-wider">{title}</h3>
      <div className="bg-card border border-border rounded-xl divide-y divide-border">
        {children}
      </div>
    </div>
  );
}

function SettingItem({ icon: Icon, title, value }: any) {
  return (
    <div className="flex items-center justify-between p-4 hover:bg-white/5 cursor-pointer transition-colors">
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5 text-muted" />
        <span>{title}</span>
      </div>
      <div className="text-muted text-sm flex items-center gap-2">
        {value}
        <span className="text-lg leading-none">›</span>
      </div>
    </div>
  );
}

function ToggleItem({ icon: Icon, title, checked }: any) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5 text-muted" />
        <span>{title}</span>
      </div>
      <div className={`w-11 h-6 rounded-full p-1 cursor-pointer transition-colors ${checked ? 'bg-primary' : 'bg-zinc-700'}`}>
        <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${checked ? 'translate-x-5' : 'translate-x-0'}`} />
      </div>
    </div>
  );
}
