import * as React from 'react';
import '../../style/components/_Header.scss';

const Header: React.FC<{}> = () => {
    return (
        <header>
            <div className="d-flex justify-content-around">
                <ul className="list-group list-group-horizontal justify-content-between info-list">
                    <li className="list-group-item flex-fill info-list__item">О компании</li>
                    <li className="list-group-item flex-fill info-list__item">Доставка</li>
                    <li className="list-group-item flex-fill info-list__item">Новости</li>
                    <li className="list-group-item flex-fill info-list__item">Акции</li>
                    <li className="list-group-item flex-fill info-list__item">Услуги</li>
                </ul>
                <button type="button" className="btn btn-primary info-btn">Войти</button>
            </div>
        </header>
    )
}

export default Header;