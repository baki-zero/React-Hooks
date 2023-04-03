export const useFadeIn = (duration = 1, delay = 0) => {
    const element = useRef();
    useEffect(() => {
      if(element.current) {
        const {current} = element;
        current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
        current.style.opacity = 1;
      }
    }, []); //dependency를 비워 componentDidMount시에만 동작하도록 한다.
    if(typeof duration !== "number" || typeof delay !== "number") {
      return;
    }
    
    return {ref: element, style: {opacity:0}};
  };