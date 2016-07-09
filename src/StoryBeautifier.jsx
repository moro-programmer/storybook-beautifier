import React, {Component, PropTypes} from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string'
import Highlight from 'react-highlight';

class StoryBeautifier extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSource: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle(event) {
        event.preventDefault();
        this.setState({showSource: !this.state.showSource})
    }

    render() {
        const {children} = this.props;
        const {showSource} = this.state;
        const linkText = showSource ? 'hide additional info' : 'show additional info';
        let src = showSource ? <Highlight className='html'>{reactElementToJSXString(children)}</Highlight> : undefined;

        return (
            <div>
                {children}
                <a href="" onClick={this.toggle} style={{float:'right'}}>{linkText}</a>
                <div style={{clear:'both'}}></div>
                {src}
            </div>
        );
    }
}

StoryBeautifier.propTypes = {
    children: PropTypes.node
};

export default StoryBeautifier;
