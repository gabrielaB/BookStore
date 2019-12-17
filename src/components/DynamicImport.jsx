import React, { Component } from 'react';

export default function dynamicImport(importComponent) {
    class DynamicImport extends Component {
        constructor(props) {
            super(props);

            this.state = {
                Component: null
            };
        }

        async componentDidMount() {
            const { default: component } = await importComponent();

            this.setState(() => ({ Component: component }));
        }

        render() {
            const { Component } = this.state;

            return Component ? <Component {...this.props} /> : null;
        }
    };

    return DynamicImport;
};