    import React, {Component, Fragment} from 'react';
    import ListItem from "../List/ListItem";

    export default class Todo extends Component {
        state = {
            firstList:  this.props.list ,
            secondList: [],
            thirdList: [],
        }

        componentDidMount() {
            this.setState({ firstList: this.props.list });
        }

        componentDidUpdate(prevProps) {
            if (prevProps.list !== this.props.list) {
                this.setState({ firstList: this.props.list });
            }
        }

        transferToSecond = () => {
            const { firstList, secondList } = this.state;
            if (firstList.length > 0) {
                const updatedFirstList = firstList.slice(1);
                const updatedSecondList = [firstList[0], ...secondList];
                this.setState({
                    firstList: updatedFirstList,
                    secondList: updatedSecondList,
                    showSecondList: false,
                });
            }
        };

        transferToFirst = () => {
            const { firstList, secondList } = this.state;
            if (secondList.length > 0) {
                const updatedSecondList = secondList.slice(1);
                const updatedFirstList = [secondList[0], ...firstList];
                this.setState({
                    firstList: updatedFirstList,
                    secondList: updatedSecondList,
                });
            }
        };

        transferToThird = () => {
            const { secondList, thirdList } = this.state;
            if (secondList.length > 0) {
                const updatedSecondList = secondList.slice(1);
                const updatedThirdList = [secondList[0], ...thirdList];
                this.setState({
                    secondList: updatedSecondList,
                    thirdList: updatedThirdList,
                });
            }
        };

        removeLastItem = () => {
            const { thirdList } = this.state;
            if (thirdList.length > 0) {
                const updatedThirdList = thirdList.slice(0, -1);
                this.setState({ thirdList: updatedThirdList });
            }
        };
        render() {
            const { firstList, secondList, thirdList} = this.state;
            return (
                <Fragment>
                    <ListItem
                        listItem={firstList}
                        actions={[
                            { text: 'Transfer first to right', action: this.transferToSecond },
                        ]}
                    />
                    <ListItem
                        listItem={secondList}
                        actions={[
                            { text: 'Transfer second to left', action: this.transferToFirst },
                            { text: 'Transfer second to right', action: this.transferToThird },
                        ]}
                    />
                    <ListItem
                        listItem={thirdList}
                        actions={[{ text: 'Remove last item', action: this.removeLastItem }]}
                    />
                </Fragment>
            );
        }
    }
