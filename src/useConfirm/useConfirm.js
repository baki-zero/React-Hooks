export const useConfirm = (message="", onConfirm, onCancel) => {
    if(!onConfirm || typeof onConfirm !== "function" ) {  //onConfirm이 존재하지 않거나 function이 아니라면 리턴
      return;
    }
    if(onCancel && typeof onCancel !== "function") {  //onCancel 존재하고 function이 아니라면 리턴
      return;
    }
    const confirmAction = () => {
      if(window.confirm(message)) {
        callback();
      } else {
        onCancel();
      }
    };
    return confirmAction;
  };