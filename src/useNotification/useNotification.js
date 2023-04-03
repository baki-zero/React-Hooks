export const useNotification = (title, options)  => {
    if (!("Notification" in window)) {
      return;
    }
    const fireNotif = () => {
      if (Notification.permission !== "granted") { //permission이 부여되지 않은 경우
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            new Notification(title, options);
          } else return;
        });
      }
    };
    return fireNotif;
};