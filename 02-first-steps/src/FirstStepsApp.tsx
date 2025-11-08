
/* export function FirstStepsApp() {
    return (
        <>
            <h1>Hola Mundo</h1>
            <p>Esto es un párafo </p>

            <button>Clic aca!</button>
        </>
    )
}

export function MyAwesomeApp() {
    const FirstName = 'David';
    const LastName = 'Arroyo';

    return (
        <>
            <h1> {FirstName} </h1>
            <h2> {LastName} </h2>
        </>
    )
} */
import { ItemCounter } from "./shopping-cart/ItemCounter"


interface ItemInCart {
    key: number;
    productName: String;
    quantity: number;
}

const itemsInCart: ItemInCart[] = [
    { key: 1, productName: 'Nintendo Switch', quantity: 1 },
    { key: 2, productName: 'Pro Controller 2', quantity: 2 },
    { key: 3, productName: 'Ps 2', quantity: 4 },
    { key: 4, productName: 'Ps 6', quantity: 5 }
];


export function FirstStepsApp() {
    return (
        <>
            <h1>Carrito de compras</h1>

            {
                itemsInCart.map(({ key, productName, quantity }) => (
                    <ItemCounter key={key} Name={productName} quantity={quantity} />
                ))
            }


            {/*             <ItemCounter Name="Nintendo Switch" quantity={2} />
            <ItemCounter Name="Pro Controller 2" quantity={4} />
            <ItemCounter Name="Ps 2" quantity={3} />
            <ItemCounter Name="Ps 6" quantity={1} /> */}


        </>
    )
}