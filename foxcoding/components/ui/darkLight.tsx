'use client';
import React from "react";
import { useTheme } from "next-themes";
import Switch from "react-switch";
import { MoonIcon } from "@/components/ui/icons/moon";
import { SunIcon } from "@/components/ui/icons/sun";

export default function DarkLight() {
  const { setTheme } = useTheme();

  const [dark, setDark] = React.useState(true);
  const [mounted, setMounted] = React.useState(false);

  // Mount flag
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Set theme when `dark` changes (only after mounted)
  React.useEffect(() => {
    if (!mounted) return;
    setTheme(dark ? "dark" : "light");
  }, [dark, setTheme, mounted]);

  return (
    <div className="text-white flex-col space-y-5">
      <div>
        {/* Render the switch only after mount to avoid hydration mismatch */}
        {mounted && (
          <Switch
            checked={dark}
            onChange={() => setDark(!dark)}
            offColor="#22c55e"
            onColor="#afafb2"
            uncheckedIcon={
              <div className="flex items-center justify-center h-full text-yellow-400">
                <SunIcon />
              </div>
            }
            checkedIcon={
              <div className="flex items-center justify-center h-full text-blue-300">
                <MoonIcon />
              </div>
            }
            height={28}
            width={58}
            handleDiameter={24}
          />
        )}
      </div>
    </div>
  );
}
