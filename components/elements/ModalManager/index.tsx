import classNames from "classnames";
import {
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  cloneElement,
  useEffect,
  useState,
} from "react";
import ReactDOM from "react-dom";

let setModalContentGlobal: Dispatch<SetStateAction<ReactNode>>;
let setToastContentGlobal: Dispatch<SetStateAction<ReactElement[]>>;

export const useModal = () => {
  function showModal(content: ReactNode) {
    setModalContentGlobal(content);
  }

  function closeModal() {
    setModalContentGlobal(null);
  }

  return { showModal, closeModal };
};

export const useToast = () => {
  const [toasts, setToasts] = useState<ReactElement[]>([]);

  function showToast(content: ReactElement) {
    toasts.push(content);
    setToastContentGlobal([...toasts]);
    setToasts(toasts);
  }

  function closeToast(index: number) {
    toasts.splice(index, 1);
    setToastContentGlobal([...toasts]);
    setToasts(toasts);
  }

  return { showToast, closeToast };
};

function ModalContainer({
  modalContents,
  toastContents,
}: {
  modalContents: ReactNode;
  toastContents: ReactElement[];
}) {
  return (
    <>
      {/* modal */}
      {modalContents && (
        <div
          className={classNames(
            "fixed  z-[100]",
            "left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-80"
          )}
        >
          {modalContents}
        </div>
      )}
      {/* toast */}
      <div className={classNames("fixed  z-[99]", "right-0 top-0 w-[30%]")}>
        {toastContents.map((content, i) => (
          <div key={i} className="py-4">
            {cloneElement(content, { id: i })}
          </div>
        ))}
      </div>
    </>
  );
}

export const ModalManager = () => {
  const [modalContents, setModalContents] = useState<ReactNode | null>(null);
  const [toastContents, setToastContents] = useState<ReactElement[]>([]);

  setModalContentGlobal = setModalContents;
  setToastContentGlobal = setToastContents;

  useEffect(() => {
    document.body.style.top = "0";
    (async () => {
      setModalContents(null);
    })();
  }, []);

  useEffect(() => {
    if (modalContents) {
      document.body.style.top = `${window.scrollY * -1}px`;
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      const { top } = document.body.style;
      document.body.style.position = "static";
      window.scrollTo(0, parseInt(top || "0", 10) * -1);
    }
  }, [modalContents]);

  if (!modalContents && toastContents.length == 0) return null;

  return ReactDOM.createPortal(
    <ModalContainer
      modalContents={modalContents}
      toastContents={toastContents}
    />,
    document.body
  );
};
