
const socials = [
    {name: "GitHub", url: "https://github.com/artanddev", icon: "/assets/github-icon.png"},
    {name: "LinkedIn", url: "https://linkedin.com/in/linhuuss", icon: "/assets/linkedinlink-icon.png"},
    {name: "Email", url: "mailto:linhuuss@gmail.com", icon: "/assets/email-icon.png"}
];

function Contacts() {
    return (
        <section id="contacts">
            <ul className="flex flex-wrap gap-2 justify-center">
                {socials.map((social, index) => (
                    <li key={index}>
                        <a href={social.url} target="_blank" rel="noopener noreferrer">
                            <img src={social.icon} alt={social.name} />
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Contacts