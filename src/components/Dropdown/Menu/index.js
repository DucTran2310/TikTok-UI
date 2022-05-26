import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as DropdownWrapper } from '~/components/Dropdown';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };

    return (
        <Tippy
            interactive
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <DropdownWrapper className={cx('menu-dropdown')}>{renderItems()}</DropdownWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
