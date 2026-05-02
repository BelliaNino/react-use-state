import { useState } from "react";

function Card({ title, description }) {

    const [isOpen, setIsOpen] = useState(false);

    function clickHandler() {
        setIsOpen(!isOpen);
    }

    return (

        <div className="card m-3">

            <div className="card-body">

                <button onClick={clickHandler} className={`btn ${isOpen ? "btn-warning" : "btn-primary"}`}>               
                    {title}
                </button>

                {isOpen && (
                    <p className="card-text mt-3">
                        {description}
                    </p>
                )}

            </div>

        </div>
    );
}

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
}