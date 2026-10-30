export default function Footer() {
    return (
        <>
            <section id="footer" class="mb-4">
                <div class="text-sm text-neutral-400">
                    <p>Built with&nbsp;
                        <a href="https://react.dev/" class="underline">React.js</a>
                        &nbsp;& <a href="https://tailwindcss.com/" class="underline">Tailwind</a>.
                        Hosted on  <a href="https://github.com/" class="underline">Github Pages</a>.
                    </p>
                    <p>Life is a work in progress — Last Updated: {BUILD_DATE} </p>
                    <div class="mt-2">
                        <p>© 2026 Arturo Andres P. de Silva | All rights reserved  </p>
                    </div>
                </div>
            </section>
        </>
    )
}