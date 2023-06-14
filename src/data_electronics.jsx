import React from "react";
import img01 from "./resource/electronics/김치냉장고.png";
import img02 from "./resource/electronics/냉장고.png";
import img03 from "./resource/electronics/노트북.png";
import img04 from "./resource/electronics/무선이어폰.png";
import img05 from "./resource/electronics/스마트폰.png";
import img06 from "./resource/electronics/에어프라이어.png";
import img07 from "./resource/electronics/전자레인지.png";
import img08 from "./resource/electronics/토스터.png";

const images = [img01, img02, img03, img04, img05, img06, img07, img08];
const names = [
    "김치냉장고",
    "냉장고",
    "노트북",
    "무선 이어폰",
    "스마트폰",
    "에어프라이어",
    "전자레인지",
    "토스터"
];
const price = [1300000,330000,1100000,170000,950000,80000,130000,35000]

const data_set = [];

for(let i=0;i<images.length; i++) {
    data_set[i] = [images[i],names[i],price[i]];
}

export default data_set;