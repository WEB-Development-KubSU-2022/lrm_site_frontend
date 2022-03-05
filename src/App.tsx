import React, { useState } from 'react';

import { AppShell } from '@mantine/core';

import MyHeader from './components/Header/MyHeader';
import LeftMenu from './components/LeftMenu/LeftMenu';
import MainBody from './components/MainBody/MainBody';

const App = () => {

    const [openedMenu, setOpenedMenu] = useState(false);

    return (
        <AppShell
            navbarOffsetBreakpoint="sm"
            fixed
            header={
                <MyHeader openedMenu={openedMenu} setOpenedMenu={setOpenedMenu} />
            }
            styles={{ main: { padding: 0 }, body: { padding: 0 } }}
        >
            <LeftMenu openedMenu={openedMenu} setOpenedMenu={setOpenedMenu} />

            <MainBody />
        </AppShell>
    );
}

export default App;
