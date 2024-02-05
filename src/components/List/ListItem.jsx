    import React, {Component, Fragment} from 'react';
    import './style.css'

    export default class ListItem extends Component {
       render () {
           const { listItem, actions } = this.props;
           const hasSecondList = listItem.length > 0;
           const hasThirdList = actions.length > 0;
           return (
                <Fragment>
                    <ul>
                      {listItem.map((item) => (
                         <li key={item.id}>{item.title}</li>
                      ))}
                      <div className="bottom">
                         {hasSecondList && hasThirdList && (actions.map((action, index) => (
                            <button key={index} onClick={action.action}>{action.text}</button>
                         )))}
                      </div>
                    </ul>
                </Fragment>
           );
       }
    }