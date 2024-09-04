"use client";

import { ReactNode, RefObject, useEffect, useRef } from "react";

interface Props {
  className?: string;
  children: ReactNode;
  onClick: () => void;
  exceptionRef?: RefObject<HTMLElement>;
}

export const ClickOutside = ({
  children,
  className,
  exceptionRef,
  onClick,
}: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickListener = (event: MouseEvent) => {
      let clickedInside: null | boolean = false;
      if (exceptionRef) {
        clickedInside =
          (wrapperRef.current &&
            wrapperRef.current.contains(event.target as Node)) ||
          (exceptionRef.current && exceptionRef.current === event.target) ||
          (exceptionRef.current &&
            exceptionRef.current.contains(event.target as Node));
      } else {
        clickedInside =
          wrapperRef.current &&
          wrapperRef.current.contains(event.target as Node);
      }

      if (!clickedInside) onClick();
    };

    document.addEventListener("mousedown", handleClickListener);

    return () => {
      document.removeEventListener("mousedown", handleClickListener);
    };
  }, [exceptionRef, onClick]);

  return (
    <div className={`${className || ""}`} ref={wrapperRef}>
      {children}
    </div>
  );
};
