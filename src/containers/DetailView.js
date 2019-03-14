import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { getListById } from '../actions/contactDataActions';
const GOOGLE_MAP_API = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyDWVxKNkVC-NVXNtu0dIcIaZ3QBGL8VxJg';

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
        const iframeSrc = `${GOOGLE_MAP_API}&q=${selectedList.address.geo.lat},${selectedList.address.geo.lng}`;
        const detailTitleClass = "col-6 col-sm-6 col-md-3 col-lg-2 detail-title detail-col";
        const detailDataClass = "col-6 col-sm-6 col-md-3 col-lg-2 detail-data detail-col";

        return (
            <div className="container wrapper">
                <div className="row justify-content-between">
                    <div className="col-sm-12 col-md-4 title-responsive">
                        <h1 className="detail-username">Username: {selectedList.username}</h1>
                    </div>
                    <div className="col-sm-12 col-md-4 title-responsive text-right">
                        <button className="back-btn" onClick={this.directToList}>
                            <i className="fas fa-chevron-left" /> Back to prev
                        </button>
                    </div>
                </div>
                <div className="container mt-5">
                    <p className="company-title">General Information</p>
                    <div className="row">
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
                            <a
                                href={`mailto:${selectedList.email}`}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                {selectedList.email}
                            </a>
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
                            {`${selectedList.address.suite}, ${selectedList.address.street},
                             ${selectedList.address.city} (${selectedList.address.zipcode})`}
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <iframe
                        title="Map by contact list address"
                        style={{ width: '100%', minHeight: '300px' }}
                        frameBorder="0"
                        src={iframeSrc}
                    />
                </div>

                <div className="container mt-5">
                    <p className="company-title">Company</p>
                    <div className="row align-items-center border-strict">
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

DetailView.propTypes = {
    selectedList: PropTypes.object
};

const mapStateToProps = (state) => ({
    selectedList: state.data.selectedList
})

const mapDispatchToProps = (dispatch) => ({
    getListById: (id) => dispatch(getListById(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailView);