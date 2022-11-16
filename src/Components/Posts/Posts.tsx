import styles from './Posts.module.scss';
import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {getPosts} from "../../app/Reducers/postsReducer";


const Posts: React.FC = () => {
    const {posts} = useAppSelector(state => state.posts);
    const [num, setNum] = useState(0);
    const dispatch = useAppDispatch();


    let count = 5;
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    const newArr = [];

    for(let i = 0, i1 = count; i < posts.length; i+= count, i1+= count){
         newArr.push(posts.slice(i,i1));
    }




    return (
        <div className={styles.Posts}>
            <div className={styles.postsContainer}>
                {
                    newArr[num]?.map((post) => {
                        return (
                            <div key={post.id} className={styles.post}>
                                <p>{post.title}</p>
                                <ins>{post.body}</ins>
                            </div>
                        )
                    })
                }
            </div>
            {
                newArr.map((p, i)=>{
                    return <button onClick={()=> setNum(i)}>{i +1}</button>
                })
            }
        </div>
    )
}


export default Posts;

