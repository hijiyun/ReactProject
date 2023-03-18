    import React from "react";
    import Button from "react-bootstrap/Button";
    import Table from "react-bootstrap/Table";
    const ReactTable = ({ header, data, deleteItem, openEditForm }) => {
    return (
        <Table striped bordered hover>
        <thead>
            <tr>
            {header.map((title) => (
                <th>{title}</th>
            ))}
            </tr>
        </thead>
        <tbody>
            {data.length > 0 ? (
            data.map((item, index) => (
                <tr>
                <th>{index}</th>
                <th>{item.sku}</th>
                <th>{item.name}</th>
                <th>{item.price}</th>
                <th>
                    {Object.keys(item.stock).map((size) => (
                    <div>
                        {size}:{item.stock[size]}
                    </div>
                    ))}
                </th>
                <th>
                    <img src={item.image} width={100} />
                </th>
                <th>{item.status}</th>
                <th>
                    <Button
                    size="sm"
                    variant="danger"
                    onClick={() => deleteItem(item._id)}
                    className="mr-1"
                    >
                    -
                    </Button>
                    <Button size="sm" onClick={() => openEditForm(item)}>
                    Edit
                    </Button>
                </th>
                </tr>
            ))
            ) : (
            <tr>No Data to show</tr>
            )}
        </tbody>
        </Table>
    );
    };
    export default ReactTable;
