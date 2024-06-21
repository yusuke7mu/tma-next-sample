import classNames from "classnames";

export default function TextField({
  onChange,
  type = "text",
  placeholder = "入力してください",
  value,
  error,
  className = "focus:outline-none focus:ring-2 focus ring-yellow-500",
  disabled = false,
}: {
  type?: "text" | "number";
  onChange: (value: any) => void;
  placeholder?: string;
  value?: any;
  error?: string;
  className?: string;
  disabled?: boolean;
}) {
  function onChangeText(value: any) {
    onChange(type == "text" ? value : Number(value));
  }

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onChangeText(e.target.value);
        }}
        className={classNames(
          className,
          "p-2 w-full",
          type === "number" && "text-right"
        )}
        disabled={disabled}
      />
      {error && <p>{error}</p>}
    </>
  );
}
