import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Sidebar from "../component/Sidebar";
import SearchBox from "../component/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../action/productAction";
import NewItemDialog from "../component/NewItemDialog";
import ReactTable from "../component/ReactTable";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ColorRing } from "react-loader-spinner";
import * as types from "../constants/product.constants";
import ReactPaginate from "react-paginate";
import { useSearchParams, useNavigate } from "react-router-dom";

    const AdminProduct = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useSearchParams();
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.product.loading);
    const productList = useSelector((state) => state.product.productList);

    const [searchQuery, setSearchQuery] = useState({
        page: query.get("page") || 1,
        name: query.get("name") || "",
    });
    const page = query.get("page");
    const error = useSelector((state) => state.product.error);
    const [mode, setMode] = useState("new");
    const totalPageNum = useSelector((state) => state.product.totalPageNum);
    const tableHeader = [
        "#",
        "Sku",
        "Name",
        "Price",
        "Stock",
        "Image",
        "Status",
        "",
    ];

    useEffect(() => {
        if (error && error !== "") {
        toast.error(error, { theme: "colored" });
        }
    }, [error]);
    useEffect(() => {
        dispatch(productActions.getProductList({ ...searchQuery }));
    }, [query]);

    useEffect(() => {
        console.log("pp", searchQuery);
        const url = Object.keys(searchQuery)

        .map((field) => {
            if (searchQuery[field] === "") return;
            return `${field}=${encodeURIComponent(searchQuery[field])}`;
        })
        .join("&");
        navigate("?" + url);
    }, [searchQuery]);

    const deleteItem = (id) => {
        dispatch(productActions.deleteProduct(id));
    };
    const openEditForm = (product) => {
        setMode("edit");
        console.log("here", product);
        dispatch({ type: types.SET_SELECTED_PRODUCT, payload: product });
        dispatch({ type: types.TOGGLE_ITEM_DIALOG });
    };
    const handleClickNewItem = () => {
        setMode("new");
        dispatch({ type: types.TOGGLE_ITEM_DIALOG });
    };

    const handlePageClick = ({ selected }) => {
        setQuery({ page: selected + 1 });
    };
    if (loading) {
        return (
        <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
        );
    }
    return (
        <div>
        <Container fluid>
            <Row>
            <Col xs={2} id="sidebar-wrapper">
                <Sidebar />
            </Col>
            <Col xs={10} id="page-content-wrapper">
                <Container>
                <div className="mt-2">
                    <SearchBox
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    />
                </div>
                <Button className="mt-2 mb-2" onClick={handleClickNewItem}>
                    Add New Item +
                </Button>
                {error && (
                    <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    >
                    {error}
                    </ToastContainer>
                )}
                <ReactTable
                    header={tableHeader}
                    data={productList}
                    deleteItem={deleteItem}
                    openEditForm={openEditForm}
                />
                <ReactPaginate
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={totalPageNum}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    // initialPage={1} //TODO: 이거 대신할거없나?
                />
                </Container>
            </Col>
            </Row>
        </Container>
        <NewItemDialog mode={mode} />
        </div>
    );
    };

export default AdminProduct;
