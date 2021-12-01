let checkLoginKey = (key) => {
    if (window.localStorage.getItem(key) !== null) {
        return true;
    }

    return false;
};

export { checkLoginKey };


