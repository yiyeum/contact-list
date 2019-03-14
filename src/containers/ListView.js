import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import Search from '../components/Search';
import ListTable from '../components/ListTable';
import ResultMessage from '../components/ResultMessage';
import { getLists } from '../actions/contactDataActions';

class ListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
            searchResult: [],
            resultMessage: ''
        }
        this.props.getLists();
    }

    /**
     * Add keypress event for
     * searching by enter key
     */
    componentDidMount() {
        window.addEventListener('keypress', this.searchByEnter);
    }

    /**
     * When the search input is cleared,
     * clear the result message and display all the 
     * contact lists
     */
    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchInput !== this.state.searchInput && this.state.searchInput.length === 0) {
            this.setState({ resultMessage: '' });
            this.props.history.push('/');
        }
    }

    /**
     * Onchange function triggered by search input value changes
     * and update the state
     */
    searchHandleChange = e => {
        const { value } = e.target;
        this.setState({ searchInput: value });
    }

    /**
     * Navigate to detail page by contact id
     */
    directToDetailView = (id) => {
        this.props.history.push(`/contacts/${id}`);
    }

    /**
     * Returns the data which includes 
     * the keyword in name value
     */
    searchKeyword = () => {
        const { searchInput } = this.state;
        const query = searchInput.toLowerCase().trim();
        return (this.props.lists.filter(list => list.name.toLowerCase().includes(query)));
    }

    /**
     * Update the searchResult state and 
     * result message with the number of result
     */
    setResultSearch = () => {
        const { searchInput } = this.state;
        if (searchInput.trim().length > 0) {
            this.props.history.push(`/search/${searchInput}`);
            this.setState({ searchResult: this.searchKeyword() }, this.setResultMessage);
        } else {
            this.props.history.push('/');
        }
    }

    /**
     * Update the result message based on 
     * the number of result lists
     */
    setResultMessage = () => {
        if (this.state.searchResult.length > 1) {
            this.setState({ resultMessage: `${this.state.searchResult.length} results found` })
        } else {
            this.setState({ resultMessage: `${this.state.searchResult.length} result found` })
        }
    }

    /**
    * Search button triggered by enter key
    */
    searchByEnter = e => {
        if (e.charCode === 13) {
            this.setResultSearch();
        }
    }

    /**
     * Remove keypress event
     * when this component unmounts
     */
    componentWillUnmount() {
        window.removeEventListener('keypress', this.searchByEnter);
    }

    render() {
        const { lists, error } = this.props;
        const { searchResult, resultMessage } = this.state;
        const data = (this.props.match.path === '/search/:searchTerm') ? searchResult : lists;
        if (error.status) {
            return (
                <p className="error-message">{error.message}</p>
            )
        }
        return (
            <div className="container wrapper">
                <Search
                    searchInput={this.state.searchInput}
                    searchHandleChange={this.searchHandleChange}
                    setResultSearch={this.setResultSearch}
                    searchByEnter={this.searchByEnter}
                />
                <ResultMessage
                    message={resultMessage}
                />
                <ListTable
                    contactList={data}
                    directToDetailView={this.directToDetailView}
                />
            </div>
        );
    }
}

ListView.propTypes = {
    lists: PropTypes.array,
    error: PropTypes.object
};

const mapStateToProps = (state) => ({
    lists: state.data.lists,
    error: state.common.error
})

const mapDispatchToProps = (dispatch) => ({
    getLists: () => dispatch(getLists())
})

export default connect(mapStateToProps, mapDispatchToProps)(ListView);