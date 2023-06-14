import React from "react";
import img01 from "./resource/books/AI시대의 컴퓨터 개론.png";
import img02 from "./resource/books/Perfect C.png";
import img03 from "./resource/books/모바일 UI UX 디자인 실무.png";
import img04 from "./resource/books/생활코딩 React 리액트 프로그래밍.png";
import img05 from "./resource/books/자신감 뿜뿜 JSP 웹 프로그래밍 Hard Carry.png";
import img06 from "./resource/books/절대 JAVA.png";
import img07 from "./resource/books/초연결 사회의 데이터통신과 네트워킹.png";
import img08 from "./resource/books/파이썬으로 배우는 누구나 코딩.png";

const images = [img01, img02, img03, img04, img05, img06, img07, img08];
const names = [
    "AI시대의 컴퓨터 개론",
    "Perfect C",
    "모바일 UI UX 디자인 실무",
    "생활코딩 React 리액트 프로그래밍",
    "자신감 뿜뿜 JSP 웹 프로그래밍 Hard Carry",
    "절대 JAVA",
    "초연결 사회의 데이터통신과 네트워킹",
    "파이썬으로 배우는 누구나 코딩"
]
const price = [29000,28800,28000,22500,26000,28000,25000,29000 ];

const data_set = [];

for(let i=0;i<images.length; i++) {
    data_set[i] = [images[i],names[i],price[i]];
}

export default data_set;