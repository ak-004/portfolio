import { ArrowRight, Github } from 'lucide-react';
import React from 'react'

const projects = [
    {
        id: 1,
        title: "Sales-Dashboard",
        description: "A beautiful Frontend structure of the Dashboard using React.",
        image: "/projects/project_1.png",
        tags: ["React", "TailwindCSS", "Framer-motion"],
        projectType: "Solo",
        githubUrl: "https://github.com/ak-004/Sales-dashboard-Frontend-",
    },
    {
        id: 2,
        title: "Pizza Sales Analysis Dashboard",
        description:
            "Interactive analytics dashboard with data visualization and filtering.",
        image: "/projects/project_2.png",
        tags: ["Tableu"],
        projectType: "Solo",
        githubUrl: "https://github.com/ak-004/Pizza_Sales_Dashboard-tableu-",
    },
    {
        id: 3,
        title: "Health-Forecast",
        description: "A web app to predict health conditions and to book appointments.",
        image: "/projects/project_3.png",
        tags: ["HTML/CSS", "Django", "SQLite"],
        projectType: "Group",
        githubUrl: "https://github.com/RRsheaven/Healthforecast",
    }
];

const ProjectsSection = () => {
    return (
        <section id='projects' className='py-24 px-4 relative'>
            <div className='container mx-auto amx-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    {" "}
                    Featured <span className='text-primary'>Projects</span></h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully
                    crafted with attention to detail, performance, and user experience.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'
                        >
                            <div className='h-48 overflow-hidden'>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                                />
                            </div>

                            <div className='p-6'>
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {project.tags.map((tag) => (
                                        <span className='px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground'>{tag}</span>
                                    ))}
                                </div>

                                <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className='flex justify-between items-center'>
                                    <div className='flex space-x-3'>
                                        <a href={project.githubUrl} target='_blank' className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                                            <Github />
                                        </a>
                                        <span className='px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground'>{project.projectType}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='text-center mt-12'>
                    <a className='cosmic-button w-fit flex items-center mx-auto gap-2' target='_blank' href='https://github.com/ak-004/'>
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection
