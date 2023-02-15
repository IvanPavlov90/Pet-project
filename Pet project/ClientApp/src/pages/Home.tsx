import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';

const Home: React.FC<{}> = () => {
    const setPageTitle = () => {
        document.title = 'Home Page';
    }

    useEffect(setPageTitle, []);

    return (
        <div>
            <h1>Hello, world!</h1>
        </div>
    );
};

export default Home;
