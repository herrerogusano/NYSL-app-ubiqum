import React from 'react';

const TableRowCell = ({children, align='left'}) => {
    return (
        <td align={align}>
            {children}
        </td>
    );
};


export default TableRowCell;