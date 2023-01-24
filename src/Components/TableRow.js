import React from 'react';

const TableRow = ({children, navigateTo, cursor}) => <tr style={{cursor:cursor}} onClick={() => navigateTo?.()}>{children}</tr>




export default TableRow;