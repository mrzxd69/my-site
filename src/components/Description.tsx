import styles from "../styles/description.module.css";
import arrow from "../assets/Arrow.png";

export const Description = () => {

    return (
        <div class={styles.container}>
            <div class={styles.description}>
            Hard times give birth to strong<span class={styles.kittens}> kittens<img
                class={styles.arrow}
                src={arrow}
                alt=""
            /></span>💫<br />
            i'm master of sleep and relaxation,<br />
            beginner back-end developer
            </div>
        </div>
    )
}