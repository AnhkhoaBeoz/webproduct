import React, {useEffect, useState} from 'react';
import './ProductPageList.scss';
import ProductCard from '../ProductCard/ProductCard.jsx';
import useData from '../../hooks/useData.js';
import Loading from '../Loading/Loading.jsx';
import {useSearchParams} from 'react-router-dom';
import {set} from "zod";
import Pagination from "../../Common/Pagination.jsx";

function ProductPageList() {
    const [search, setSearch] = useSearchParams();
    const category = search.get("category");
    const [page, setPage] = useState(1);

    // Fetch product data based on category using custom hook
    const {data, error, loading} = useData('/products', {
        params: {
            category,
            page
        },
    }, [category, page]);

    useEffect(() => {
        setPage(1);
    }, [category]);

    const handlePageChange = (page) => {
        const currentParams = Object.fromEntries([...search]);

        setSearch({ ...currentParams, page: parseInt(currentParams.page) + 1 });
    };
    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, clientHeight, scrollHeight } =
                document.documentElement;
            if (
                scrollTop + clientHeight >= scrollHeight - 1 &&
                !loading &&
                data &&
                page < data.totalPages
            ) {
                console.log("Reached to Bottom!");
                setPage((prev) => prev + 1);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [data, loading]);

    return (
        <div className="product_page_list">
            <h2 className="product_page_list_heading">PRODUCT LIST</h2>
            <div className="product_page_list_cards">
                {error && <em className="form_error">{error}</em>}
                {loading && <Loading/>}
                {data &&
                    data.products.map(product => (
                        <ProductCard key={product._id} item={product}/>
                    ))}

            </div>
            {/*{data && (<Pagination*/}
            {/*    totalPosts={data.totalProducts}*/}
            {/*    postsPerPage={8}*/}
            {/*    onClick={handlePageChange}*/}
            {/*    currentPage={page}*/}
            {/*/>)}*/}
        </div>
    );


}

export default ProductPageList;