"use client";

import EmojiPicker, { theme } from "emoji-picker-react";
import { useTheme } from "next-themes";

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const IconPicker = ({ asChild, onChange, children }) => {
  const { resolvedTheme } = useTheme();
  const currentTheme = resolvedTheme || "light";

  // const theme = themeMap[currentTheme];
  return (
    <Popover>
      <PopoverTrigger asChild={asChild}>{children}</PopoverTrigger>
      <PopoverContent className="p-0 w-full border-none shadow-none">
        <EmojiPicker
          height={350}
          theme={currentTheme}
          onEmojiClick={(data) => onChange(data.emoji)}
        />
      </PopoverContent>
    </Popover>
  );
};

export default IconPicker;
