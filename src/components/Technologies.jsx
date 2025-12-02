import React, { useState } from 'react';

const ITEMS_PER_PAGE = 6;

function Technologies({ languages }) {

    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = Math.ceil(languages.length / ITEMS_PER_PAGE);

    const startIndex = currentPage * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    const currentLanguages = languages.slice(startIndex, endIndex);

    const goToPrevious = () => {
        setCurrentPage(prev => Math.max(0, prev - 1));
    };

    const goToNext = () => {
        setCurrentPage(prev => Math.min(totalPages - 1, prev + 1));
    };

    return (
        <section id="technologies" className="py-20 px-6 scroll-mt-24">
            <div className="container mx-auto max-w-4xl">

                <div className="text-center mb-12">
                    <p className="text-gray-400 mb-2">
                        Attualmente in cerca di una posizione come <span className="text-blue-400">Full-Stack Developer</span>
                    </p>
                    <p className="text-gray-500 text-sm">
                        Specializzato nella creazione di applicazioni complete, performanti e accessibili (Front-End & Back-End).
                    </p>
                </div>

                <div className="mb-12">
                    <h3 className="text-white text-center mb-8">Il mio Stack Tecnologico </h3>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

                        {currentLanguages.map((tech) => (
                            <div
                                key={tech.nome}
                                className="group bg-linear-to-br from-blue-950/30 to-slate-950/30 border border-blue-900/30 hover:border-blue-500/50 rounded-xl p-6 transition-all duration-300 flex flex-col items-center justify-center gap-4"
                            >
                                <div className="relative">
                                    <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="relative p-4 w-20 h-20 flex items-center justify-center">
                                        <img
                                            src={tech.immagine}
                                            alt={tech.nome}
                                            className={`w-12 h-12 object-contain ${tech.nome === 'Express.js' ? 'filter invert' : ''}`}
                                        />
                                    </div>
                                </div>
                                <span className="text-gray-300 group-hover:text-blue-400 transition-colors">
                                    {tech.nome}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {totalPages > 1 && (
                    <div className="flex justify-center mt-12 gap-4">
                        <button
                            className="bg-blue-950/40 border border-blue-900/30 hover:border-blue-500/50 text-white p-3 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            aria-label="Progetto precedente"
                            onClick={goToPrevious}
                            disabled={currentPage === 0}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="m15 18-6-6 6-6"></path></svg>
                        </button>
                        <button
                            className="bg-blue-950/40 border border-blue-900/30 hover:border-blue-500/50 text-white p-3 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            aria-label="Progetto successivo"
                            onClick={goToNext}
                            disabled={currentPage === totalPages - 1}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="m9 18 6-6-6-6"></path></svg>
                        </button>
                    </div>
                )}

                <div className="relative flex justify-center mt-12">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-64 h-64 bg-blue-500/20 blur-3xl rounded-full"></div>
                    </div>
                    <div class="relative bg-linear-to-br from-blue-950 to-slate-950 border border-blue-500/30 rounded-full w-40 h-40 flex items-center justify-center">
                        <div class="text-blue-400 text-6xl -translate-y-0.5">
                            &lt;/&gt;
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Technologies;