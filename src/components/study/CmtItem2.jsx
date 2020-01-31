import React from 'react';
import cssobj from '@/css/cmtitem.css';
export  default function CmtItem(props) {
    return <div className={cssobj.item}>
        <h3 className={cssobj.title}>评论人：{props.user}</h3>
        <p>评论内容：{props.content}</p>
    </div>
}