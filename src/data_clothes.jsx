import React from "react";
import img01 from "./resource/clothes/셔츠.png";
import img02 from "./resource/clothes/양말 A.png";
import img03 from "./resource/clothes/양말 B.png";
import img04 from "./resource/clothes/원피스.png";
import img05 from "./resource/clothes/져지.png";
import img06 from "./resource/clothes/크록스.png";
import img07 from "./resource/clothes/티셔츠 A.png";
import img08 from "./resource/clothes/티셔츠 B.png"

const images = [img01, img02, img03, img04, img05, img06, img07, img08];
const names=[
    "셔츠",
    "양말 A",
    "양말 B",
    "원피스",
    "져지",
    "크록스",
    "티셔츠 A",
    "티셔츠 B"
];
const price=[20000,2500,6000,25000,75000,45000,30000,27000];

const data_set = [];

for(let i=0;i<images.length; i++) {
    data_set[i] = [images[i],names[i],price[i]];
}

export default data_set;