function WorkExperience({ works }) {

    return (
        <section className="p-20 flex flex-col container mx-auto space-y-8">
            <p className="text-gray-400 text-xl mb-4">Esperienze Lavorative: </p>

            {works.map((work, index) => {

                const { nome, azienda, datainizio, datafine, logo } = work;

                return (
                    <div
                        key={index}
                        className="group relative bg-linear-to-br from-blue-950/40 to-slate-950/40 border border-blue-900/30 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                    >
                        <div className="relative flex items-start gap-4">
                            <div className="bg-linear-to-br from-blue-500 to-blue-700 p-3 rounded-lg">
                                <img src={logo} alt={`Logo ${azienda}`} className="w-8 h-8" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-white mb-1">{nome}</h3>
                                <p className="text-gray-400 text-sm mb-3">{azienda}</p>
                                <p className="text-blue-400"> {datainizio} - {datafine} </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </section >
    );
}

export default WorkExperience;