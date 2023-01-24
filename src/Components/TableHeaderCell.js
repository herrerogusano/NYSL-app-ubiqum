import React from 'react';

const TableHeaderCell = ({children, scope = ''}) => {
    return (
        <th scope={scope}>
            {children}
        </th>
    );
};

export default TableHeaderCell;