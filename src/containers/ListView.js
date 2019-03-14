import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import ListTable from '../components/ListTable';
import { getLists } from '../actions/contactDataActions';

class ListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
        }
        this.props.getLists();
    }

    /**
     * Onchange function triggered by search input value changes
     * and update the state
     */
    searchHandleChange = e => {
        const { value } = e.target.value;
        this.setState({ searchInput: value });
    }

    directToDetailView = (id) => {
        this.props.history.push(`/contacts/${id}`);
    }

    render() {
        const { searchInput } = this.state;
        const { lists } = this.props;

        return (
            <div className="container wrapper">
                <Search
                    searchInput={searchInput}
                    searchHandleChange={this.searchHandleChange}
                />
                <ListTable contactList={lists} directToDetailView={this.directToDetailView} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    lists: state.data.lists
})

const mapDispatchToProps = (dispatch) => ({
    getLists: () => dispatch(getLists())
})

export default connect(mapStateToProps, mapDispatchToProps)(ListView);