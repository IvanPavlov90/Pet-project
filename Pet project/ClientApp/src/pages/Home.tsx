import * as React from 'react';
import { useEffect } from 'react';
import Header from '../components/Header/Header';
import '../style/pages/_Home.scss';

const Home: React.FC<{}> = () => {
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
