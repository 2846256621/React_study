import actionTypes from './actionType'
import {getPosts} from "@/services";

const startFetchBlogList = ()=>{
    return{
        type:actionTypes.START_FETCH_BLOG_LIST

    }
};
const fetchBlogListSuccess = (payload)=>{
    return{
        type:actionTypes.FETCH_BLOG_LIST_SUCCESS,
        payload
    }
};
const  fetchBlogListFailed = ()=>{
    return{
        type:actionTypes.FETCH_BLOG_LIST_FAILED
    }
};

//todo 注意dispatch写法 及传参  axios请求写在这里
export const fetchBlogList = () => (dispatch)=>{
    dispatch(startFetchBlogList());
    getPosts()
        .then(res=>{
            if(res.status === 200){
                dispatch(fetchBlogListSuccess({
                    list:res.data
                }))
            }
            else{
                dispatch(fetchBlogListFailed())
            }
        })
        .catch(err=>{
            console.log(err);
            dispatch(fetchBlogListFailed())
        })
};