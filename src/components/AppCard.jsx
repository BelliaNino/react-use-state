import Card from "./Card"

export default function AppCard({ languages }) {

    return (

        <>
            <h1>Learn Web Development</h1>

            <div className="container mt-4">

                {languages.map((item) => (

                    <Card
                        title={item.title}
                        description={item.description}
                    />

                ))}

            </div>
        </>
    );
}