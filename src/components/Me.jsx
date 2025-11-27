function Me() {

    const cvPath = "src/assets/pdf/cv_martino.pdf";

    return (<>

        <section className="p-20 flex flex-col container items-center mx-auto">
            <p className="text-gray-400 text-xl mb-4">Ciao! Sono</p>
            <p className="text-blue-400 text-2xl mb-6">Martino Lanza</p>
            <p className="text-gray-400 text-xl mb-4">Sono uno <span className="text-white"> Junior Fullstack Web Developer</span></p>
            <p className="text-gray-400 text-xl mb-8">Potete scaricare qui il mio <a href={cvPath} download="Martino_Lanza_Curriculum.pdf" className="text-red-400 hover:text-red-500 underline">Curriculum</a></p>
            <p className="text-gray-400 text-xl text-center mx-80">Benvenuti nel mio spazio digitale! Ho una passione smisurata per la creazione di soluzioni software robuste e funzionali. Il mio cuore batte forte per il backend, ma ho una solida comprensione dell'intero stack di sviluppo.</p>
        </section>

    </>)
}

export default Me