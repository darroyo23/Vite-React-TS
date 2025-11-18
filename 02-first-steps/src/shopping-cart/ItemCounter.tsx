import { useState } from "react";


interface Props {
    Name: String;
    quantity?: number; //con el ? hace opcional la prop, por ende no es requerida
};


export const ItemCounter = ({ Name, quantity = 1 }: Props) => {

    const [count, setCount] = useState(quantity);


    const handleAdd = () => {
        setCount(count + 1);
    };

    const handleSubtract = () => {
        if (count === 1) return;

        setCount(count - 1);
    };

    return (
        <section
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10%', //agregar el por centaje, con el numero solo no funciona
                marginTop: 15
            }}
        >
            <span style={{ width: 150 }}> {Name} </span>
            <button
                onClick={handleAdd}> +1 </button>
            <span> {count} </span>
            <button
                onClick={handleSubtract}> -1 </button>
        </section>


    )
} 