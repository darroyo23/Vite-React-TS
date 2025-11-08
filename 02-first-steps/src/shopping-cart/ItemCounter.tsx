

interface Props {
    Name: String;
    quantity?: number; //con el ? hace opcional la prop, por ende no es requerida
};


export const ItemCounter = ({ Name, quantity }: Props) => {
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
            <button> +1 </button>
            <span> {quantity} </span>
            <button> -1 </button>
        </section>


    )
} 