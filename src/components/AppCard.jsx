import { useState } from 'react';

export default function AppCard({ languages }) {
    const [openId, setOpenId] = useState(null);

    return (
        <>
        <h1>Learn Web Development</h1>

        <div className="container mt-4"> 
            
            <div className="card">
                <div className="card-body">
                    <button className='btn btn-primary'>HTML</button>
                    <h2 className='card-title'>html</h2>
                    <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, dolorum!
                    </p>
                </div>
            </div>

        </div>
        </>
    );
}
