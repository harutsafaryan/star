import { useRef, useState } from "react";
import { useInput } from "./useInput";
import { useColors } from "./ColorProvider"


export default function AddColorForm() {
    const [titleProps, resetTitle] = useInput("")
    const [colorProps, resetColor] = useInput("#00000");
    const {addColor} = useColors();

    const submit = (e)=>{
        e.preventDefault();
        addColor(titleProps.value, colorProps.value);
        resetTitle();
        resetColor();
        };

    return (
        <form onSubmit={submit}>
            <input {...titleProps} type="text" placeholder="color titke" required/>
            <input {...colorProps} type="color" required/>
            <button>ADD</button>
        </form>
    );
}