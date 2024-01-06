import { Card } from "./components/Card";
import { Avatar } from "./components/Avatar";
import { Contacts } from "./components/Contacts";
import { Initials } from "./components/Initials";
import { Description } from "./components/Description";

import styles from "./styles/app.module.css";

function App() {
    return (
        <div class={styles.app}>
            <div class={styles.about_me}>
                <div class={styles.avatar}>
                    <Avatar
                        height={200}
                        width={200}
                    />
                </div>


                <div class={styles.information}>
                    <div class={styles.initials}>
                        <Initials />
                    </div>

                    <div class={styles.description}>
                        <Description />
                    </div>

                    <div class={styles.contacts}>
                        <Contacts />
                    </div>
                </div>
            </div>

            <div class={styles.cards}>
                <Card
                    title="VK wallet & TON Coin"
                    descripion="Vkontakte wallet for TON transfer, check creation, show in multiple currencies."
                    technologies={["TypeScript", "PostgreSQL", "TON"]}
                    url="https://github.com/mrzxd69/ton-wallet-bot"
                />

                <Card
                    title="Akumi"
                    descripion="File management utility. Helps you to read, delete and create files 🌺"
                    technologies={["Rust", "File system", "My heart"]}
                    url="https://github.com/mrzxd69/akumi"
                />

                <Card
                    title="Wooow, that's my site, wtf"
                    descripion="This is my personal site. Ok? I don't know why I need it. But it's kind of cool, right?"
                    technologies={["Solid.js", "Server-Side Rendering"]}
                    url="https://github.com/mrzxd69/my-site"
                />
            </div>

            <div class={styles.viewed}>
                <img
                    src="https://moe-counter.glitch.me/get/@mrzxd-ruuuuuu"
                    alt=""
                />
            </div>
        </div>
    )
}

export default App
