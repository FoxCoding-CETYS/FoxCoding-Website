'use client';
import React from "react";
import { useTheme } from "next-themes";
import Switch from 'react-switch';
import { MoonIcon } from "@/components/ui/icons/moon";
import { SunIcon } from "@/components/ui/icons/sun";

export default function DarkLight () {
    const { setTheme }= useTheme()
    const [Dark, setDark] = React.useState(true)
    React.useEffect(() => {
        const interval = setInterval(() => {
            if (Dark) {
                setTheme('dark')
            } else {
                setTheme('light')
            }
          }, 180);
        return () => clearInterval(interval);
    },[Dark])
    return (
        <div className="text-white flex-col space-y-5">
            <div>
                 <Switch
        checked={Dark}
        onChange={() => setDark(!Dark)}
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
            </div>
        </div>
    )
}