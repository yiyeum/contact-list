import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const ListTable = ({ contactList, directToDetailView }) => {
    return (
        <div className="list-table-wrapper">
            <Table className="list-table table-desktop">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        (contactList || []).map(list =>
                            <TableRow key={list.id}>
                                <TableCell>{list.id}</TableCell>
                                <TableCell>{list.name.split(' ')[0]}</TableCell>
                                <TableCell>{list.name.split(' ')[1]}</TableCell>
                                <TableCell>
                                    <button
                                        className="view-btn"
                                        onClick={() => directToDetailView(list.id)}
                                    >View
                                    </button>
                                </TableCell>
                            </TableRow>)
                    }

                </TableBody>
            </Table>
            <Table className="table-mobile">
                {
                    (contactList || []).map(list =>
                        <TableBody key={list.id}>
                            <TableRow>
                                <TableCell component="th">ID</TableCell>
                                <TableCell>{list.id}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th">First Name</TableCell>
                                <TableCell>{list.name.split(' ')[0]}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th">Last Name</TableCell>
                                <TableCell>{list.name.split(' ')[1]}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan="2" style={{ padding: 0 }}>
                                    <button
                                        className="view-btn"
                                        onClick={() => directToDetailView(list.id)}>View
                                    </button>
                                </TableCell>
                            </TableRow>
                        </TableBody>)
                }
            </Table>
        </div>
    );
}

export default ListTable;