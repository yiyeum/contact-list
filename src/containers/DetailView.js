import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getListById } from '../actions/contactDataActions';

class DetailView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id
        }
        this.props.getListById(this.state.id);
    }

    directToList = () => {
        this.props.history.push('/');
    }

    render() {
        const { selectedList } = this.props; 
        const detailTitleClass = "col-6 col-sm-6 col-md-3 col-lg-2 detail-title detail-col";
        const detailDataClass = "col-6 col-sm-6 col-md-3 col-lg-2 detail-data detail-col";

        return (
            <div className="container wrapper">
                <div className="row justify-content-between">
                    <div className="col-md-4">
                        <h1 className="detail-username">yiyeum</h1>
                    </div>
                    <div className="col-md-4 text-right">
                        <button className="back-btn" onClick={this.directToList}><i className="fas fa-chevron-left" /> Back to prev</button>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row align-items-center">
                        <div className={detailTitleClass}>
                            ID
                    </div>
                        <div className={detailDataClass}>
                            {selectedList.id}
                        </div>
                        <div className={detailTitleClass}>
                            First Name
                        </div>
                        <div className={detailDataClass}>
                            {selectedList.name.split(' ')[0]}
                        </div>
                        <div className={detailTitleClass}>
                            Last Name
                        </div>
                        <div className={detailDataClass}>
                            {selectedList.name.split(' ')[1]}
                        </div>
                        <div className={detailTitleClass}>
                            Email
                    </div>
                        <div className={detailDataClass}>
                            {selectedList.email}
                        </div>
                        <div className={detailTitleClass}>
                            Phone
                    </div>
                        <div className={detailDataClass}>
                            {selectedList.phone}
                        </div>
                        <div className={detailTitleClass}>
                            Website
                    </div>
                        <div className={detailDataClass}>
                            {selectedList.website}
                        </div>
                        <div className="col-6 col-md-3 col-lg-2 detail-title detail-col">
                            Address
                    </div>
                        <div className="col-6 col-md-9 col-lg-10 detail-data detail-col">
                            {`${selectedList.address.suite}, ${selectedList.address.street}, ${selectedList.address.city} (${selectedList.address.zipcode})`}
                        </div>
                    </div>
                </div>
                <div className="container">
                    Map comes here
            </div>
                <div className="container mt-5">
                    <p className="company-title">Company</p>
                    <div className="row align-items-center">
                        <div className={detailTitleClass}>
                            Name
                    </div>
                        <div className={detailDataClass}>
                            {selectedList.company.name}
                        </div>
                        <div className={detailTitleClass}>
                            Phrase
                    </div>
                        <div className={detailDataClass}>
                            {selectedList.company.catchPhrase}
                        </div>
                        <div className={detailTitleClass}>
                            bs
                        </div>
                        <div className={detailDataClass}>
                            {selectedList.company.bs}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    selectedList: state.data.selectedList
})

const mapDispatchToProps = (dispatch) => ({
    getListById: (id) => dispatch(getListById(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailView);