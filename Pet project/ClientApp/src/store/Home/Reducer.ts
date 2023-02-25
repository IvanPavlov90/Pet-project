import IHomeState from "./State";

const defaultState: IHomeState = {
    categories: []
}

const home = (): IHomeState => {
    return defaultState;
}

export default home;
