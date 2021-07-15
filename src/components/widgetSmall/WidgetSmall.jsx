import React from 'react';
import "./WidgetSmall.css";
import cuong from "../../images/cuong.jpg";
import thang from "../../images/thang.jpg";
import { Visibility } from '@material-ui/icons';

export default function WidgetSmall() {
    return (
        <div className="widgetSmall">
            <span className="widgetSmallTitle">New join members</span>
            <ul className="widgetSmallList">
                <li className="widgetSmallListItem">
                    <img src={cuong} alt="" className="widgetSmallImg" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUsername">Vũ Ngọc Cường</span>
                        <span className="widgetSmallUserJob">Software Engineer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSmallIcon" />
                    </button>
                </li>
                <li className="widgetSmallListItem">
                    <img src={thang} alt="" className="widgetSmallImg" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUsername">Nguyễn Hữu Thắng</span>
                        <span className="widgetSmallUserJob">Software Engineer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSmallIcon" />
                    </button>
                </li>
            </ul>
        </div>
    )
}
