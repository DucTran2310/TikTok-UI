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
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9552a57e0b326fabe47bf018cd48b10d~c5_100x100.jpeg?x-expires=1653444000&x-signature=SkSSPoOFqZJ8mHFbmWLf3BE03Uk%3D"
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
