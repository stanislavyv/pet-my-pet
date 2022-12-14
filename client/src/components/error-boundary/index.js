import { Component } from 'react';
import styled from 'styled-components';
import BlankPage from '../shared/blank-page';

const StyledErrorBoundary = styled.section`
    width: 18.75rem;
    margin: 0 auto;
    text-align: center;
`;

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = { hasError: false, message: '' };
    }

    static getDerivedStateFromError(error) {
        // returns new state
        return {
            hasError: true,
            message: error.message,
        };
    }

    componentDidCatch(error) {
        console.log(`Error from error boundary: ${error}`);
    }

    render() {
        if (this.state.hasError) {
            return (
                <StyledErrorBoundary>
                    <BlankPage header="Error!">
                        <p>
                            There was a problem with your request, please try
                            again later. {this.state.message}
                        </p>
                    </BlankPage>
                </StyledErrorBoundary>
            );
        }

        return this.props.children;
    }
}
