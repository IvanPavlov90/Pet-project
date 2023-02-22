import * as React from 'react';
import { useState } from 'react';
import '../../style/components/_Header.scss';
import Catalog from '../Catalog/Catalog';
import Search from '../Search/Search';

interface IHeaderState {
    catalogShow: boolean;
}

const Header: React.FC<{}> = () => {
    const [headerState, setHeaderState] = useState<IHeaderState>({
        catalogShow: false
    });

    const renderCatalog = (): JSX.Element | null => {
        return headerState.catalogShow ? <Catalog /> : null
    }

    const renderInfoList = (): JSX.Element => {
        const links: string[] = ["О компании", "Доставка", "Новости", "Акции", "Услуги"];

        return (
            <ul className="list-group list-group-horizontal justify-content-between info-list">
                {links.map(
                    link => <li className="list-group-item flex-fill info-list__item">{link}</li>
                )}
            </ul>
        )
    }

    return (
        <header>
            <div className="d-flex justify-content-between">
                {renderInfoList()}
                <button type="button" className="btn btn-primary info-btn">Войти</button>
            </div>
            <div className="d-flex justify-content-between">
                <button
                    type="button"
                    className="btn btn-success catalog-btn"
                    onClick={() => setHeaderState({ ...headerState, catalogShow: !headerState.catalogShow })}
                >
                    Каталог
                </button>
                <Search />
                <button className="basket-btn">
                    <span className="badge badge-pill badge-success basket-counter">0</span>
                    <img src="/img/icons/basket.png" alt="Корзина" className="basket-img" />
                </button>
                <div className="d-flex flex-column basket-info">
                    <span>Сумма покупок</span>
                    <span>0 руб.</span>
                </div>
            </div>
            {renderCatalog()}
        </header>
    )
}

export default Header;