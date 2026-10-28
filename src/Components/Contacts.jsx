import github from "/GitHub_Invertocat_Black.png";
import linkedin from "/InBug-Black.png";
import email from "/email.png";

const socials = [
    {name: "GitHub", url: "https://github.com/artanddev", icon: github},
    {name: "LinkedIn", url: "https://www.linkedin.com/in/arturo-andres-de-silva-baa8123a0/", icon: linkedin},
    {name: "Email", url: "mailto:linhuuss@gmail.com", icon: email}
];

function Contacts() {
    return (
        <section id="contacts">
            <ul className="flex flex-wrap gap-2 justify-center">
                {socials.map((social, index) => (
                    <li key={index} class="m-2">
                        <a href={social.url} target="_blank" rel="noopener noreferrer">
                            <img src={social.icon} alt={social.name} class="h-10 lg:h-8" />
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Contacts