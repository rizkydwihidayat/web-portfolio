import { notification } from "antd";
import Router from "next/router";

notification.config({
  duration: 6, // 6 Secs
  placement: "top",
});
const notificationStyles = {
  style: {
    width: 650,
  },
};

export const showSuccess = ({
  title = "Success",
  description,
}: {
  title?: string;
  description?: string;
}) =>
  notification.success({
    ...notificationStyles,
    message: title,
    description,
  });

export const showError = ({
  title = "Error",
  error,
}: {
  title?: string;
  error?: unknown | string;
}) => {
  const isErrorObject = error instanceof Error;
  if (isErrorObject && error.message.toLowerCase() === "unauthorized")
    Router.reload();

  const description = (() => {
    if (typeof error === "string") return error;
  })();

  return notification.error({
    ...notificationStyles,
    message: title,
    description,
  });
};
