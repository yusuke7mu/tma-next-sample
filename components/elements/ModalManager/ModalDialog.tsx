import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import Button from "../button/Button";

type ModalDialogProps = {
  closeModal: () => void;
  title?: string;
  titleStyle?: string;
  confirm?: boolean;
  positiveLabel?: string;
  negativeLabel?: string;
  onPositiveClick?: () => void;
  onNegativeClick?: () => void;
  className?: string;
  children: ReactNode;
};

export default function ModalDialog({
  closeModal,
  title,
  titleStyle = "text-xl text-white font-bold",
  confirm = false,
  positiveLabel,
  negativeLabel,
  onPositiveClick,
  onNegativeClick,
  className = "bg-black p-8",
  children,
}: ModalDialogProps) {
  const { t } = useTranslation("common");
  const positiveText = positiveLabel ?? t("button.ok");
  const negativeText = negativeLabel ?? t("button.cancel");
  return (
    <div className={className}>
      <div className="flex justify-between items-center relative pc:min-w-[600px]">
        {title && <h2 className={titleStyle}>{title}</h2>}
        <button
          onClick={() => {
            closeModal();
          }}
          className="absolute right-0 rounded bg-[#16cdd4] w-8 h-8 hover:bg-opacity-80"
        >
          ×
        </button>
      </div>
      {children}
      {confirm && (
        <div className="flex justify-center pt-4">
          <Button onClick={closeModal}>{t("button.confirm")}</Button>
        </div>
      )}
      {(onPositiveClick || onNegativeClick) && (
        <div className="flex justify-center pt-4 gap-20">
          {onNegativeClick && (
            <Button className="bg-white min-w-[120px]" onClick={onNegativeClick}>
              {negativeText}
            </Button>
          )}
          {onPositiveClick && (
            <Button className="bg-white min-w-[120px]" onClick={onPositiveClick}>
              {positiveText}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
