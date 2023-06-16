import { FaTrash } from "react-icons/fa";
import StarRating from "./StarRating";
import { useColors } from "./UseColors";

export default function Color({ id, title, color, rating, onRemove = f => f, onRate = f => f }) {

    const {rateColor, removeColor} = useColors();

    return (
        <section>
            <h1>{title}</h1>
            <button onClick={() => removeColor(id)}>
                <FaTrash />
            </button>
            <div style={{ height: 50, backgroundColor: color }} />
            <StarRating
                selectedStars={rating}
                onRate={rating => rateColor(id, rating)}
            />
        </section>
    );
}