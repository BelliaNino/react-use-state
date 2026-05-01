import { useState } from 'react';

export default function AppCard({ languages }) {
    const [openId, setOpenId] = useState(null);

    return (
        <>
            <h1>Learn Web Development</h1>

            <div className="container mt-4">
                {languages.map(item => (
                    <div className="card">
                        <div className="card-body">
                            <button className='btn btn-primary'>{item.title}</button>
                            <p className="card-text">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))
                }
            </div>
        </>
    );
}
