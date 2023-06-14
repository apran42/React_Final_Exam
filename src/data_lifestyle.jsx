import React from "react";
import img01 from "./resource/lifestyle/다우니.png";
import img02 from "./resource/lifestyle/두루마리 휴지.png";
import img03 from "./resource/lifestyle/모기향.png";
import img04 from "./resource/lifestyle/물티슈.png";
import img05 from "./resource/lifestyle/샴푸.png";
import img06 from "./resource/lifestyle/주방세제.png";
import img07 from "./resource/lifestyle/트리트먼트.png";
import img08 from "./resource/lifestyle/페브리즈.png";

const images = [img01, img02, img03, img04, img05, img06, img07, img08];
const names = [
    "다우니",
    "두루마리 휴지",
    "모기향",
    "물티슈",
    "샴푸",
    "주방세제",
    "트리트먼트",
    "페브리즈"
];
const price = [9500,35000,1000,1000,5000,5000,32000,5500];

const data_set = [];

for(let i=0;i<images.length; i++) {
    data_set[i] = [images[i],names[i],price[i]];
}

export default data_set;
