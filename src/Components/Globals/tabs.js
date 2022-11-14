import React from 'react';
import { useState } from 'react';

export function Tabs1(props) {
    const [toggle , setToggle] = useState(0);
    const {tablist} = props.props ? props.props : false;

    return ( <>
        <div className='bloc-tabs'>
                {
                     tablist ?  tablist.map( (el, index) => <div key={"tabskey" + index}
                      className={toggle === index ? 'tabs active-tabs' : 'tabs' }
                      onClick={ () => setToggle(index)}>{el.label}</div>)
                    : "Il n'y a pas de props tabs list"
                }
        </div>

        <div className='content-tabs'>
                {
                    tablist ? tablist[toggle].render : "Le Tableau semble etre vide"
                }
        </div>
    </>
    );
}
