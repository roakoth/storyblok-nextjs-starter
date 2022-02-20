import React from "react";
import { sbEditable } from "@storyblok/storyblok-editable";

const Feature = ({blok}) => (
    <div {...sbEditable(blok)}>
     {blok.name}
    </div>
);

export default Feature;