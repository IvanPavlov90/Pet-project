import * as React from 'react';
import '../../style/components/_Header.scss';
import Search from '../Search/Search';

const Header: React.FC<{}> = () => {
    return (
        <header>
            <div className="d-flex justify-content-between">
                <ul className="list-group list-group-horizontal justify-content-between info-list">
                    <li className="list-group-item flex-fill info-list__item">О компании</li>
                    <li className="list-group-item flex-fill info-list__item">Доставка</li>
                    <li className="list-group-item flex-fill info-list__item">Новости</li>
                    <li className="list-group-item flex-fill info-list__item">Акции</li>
                    <li className="list-group-item flex-fill info-list__item">Услуги</li>
                </ul>
                <button type="button" className="btn btn-primary info-btn">Войти</button>
            </div>
            <div className="d-flex justify-content-between">
                <button type="button" className="btn btn-success catalog-btn">Каталог</button>
                <Search />
                <img src="/img/icons/basket.png" alt="Корзина" className="basket-img" />
                <div className="d-flex flex-column">
                    <span>Сумма покупок</span>
                    <span>0 руб.</span>
                </div>
            </div>
        </header>
    )
}

export default Header;