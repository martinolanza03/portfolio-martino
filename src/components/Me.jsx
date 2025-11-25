function Me() {

    const cvPath = "/public/cv_martino.pdf";

    return (<>

        <div className="p-20 flex flex-col container items-center">
            <p className="text-gray-400 text-xl mb-4">Ciao! Sono</p>
            <p className="text-blue-400 text-2xl mb-6">Martino Lanza</p>
            <p className="text-gray-400 text-xl mb-4">Sono un <span className="text-white">Fullstack Web Developer</span></p>
            <p className="text-gray-400 text-xl mb-8">Potete scaricare qui il mio <a href={cvPath} download="Martino_Lanza_Curriculum.pdf" className="text-blue-400 hover:text-blue-500 underline">Curriculum</a></p>
            <p className="text-gray-400 text-xl text-center">Benvenuti nel mio spazio digitale! Ho una passione smisurata per la creazione di soluzioni software robuste e funzionali. Il mio cuore batte forte per il backend, ma ho una solida comprensione dell'intero stack di sviluppo.</p>
        </div>
    </>)
}

export default Me