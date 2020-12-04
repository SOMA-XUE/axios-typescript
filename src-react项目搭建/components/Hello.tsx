import * as React from 'react';

interface IProps {
    title: string,
    age: number,
    work?: number,
    clickHandle22: any,
}

interface IState {
    count: number,
}

export default class Hello extends React.Component<IProps, IState> {
    public state = {
        count: 11,
    }

    public constructor(props:IProps) {
        super(props)

        // this.state = {
        //     count: 11,
        // }

        // this.clickHandle = this.clickHandle.bind(this)
    }

    // public clickHandle () {
    //     let {count} = this.state;
    //     this.setState({
    //         // count: ++this.state.count,
    //         count: ++count,

    //     })
    // }

    public clickHandle = () => {
        let {count} = this.state;
        this.setState({
            // count: ++this.state.count,
            count: ++count,
        })
    }

    public clickHandle22 = () => {
        this.props.clickHandle22('xxxxxxx')
    }

    public render() {
        const {
            title, age, work,
        } = this.props;
        return (
            <div>
                hello, {title}, {age}, {work}
                <br />
                {this.state.count}
                <button onClick={this.clickHandle}>click count</button>
                <br/>
                <button onClick={this.clickHandle22}>事件传值</button>
            </div>
        )
    }
}