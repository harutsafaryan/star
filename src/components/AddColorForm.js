import { useRef, useState } from "react";

export default function AddColorForm({ onNewColor = f => f }) {
    const [title, setTitle] = useState("");
    const [color, setColor] = useState("#00000");

    const submit = (e)=>{
        e.preventDefault();
        const title = title.current.value;
        const color = color.current.value;
        onNewColor(title, color);
        setTitle("");
        setColor("");
    };

    return (
        <form onSubmit={submit}>
            <input value={title} onChange={(event) => setTitle(event.target.value)} type="text" placeholder="color titke" required/>
            <input value={color} onChange={(event) => setColor(event.target.value)} type="color" required/>
            <button>ADD</button>
        </form>
    );
}