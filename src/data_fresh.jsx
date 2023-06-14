import React from "react";
import img01 from "./resource/fresh/계란.png";
import img02 from "./resource/fresh/깻잎.png";
import img03 from "./resource/fresh/목살.png";
import img04 from "./resource/fresh/삼겹살.png";
import img05 from "./resource/fresh/상추.png";
import img06 from "./resource/fresh/수박.png";
import img07 from "./resource/fresh/우유.png";
import img08 from "./resource/fresh/포도.png";

const images = [img01, img02, img03, img04, img05, img06, img07, img08];
const names = [
    "계란",
    "깻잎",
    "목살",
    "삼겹살",
    "상추",
    "수박",
    "우유",
    "포도"
];
const price = [7500,4000,15000,20000,5000,15000,6800,16000];

const data_set = [];

for(let i=0;i<images.length; i++) {
    data_set[i] = [images[i],names[i],price[i]];
}

export default data_set;