import { ToastSuccess } from "@lib/Toast";
import Swal from "sweetalert2";

export const ConfirmAlert = (
  Title: string,
  YText: string,
  NText: string,
  Message: string,
  callback: (confirmed: boolean) => void,
) => {
  Swal.fire({
    title: Title,
    showCancelButton: true,
    confirmButtonText: YText,
    cancelButtonText: NText,
    confirmButtonColor: "#316ae2",
    cancelButtonColor: "#ff2c2c",
  }).then((result) => {
    if (result.isConfirmed) {
      ToastSuccess(Message);
      callback(true);
    }
  });
};
