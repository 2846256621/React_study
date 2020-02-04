import {Component, Fragment} from "react";
import React from "react";
import {
    CounterBtn,
    Counter
} from '../Count'

export  default class App extends Component {
    render() {
        return (
            <Fragment>
                <CounterBtn type='decrement'>+</CounterBtn>
                <Counter/>
                <CounterBtn type='increment'>-</CounterBtn>
            </Fragment>
        );
    }
}