import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title"); //html에 head에 존재하는 title 태그 가져오기
        htmlTitle.innerText = title;
    };
    useEffect(updateTitle, [title]);    //component가 mount될 떄, title이 업데이트될 때 렌더링
    return setTitle;
}

const App = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000); //5초 후에 title이 "home"으로 바뀜
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  )
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
