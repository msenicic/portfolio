import Image from "next/image"

export default function About() {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="image">
                    <Image 
                        src='/profile.jpg' 
                        alt="Profile" 
                        fill 
                        sizes="100vw" 
                        style={{objectFit: "cover"}}
                    />
                </div>
                <div className="text">
                    <h2>About me</h2>
                    <h3>A dedicated Front-end Developer based Kraljevo, Serbia</h3>
                    <p>I have been learning Web Development for over three years with breaks. I am self-taught and everything I know I learned online and with the help of older friends who gave me guidance. I want to devote myself to this work and do it in the future. I am very excited to gain new knowledge and business.</p>
                </div>
            </div>
        </section>
    )
}
