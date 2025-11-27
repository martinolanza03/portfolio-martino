import { useState } from 'react';

function Projects({ projects }) {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    if (!projects || projects.length === 0) {
        return (
            <div className="container mx-auto max-w-6xl px-4 py-8">
                <h2 className="text-white text-2xl font-bold mb-4">I Miei Progetti</h2>
                <p className="text-gray-400">Nessun progetto disponibile al momento.</p>
            </div>
        );
    }

    const currentProject = projects[currentProjectIndex];

    const nextProject = () => {
        setCurrentProjectIndex((prev) =>
            prev === projects.length - 1 ? 0 : prev + 1
        );
    };

    const prevProject = () => {
        setCurrentProjectIndex((prev) =>
            prev === 0 ? projects.length - 1 : prev - 1
        );
    };

    const goToProject = (index) => {
        setCurrentProjectIndex(index);
    };

    return (
        <div className="container mx-auto max-w-6xl px-4 py-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-12">
                <h2 className="text-white text-2xl font-bold">I Miei Progetti</h2>
                <div className="flex gap-2">
                    <button
                        onClick={prevProject}
                        className="bg-blue-950/40 border border-blue-900/30 hover:border-blue-500/50 text-white p-3 rounded-lg transition-all"
                        aria-label="Progetto precedente"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-5 h-5"
                        >
                            <path d="m15 18-6-6 6-6"></path>
                        </svg>
                    </button>
                    <button
                        onClick={nextProject}
                        className="bg-blue-950/40 border border-blue-900/30 hover:border-blue-500/50 text-white p-3 rounded-lg transition-all"
                        aria-label="Progetto successivo"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-5 h-5"
                        >
                            <path d="m9 18 6-6-6-6"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Progetto Corrente */}
            <div className="relative mb-8">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    {/* Immagine */}
                    <div className="flex-1 relative group">
                        <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-2xl"></div>
                        <div className="relative bg-linear-to-br from-blue-950/60 to-slate-950/60 border border-blue-900/30 rounded-2xl p-4 overflow-hidden">
                            <img
                                src={currentProject.image}
                                alt={currentProject.title}
                                className="w-full h-80 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Contenuto */}
                    <div className="flex-1">
                        <h3 className="text-white text-2xl font-bold mb-4">{currentProject.title}</h3>
                        <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                            {currentProject.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {currentProject.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-blue-950/40 border border-blue-900/30 text-blue-400 rounded-full text-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Bottoni */}
                        <div className="flex gap-4">
                            {currentProject.liveUrl && (
                                <a
                                    href={currentProject.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-4 h-4"
                                    >
                                        <path d="M15 3h6v6"></path>
                                        <path d="M10 14 21 3"></path>
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    </svg>
                                    Vedi Live
                                </a>
                            )}
                            {currentProject.githubUrl && (
                                <a
                                    href={currentProject.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-4 h-4"
                                    >
                                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                    </svg>
                                    Codice
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Indicatori - solo se ci sono più progetti */}
            {projects.length > 1 && (
                <div className="flex justify-center gap-2">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToProject(index)}
                            className={`h-2 rounded-full transition-all ${index === currentProjectIndex ? 'w-8 bg-blue-500' : 'w-2 bg-blue-900/30 hover:bg-blue-900/50'
                                }`}
                            aria-label={`Vai al progetto ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Projects;