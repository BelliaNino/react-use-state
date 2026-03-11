import { useState } from "react";

const languages = [
    {
        id: 1,
        title: "HTML",
        description: "HTML (HyperText Markup Language) è il linguaggio standard per creare pagine e applicazioni web. Struttura il contenuto web e fornisce elementi di base come titoli, paragrafi e immagini."
    },
    {
        id: 2,
        title: "CSS",
        description: "CSS (Cascading Style Sheets) è un linguaggio di stile utilizzato per descrivere la presentazione di un documento scritto in HTML o XML. Controlla il layout, i colori, i caratteri e l'aspetto complessivo di una pagina web."
    },
    {
        id: 3,
        title: "JavaScript",
        description: "JavaScript è un linguaggio di programmazione dinamico utilizzato per lo sviluppo web, che consente contenuti interattivi come grafici animati, pulsanti cliccabili e altre funzionalità dinamiche sui siti web."
    },
    {
        id: 4,
        title: "Node.js",
        description: "Node.js è un ambiente di runtime JavaScript lato server che permette di utilizzare JavaScript anche sul backend, consentendo agli sviluppatori di usare lo stesso linguaggio sia sul client che sul server."
    },
    {
        id: 5,
        title: "Express",
        description: "Express è un framework per applicazioni web minimalista e veloce per Node.js. Fornisce strumenti robusti per creare applicazioni web e API e semplifica la gestione delle rotte e delle richieste."
    },
    {
        id: 6,
        title: "ReactJS",
        description: "ReactJS è una libreria JavaScript per costruire interfacce utente, in particolare applicazioni a pagina singola. Consente agli sviluppatori di creare componenti UI riutilizzabili e di gestire efficacemente lo stato dell'applicazione."
    }
];


export default function AccordionList() {

    //costante con i parametri dove all'inizio open è uguale a 'null', mentre 'setOpen' ci aiuterà a cambiare il valore in seguito
    const [open, setOpen] = useState(null)

    function toggleAccordion(id) {

        //se il bottone selezionato (open) ha lo stesso id allore setOpen darà valore 'null'
        if (open == id) {
            setOpen(null)
        }
        //mentre se il bottone selezionato è diverso dal suo id allora setOpen prendera il valore dell'id che gli assegneremo in seguito 
        else {
            setOpen(id)
        }
    }

    //creo una variabile per trasferire l'id selezionato, fuori dal ciclo map()  
    const activated = languages.find(item => item.id === open)

    //creo una variabile 'null'
    let cardContain = null

    //se il valore è true allora la variabile stampa il contenuto dell'id selezionato
    if (activated) {
        cardContain = (
            <>
                <h2>{activated.title}</h2>
                <p>{activated.description}</p>
            </>
        )
    } 
    //altrimenti stampa un messaggio preimpostato
    else {
        cardContain=
            <p>Nessun linguaggio selezionato...</p>
        
    }


    return (

        <>
            <h1>Learn Web Development</h1>

            <div className="accordion-list">


                <div className="render">
                    {
                        languages.map(item => (

                            <div className="accordion-item" key={item.id}>
                                <button onClick={() => toggleAccordion(item.id)}>
                                    {item.title}
                                </button>
                            </div>
                        ))
                    }

                </div>

                <div>

                    {/*Render card */}
                    <div className="card">
                        {/*metto il contenuto di cardContain dentro la card*/}
                        {cardContain}
                    </div>

                </div>

            </div >
        </>
    )
}
