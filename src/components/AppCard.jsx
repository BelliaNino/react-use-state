{/* import Card from "./Card"

export default function AppCard({ languages }) {

    return (

        <>
            <h1>Learn Web Development</h1>

            <div className="container mt-4">

                {languages.map((item) => (

                    <Card
                        key={item.title}
                        title={item.title}
                        description={item.description}
                    />

                ))}

            </div>
        </>
    );
}*/}

import { useState } from "react";

export default function AppCard({ languages }) {

    const [open, setOpen] = useState(null);

    function toggleAccordion(id) {

        if (open === id) {
            setOpen(null);
        } else {
            setOpen(id);
        }
    }

    const activated = languages.find(item => item.id === open);

    let cardContain = null

    if (activated) {
        cardContain = (
            <>
                <h2>{activated.title}</h2>
                <p>{activated.description}</p>
            </>
        );
    } else {
        cardContain = <p>Nessun linguaggio selezionato...</p>;
    }

    return (
        <>
            <h1>Learn Web Development</h1>

            <div className="btn-list">

                <div className="btn">

                    {languages.map(item => (

                        <div className="btn-item" key={item.id}>
                            <button onClick={() => toggleAccordion(item.id)}>
                                {item.title}
                            </button>
                        </div>

                    ))}

                </div>

                <div className="card mt-3">
                    {cardContain}
                </div>

            </div>
        </>
    );
}