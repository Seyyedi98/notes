"use client";

import { useEffect, useState } from "react";
import { SettingsModal } from "../modals/SettingModal";
import CoverImageModal from "../modals/CoverImageModal";

export const ModalProvider = () => {
  // To prevent hydration.
  // useEffect makes sure this component won't mounted in server
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return;

  return (
    <>
      <SettingsModal />
      <CoverImageModal />
    </>
  );
};

// // creating new modal \\
// 1. define global state in hooks
// 2. define modal in modals
// 3. add it here in procides
