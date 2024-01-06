import styles from "../styles/card.module.css";

interface IProps {
    title: string,
    descripion: string,
    url: string,
    technologies: string[]
}

export const Card = (props: IProps) => {
    return (
        <div class={styles.card}>
            <div class={styles.container_title}>
                <a class={styles.title} href={props.url}>
                    {props.title}
                </a>
            </div>

            <div class={styles.description}>
                {props.descripion}
            </div>

            <div class={styles.tech_container}>
                {props.technologies.map(tech => (
                    <div class={styles.tech}>{tech}</div>
                ))}
            </div>
        </div>
    )
}