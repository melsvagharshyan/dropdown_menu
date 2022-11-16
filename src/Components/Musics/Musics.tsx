import styles from './Musics.module.scss';
import React, {useRef, useState} from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';




const Musics: React.FC = () => {
    const [stop, setStop] = useState<boolean>(true);


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className={styles.Musics} onMouseEnter={()=> setStop(false)} onMouseLeave={()=> setStop(true)}>
            <Carousel responsive={responsive}
                      className={styles.carousel}
                      infinite={true}
                      showDots = {true}
            >
                <div  className={styles.item}>Item 1</div>
                <div className={styles.item}>Item 2</div>
                <div className={styles.item}>Item 3</div>
                <div className={styles.item}>Item 4</div>
            </Carousel>;
        </div>
    )
}


export default Musics;





