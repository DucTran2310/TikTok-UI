import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fhan4-2.fna.fbcdn.net/v/t1.6435-1/117112375_2718622871746648_7562445710068070383_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeHyr_GT9hGHGAasCB1S6uOqZpd7ykdaGqpml3vKR1oaqq5v5ZVbnC84OhuKI_ynfGjl6DcLBU4NAr5NmROUivuX&_nc_ohc=q4bru86pmpgAX8mDRHL&_nc_ht=scontent.fhan4-2.fna&oh=00_AT8CC5kherlnbPdjLIhEp6oGBuhFZt37blwyC9imCgynAQ&oe=62B55317"
                alt="accountuser"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>AdStar</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>adstar2310</span>
            </div>
        </div>
    );
}

export default AccountItem;
