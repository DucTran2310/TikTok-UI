import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Wrapper as DropdownWrapper } from '~/components/Dropdown';
import Header from './Header';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, hideOnClick = false, items = [], onChange }) {
    // Object trong mảng
    const [history, setHistory] = useState([{ data: items }]);

    // Lấy phần tử cuối mảng
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            // cái nào có children thì sẽ trả về MenuItem
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onCLick={() => {
                        if (isParent) {
                            // push vào cuối mảng array mới
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            interactive
            delay={[0, 700]}
            offset={[12, 8]}
            placement="bottom-end"
            // Bấm vào logo ko ẩn menu
            hideOnClick={hideOnClick}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <DropdownWrapper className={cx('menu-dropdown')}>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        <div className={cx('menu-scroll')}>{renderItems()}</div>
                    </DropdownWrapper>
                </div>
            )}
            // khi đang ở menu c2 bỏ chuột ra, rê vào lại sẽ trở lại menu c1
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
