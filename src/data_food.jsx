import React from "react";
import img01 from "./resource/food/간장.png";
import img02 from "./resource/food/고춧가루.png";
import img03 from "./resource/food/설탕.png";
import img04 from "./resource/food/소금.png";
import img05 from "./resource/food/쌀.png";
import img06 from "./resource/food/에이스.png";
import img07 from "./resource/food/포스틱.png";
import img08 from "./resource/food/허니버터칩.png";

const images = [img01, img02, img03, img04, img05, img06, img07, img08];
const names = [
    "간장",
    "고춧가루",
    "설탕",
    "소금",
    "쌀",
    "에잇",
    "포스틱",
    "허니버터칩"
]
const price = [5000,16000,10000,12000,30000,1500,1500,2000];

const data_set = [];

for(let i=0;i<images.length; i++) {
    data_set[i] = [images[i],names[i],price[i]];
}

export default data_set;