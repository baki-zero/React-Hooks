export const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title"); //html에 head에 존재하는 title 태그 가져오기
        htmlTitle.innerText = title;
    };
    useEffect(updateTitle, [title]);    //component가 mount될 떄, title이 업데이트될 때 렌더링
    return setTitle;
};