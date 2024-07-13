import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import React from "react";
import { RxGear, RxExternalLink } from "react-icons/rx";
import SwitchControl from "../ui/SwitchControl";
import { KeyExtensionStatus } from "../../data/storage-key";
import { ThemeSwitcher } from "./ThemeSwitcher";
import HorizontalLine from "../ui/HorizonLine";

function ExtensionSetting() {
  return (
    <Popover placement="bottom" offset={8}>
      <PopoverTrigger>
        <div className="cursor-pointer">
          <RxGear size={24} />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[240px] dark:border-1 dark:border-content4">
        <div className="flex w-full flex-col">
          <SwitchControl
            label="Extension Enabled"
            storageKey={KeyExtensionStatus}
            color="success"
          />
          <ThemeSwitcher />
          <HorizontalLine />
          <a
            href="https://github.com/sapondanaisriwan/Cool-Mango-CMU/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              fullWidth
              color=""
              className="items-center justify-between px-3 py-7"
            >
              <span className="text-medium">Help & Feedback</span>
              <RxExternalLink size={16} />
            </Button>
          </a>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default ExtensionSetting;
