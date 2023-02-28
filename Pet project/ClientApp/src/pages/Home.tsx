import * as React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ICategoryDto } from '../../../Interfaces/CategoryDto';
import Header from '../components/Header/Header';
import { ApplicationState } from '../store';
import '../style/pages/_Home.scss';

const Home: React.FC<{}> = () => {
    const categories = useSelector<ApplicationState, ICategoryDto[]>(state => state.home.categories);
    console.log(categories);

    const setPageTitle = () => {
        document.title = 'Home Page';
    }

    useEffect(setPageTitle, []);

    return (
        <main className="main">
            <Header />
            <section></section>
            <footer></footer>
        </main>
    );
};

export default Home;
