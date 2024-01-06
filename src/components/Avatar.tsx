import styles from "../styles/avatar.module.css";
import avatar from "../assets/avatar.jpg";

interface IProps {
    width: number,
    height: number
}

export const Avatar = (props: IProps) => {
    return (
        <div class={styles.container}>
            <img
                class={styles.avatar}
                src={avatar}
                width={props.width}
                height={props.height}
                alt=""
            />
        </div>
    )
}