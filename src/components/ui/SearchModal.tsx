"use client";
import React, { useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Kbd,
  Code,
} from "@nextui-org/react";

export default function SearchModal() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "/") {
        onOpen();
      }
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Button
        onPress={onOpen}
        className="inline-flex items-center whitespace-nowrap transition-colors 
      focus-visible:outline-none disabled:pointer-events-none  bg
      disabled:opacity-50 frame px-4 py-2 relative
       h-10 w-full justify-start max-lg:hidden rounded-lg bg-background text-sm font-normal shadow-none
         lg:w-64"
      >
        <span className="hidden lg:inline-flex">Search documentation...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd
          className="pointer-events-none absolute right-[0.3rem] top-[0.5rem] h-5 select-none
         items-center gap-1 rounded-md border frame  px-2 font-mono text-[10px] font-medium backdrop-blur-2xl"
        >
          <span className="text-xs pr-0.5">⌘</span>/
        </kbd>
      </Button>
      <Modal
        hideCloseButton
        className=" rounded-xl frame z-[10000] !p-0"
        size="2xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="relative !p-0">
                <div className="relative mt-3">
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-transparent focus:ring-pink-500 outline-none"
                    placeholder="Search documentation..."
                  />{" "}
                  <Code
                    aria-pressed="true"
                    onClick={onClose}
                    className="absolute frame backdrop-blur-2xl cursor-pointer right-[0.5rem] top-[0.4rem]"
                  >
                    Esc
                  </Code>
                </div>
                <hr className="!border-[1px] !h-0 frame" />
                <div className="w-full h-24 "></div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
