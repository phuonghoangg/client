import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({ to, href, naptien, leftIcon, buy, className, outline, icon, tailen, onClick, children }) {
    let Comp = 'button';

    const props = {
        onClick,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        naptien,
        tailen,
        outline,
        buy,
        icon,
        leftIcon,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon-btn')}>{leftIcon}</span>}
            <span className={cx('title')}> {children}</span>
        </Comp>
    );
}

export default Button;
