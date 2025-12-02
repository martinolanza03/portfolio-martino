import React, { useState } from 'react';

function ExperienceAndEducation({ works, education }) {

    const [activeSection, setActiveSection] = useState('work');

    const dataToDisplay = activeSection === 'work' ? works : education;
    const title = activeSection === 'work' ? 'Esperienze Lavorative' : 'Formazione';

    const renderCard = (item, index) => {

        const { nome, azienda, datainizio, datafine, logo } = item;

        return (
            <div
                key={index}
                className="w-full md:w-[calc(50%-12px)] group relative bg-linear-to-br from-blue-950/40 to-slate-950/40 border border-blue-900/30 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
            >
                <div className="relative flex items-start gap-4">

                    <div
                        className="bg-linear-to-br from-blue-500 to-blue-700 p-3 rounded-lg"
                    >
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
    };

    return (
        <section className="p-20 flex flex-col container mx-auto space-y-8">

            <div className="flex justify-center space-x-6 mb-8 border-b border-blue-900/20">

                <button
                    onClick={() => setActiveSection('work')}
                    className={`text-xl pb-2 transition-colors ${activeSection === 'work'
                        ? 'text-blue-400 border-b-2 border-blue-400'
                        : 'text-gray-400 hover:text-blue-200'
                        }`}
                >
                    Esperienze Lavorative
                </button>

                {/* Bottone Formazione */}
                <button
                    onClick={() => setActiveSection('education')}
                    className={`text-xl pb-2 transition-colors ${activeSection === 'education'
                        ? 'text-blue-400 border-b-2 border-blue-400'
                        : 'text-gray-400 hover:text-blue-200'
                        }`}
                >
                    Formazione
                </button>
            </div>

            <p className="text-gray-400 text-center text-xl mb-4">
                {title}:
            </p>

            <div className="flex flex-wrap gap-6">
                {dataToDisplay.map(renderCard)}
            </div>
        </section>
    );
}

export default ExperienceAndEducation;