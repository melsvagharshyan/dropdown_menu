import styles from './Menu.module.scss';
import React from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {setOpen} from "../../app/Reducers/menuReducer";
import {IoIosArrowDown} from 'react-icons/io';
import {IoIosArrowForward} from 'react-icons/io'
import {SlArrowRight} from 'react-icons/sl';


const Menu: React.FC = () => {
    const {items} = useAppSelector(state => state.menuState);
    const dispatch = useAppDispatch();


    return (
        <div className={styles.Menu}>
            {
                items.map((p) => {
                    return (
                        <div className={styles.parentMenu} key={p.id}>
                            <div className={styles.parentContext}>
                                {p.isOpen ?
                                    <IoIosArrowDown className={styles.icon} onClick={() => dispatch(setOpen(p.id))}/> :
                                    <IoIosArrowForward className={styles.icon} onClick={() => dispatch(setOpen(p.id))}/>}
                                <p>{p.name}</p>
                            </div>
                            {
                                p.isOpen && p.links.map((l, i) => <div className={styles.childLinks} key={i}>
                                    <div>
                                        <div className={styles.linkParentContext}>
                                            {l.name}
                                            {l.items.length !== 0 && <SlArrowRight className={styles.icon}/>}
                                        </div>
                                        <div className={styles.listChild}>
                                            {l.items.map((item) => <p>{item}</p>)}
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Menu;
