import Tippy from '@tippyjs/react/headless';
import WrapperTippy from '../WrapperTippy';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import MenuItems from './MenuItems';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const renderMenuItems = () => {
        return items.map((item, index) => <MenuItems key={index} data={item} />);
    };

    return (
        <div>
            <Tippy
                interactive
                render={(attrs) => (
                    <div className={cx('profile-menu')} tabIndex="-1" {...attrs}>
                        <WrapperTippy className={cx('menu-popper')}>{renderMenuItems()}</WrapperTippy>
                    </div>
                )}
                placement="bottom-start"
                hideOnClick={false}
            >
                {children}
            </Tippy>
        </div>
    );
}

export default Menu;
