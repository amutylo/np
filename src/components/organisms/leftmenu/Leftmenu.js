import React, { useEffect, useState } from 'react';
import Api from '../../../logic/Api';
import RenderLeftMenu from './RenderLeftMenu';
//TODO:: Move getMenuItems to General context.

const Leftmenu = props => {
    const[items, setItems] = useState([]);

    useEffect(() => {
        Api.getMenuItems()
            .then(
                res => {
                    const links =
                        res.data.data && res.data.data.menuByName && res.data.data.menuByName.links
                            ? res.data.data.menuByName.links
                            : [];
                    setItems(links);
                })
            .catch( error => console.log('error:', error));
        }, []
    );

    return (
        <RenderLeftMenu items={items} />
    );
};

export default Leftmenu;
