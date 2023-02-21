import * as React from 'react';
import '../../style/components/_Search.scss';

const Search: React.FC<{}> = () => {
    return (
        <input
            type="search"
            className="search"
            placeholder="Введите наименование запасной части"
        />
    )
}

export default Search;