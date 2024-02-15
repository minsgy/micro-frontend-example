import { useState } from "react";
import "./App.css";

export const App = () => {
  const [selectedIframeUrl, setSelectedIframeUrl] = useState("");
  const iframeUrlList = [
    {
      name: "위키백과 대문",
      url: "https://ko.wikipedia.org/wiki/%EC%9C%84%ED%82%A4%EB%B0%B1%EA%B3%BC:%EB%8C%80%EB%AC%B8",
    },
    {
      name: "쿠팡",
      url: "https://www.coupang.com/",
    },
  ];

  return (
    <>
      <div className="header">
        <h1 className="title">Header</h1>
      </div>
      <main className="main-container">
        <aside className="sidebar">
          {iframeUrlList.map(({ name, url }) => (
            <button
              type="button"
              key={name}
              onClick={() => setSelectedIframeUrl(url)}
            >
              {name}
            </button>
          ))}
        </aside>
        <div className="content">
          {selectedIframeUrl ? (
            <iframe src={selectedIframeUrl} />
          ) : (
            <p>왼쪽 리스트에서 원하는 Content를 선택하세요.</p>
          )}
        </div>
      </main>
    </>
  );
};
