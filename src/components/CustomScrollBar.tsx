import React, { Component } from "react";
import { Scrollbars } from 'react-custom-scrollbars-2';
import './CustomScrollBar.scss';

type IProps = {};
type IState = {};

export default class CustomScrollBar extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }
    render(): React.ReactNode {
        return(<Scrollbars
            autoHide={true}
            color={'#ff3232'}
            renderTrackVertical={({ style, ...props })=><div {...props} style={{ ...style, right: 0, top: 0, bottom: 0, width: 8 }}/>}
            renderThumbVertical={({ style, ...props })=><div {...props} style={style} className="custom-scrollbar-render-thumb thumb-horizontal"/>}
            
            renderTrackHorizontal={({ style, ...props })=><div {...props} style={{ ...style, right: 0, left: 0, bottom: 0, height: 8 }}/>}
            renderThumbHorizontal={({ style, ...props })=><div {...props} style={style} className="custom-scrollbar-render-thumb thumb-horizontal"/>}
        >
            {this.props.children}
        </Scrollbars>);
    }
}