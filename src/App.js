    import React, {Component, Fragment} from 'react';
    import './App.css';
    import Todo from "./components/Todo/Todo";

    export default class App extends Component {
        state = {
            list: [
                {
                    id: 1,
                    title: `Task 1`
                },
                {
                    id: 2,
                    title: `Task 2`
                },
                {
                    id: 3,
                    title: `Task 3`
                },
                {
                    id: 4,
                    title: `Task 4`
                }
            ]
        }
        render() {
            const { list } = this.state;

            return (
                <Fragment>
                <Todo list={list}/>
                </Fragment>
            );
        }
    }

