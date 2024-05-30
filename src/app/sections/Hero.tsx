"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex-col items-center flex justify-center overflow-hidden">
      <BackgroundCellCore />
      <Link
        href="/components"
        className="border-1.5 transition-all duration-250 gap-3 group dark:border-default-50 border-black text-default-50 mb-1 cursor-pointer rounded-3xl px-4 py-2 flex justify-between w-fit items-center !z-50 dark:bg-white bg-black"
      >
        <span> Explore All Componets</span>{" "}
        <span className="px-3 py-1 rounded-2xl dark:bg-black bg-white text-black dark:text-white translate-x-1 group-hover:translate-x-2 transition-all ease-in-out">
          <FaArrowRightLong />
        </span>
      </Link>
      <div className="relative z-50 mt-24 pointer-events-none select-none">
        <h1 className="max-md:text-4xl max-sm:text-4xl text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-100 from-neutral-600 to-zinc-900 dark:to-neutral-400 pointer-events-none">
          Animated Tailwind CSS &<br />
          framer motion UI Library
        </h1>
        <p className="px-40 max-md:px-20 max-sm:px-8 text-2xl mt-6 text-center line-clamp-3">
          Mint UI is a comprehensive and easy-to-use open-source UI component
          library ( powered by TailwindCSS) designed to enhance your
          productivity as a developer
        </p>
      </div>
    </div>
  );
};

const BackgroundCellCore = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const ref = useRef<any>(null);

  const handleMouseMove = (event: any) => {
    const rect = ref.current && ref.current.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  // random Colors

  const size = 300;
  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="min-h-screen w-full
       absolute inset-0"
    >
      <div className="absolute h-[100vh] inset-y-0 overflow-hidden">
        <div
          className={`absolute h-full w-full pointer-events-none -bottom-2 z-10 bg-fuchsia-700 backdrop-blur [mask-image:linear-gradient(to_bottom,transparent,black)]`}
        ></div>
        <div
          className="absolute inset-0 z-10 bg-transparent"
          style={{
            maskImage: `radial-gradient(
            ${size / 4}px circle at center,
           white, transparent
          )`,
            WebkitMaskImage: `radial-gradient(
          ${size / 4}px circle at center,
          white, transparent
        )`,
            WebkitMaskPosition: `${mousePosition.x - size / 2}px ${
              mousePosition.y - size / 2
            }px`,
            WebkitMaskSize: `${size}px`,
            maskSize: `${size}px`,
            pointerEvents: "none",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        >
          <Pattern cellClassName="border-zinc-500/20 relative z-[10]" />
        </div>
        <Pattern className="opacity-[0.5]" cellClassName="border-zinc-500/50" />
      </div>
    </div>
  );
};

const Pattern = ({
  className,
  cellClassName,
}: {
  className?: string;
  cellClassName?: string;
}) => {
  const x = new Array(47).fill(0);
  const y = new Array(30).fill(0);
  const matrix = x.map((_, i) => y.map((_, j) => [i, j]));
  const [clickedCell, setClickedCell] = useState<any>(null);

  return (
    <div className={cn("flex flex-row  relative z-30", className)}>
      {matrix.map((row, rowIdx) => (
        <div
          key={`matrix-row-${rowIdx}`}
          className="flex flex-col  relative z-20 border-b"
        >
          {row.map((column, colIdx) => {
            const controls = useAnimation();

            useEffect(() => {
              if (clickedCell) {
                const distance = Math.sqrt(
                  Math.pow(clickedCell[0] - rowIdx, 2) +
                    Math.pow(clickedCell[1] - colIdx, 2)
                );
                controls.start({
                  opacity: [0, 1 - distance * 0.1, 0],
                  transition: { duration: distance * 0.2 },
                });
              }
            }, [clickedCell]);

            return (
              <div
                key={`matrix-col-${colIdx}`}
                className={cn(
                  "bg-transparent border-l border-b border-zinc-900/40",
                  cellClassName
                )}
                onClick={() => setClickedCell([rowIdx, colIdx])}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  whileHover={{
                    opacity: [0, 1, 0.5],
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "backOut",
                  }}
                  animate={controls}
                  className="bg-zinc-900 h-12 w-12" //  rgba(14, 165, 233, 0.15) for a more subtle effect
                ></motion.div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};
