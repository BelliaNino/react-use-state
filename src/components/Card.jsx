import { useState } from "react";

export default function Card({ title, description }) {

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