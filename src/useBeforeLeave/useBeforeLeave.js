export const useBeforeLeave = (onBefore) => {
    const handle = (event) => {
      const {clientY} = event;
      if(clientY <= 0) {
        onBefore();
      }
    }
    useEffect(() => {
      document.addEventListener("mouseleave", handle);
      return () => document.removeEventListener("mouseleave", handle);
    }, []); //dependency를 추가해 계속해서 이벤트가 document에 추가 되는 것 방지
    if(typeof onBefore !== "function") {
      return;
    };
  };