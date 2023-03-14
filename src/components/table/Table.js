import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom';

export const Table = (props) => {
    let { tableId } = useParams();
    console.log("props", props, tableId)
    return (
        <div className='table-container'>Table</div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Table)