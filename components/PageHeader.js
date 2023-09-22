import Image from "next/image";
import { DATA_SKILLS } from "@/data"

export default function PageHeader() {
    return (
        <section id="home" className="pageHeader">
            <div className="container">
                <div className="title">
                    <h1>Front-End Developer</h1>
                    <div className="quote">
                        <p>Hi, I&apos;m Marko Senicic. A passionate Front-end Developer from Kraljevo, Serbia.</p>
                    </div>
                </div>
                <div className="skills">
                    <p>Skills:</p>
                    {
                        DATA_SKILLS.map((skill)=>(
                            <div className="skill" key={skill.id}>
                                <Image src={skill.imageSrc} alt={skill.skill} title={skill.skill} width={40} height={40} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}