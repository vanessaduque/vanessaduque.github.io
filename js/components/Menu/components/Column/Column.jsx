import React from 'react'
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { ColumnsWrapper, Subtitle } from "./styled";

const Columns = ({items}) => (
    <ColumnsWrapper>
        { items.map(collection => (
                <Subtitle key={`123_${collection.title}`}>
                    <NavLink to={collection.url}>
                        <h2>{collection.title}</h2>
                    </NavLink>
                </Subtitle>
            )
        )}
    </ColumnsWrapper>
)

export default Columns

Columns.propTypes = {
    items: PropTypes.string.isRequired,
};

  

