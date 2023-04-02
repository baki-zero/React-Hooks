export const useConfirm = (message="", callback, rejection) => {
    if(typeof callback !== "function" || typeof rejection !== fu) {  //function이 아니라면  리턴
      return;
    }
    const confirmAction = () => {
      if(window.confirm(message)) {
        callback();
      } else {
        rejection();
      }
    };
    return confirmAction;
  };