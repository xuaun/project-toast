import React from "react";

import { ToastContext } from "../ToastProvider";
import useEscapeKey from "./useEscapeKey";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts, setToasts } = React.use(ToastContext);

  function handleDismiss() {
    setToasts([]);
  }

  useEscapeKey(handleDismiss);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map((toast) => (
        <li className={styles.toastWrapper} key={toast.id}>
          <Toast variant={toast.variant} toastId={toast.id}>
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
