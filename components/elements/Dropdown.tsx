import classNames from "classnames";
import { useEffect, useRef, useState } from "react";

type DropdownProps = {
  options: string[];
  onSelect?: (option: string) => void;
  current?: string;
  placeholder?: string;
  prefix?: string;
  suffix?: string;
  className?: string; // bgColor border width
  textStyle?: string;
  optionStyle?: string;
};

// コンボボックス
// onSelectを渡さなければdisabled
// currentがない状態ではplaceholderが表示される
export default function Dropdown({
  options,
  onSelect,
  current,
  placeholder = options[0],
  prefix = "",
  suffix = "",
  className = "bg-white border-black border-2 rounded-lg w-[200px]",
  textStyle = "text-left",
  optionStyle = "hover:bg-gray-300",
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(placeholder);
  // 外側をクリックした時用にオプションを閉じる関数を登録
  const insideRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const self = insideRef.current;
    if (!self) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (!self?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [insideRef]);

  const handleSelect = (option: string) => {
    if (!onSelect) return;
    if (!current) setSelected(option);
    onSelect(option);
    setIsOpen(false);
  };
  return (
    <div
      className={classNames("relative", className, !onSelect && "disabled")}
      ref={insideRef}
    >
      <button
        onClick={onSelect ? () => setIsOpen(!isOpen) : undefined}
        className={classNames("w-full h-full p-2", textStyle)}
      >
        {prefix + (current || selected) + suffix}
      </button>
      {isOpen && (
        <div
          className={classNames("absolute z-20 mt-2 overflow-auto", className)}
        >
          {options
            .filter((option) => {
              if (current) {
                return option !== current;
              } else {
                return option !== selected;
              }
            })
            .map((option) => (
              <div
                key={option}
                className={classNames(
                  "w-full p-2 cursor-pointer",
                  optionStyle,
                  textStyle
                )}
                onClick={() => handleSelect(option)}
              >
                {prefix + option + suffix}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
