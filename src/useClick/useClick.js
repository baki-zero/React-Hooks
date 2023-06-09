export const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => { //sayHello를 가진 useClick이 mount 되었을 때 call
    if(typeof onClick !== "function") { //function이 아니라면 return
      return;
    }
    if(element.current) {
      element.current.addEventListener("click", onClick); //click 이벤트 추가
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []); //dependency는 없다.
  return typeof onClick !== "function" ? undefined: element;
};