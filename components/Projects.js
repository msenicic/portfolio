import { DATA_PROJECTS } from "@/data";
import { Swiper, SwiperSlide } from "@/helpers/swiper"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import Image from "next/image";

export default function Projects() {
    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="text">
                    <h2>Projects</h2>
                    <p>I worked on various small and large projects consisting of React, NextJs, CraftCMS, Wordpress... If a project is not live, you can view the code on github</p>
                </div>
                {
                DATA_PROJECTS.map((portfolio, id)=>(
                <div key={id} className="portfolio-wrapper">
                    <p className="title">{portfolio.title}</p>
                    <div className="portfolio">
                        <Swiper 
                            slidesPerView={1}
                            pagination={{ clickable:true }}
                            spaceBetween={30}
                            grabCursor={true}
                            autoHeight={true}
                        >
                            {portfolio.projects.map((project)=>(
                                <SwiperSlide key={project.id}>
                                    <Link href={project.link ? project.link : project.code} target="_blank" className="project-image">
                                        <Image 
                                            className={project.imageAnimation ? 'animation' : null} 
                                            src={project.imageSrc} 
                                            alt="Project Image"
                                            fill 
                                            sizes="100vw" 
                                            style={{objectFit: "cover"}}
                                        />
                                    </Link>
                                    <div className="project-details">
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                        <div className="tags">
                                            {
                                                project.tags.map((tag, id)=>(
                                                    <span key={id}>{tag}</span>
                                                ))
                                            }
                                        </div>
                                        <div className="links">
                                            {project.code && <Link href={project.code} target='_blank'>Code<FontAwesomeIcon icon={faGithub} size="lg"/></Link>}
                                            {project.link && <Link className={project.usableLink == false ? 'disabled' : null} href={project.link} target='_blank'>Live Demo<FontAwesomeIcon icon={faArrowUpRightFromSquare} size="1x"/></Link>}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                ))
                }
            </div>
        </section>
    )
}