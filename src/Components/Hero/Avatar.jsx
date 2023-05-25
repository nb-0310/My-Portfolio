import avatar from '../../Assets/avatar.png'
import styles from './avatar.module.scss'

const Avatar = () => {
    return (
        <div
            className={styles.avatar}
        >
            <div className={styles.circle}></div>
            <img src={avatar} alt="avatar" />
        </div>
    );
}

export default Avatar