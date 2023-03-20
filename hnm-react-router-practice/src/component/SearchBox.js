    import React, { useState } from "react";
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

    import { faSearch } from "@fortawesome/free-solid-svg-icons";
    import { useSearchParams } from "react-router-dom";
    const SearchBox = ({ searchQuery, setSearchQuery }) => {
    const [query] = useSearchParams();
    const [keyword, setKeyword] = useState(query.get("name") || "");
    const onCheckEnter = (event) => {
        if (event.key === "Enter") {
        setSearchQuery({ ...searchQuery, name: event.target.value });
        }
    };
    return (
        <div className="search-box">
        <FontAwesomeIcon icon={faSearch} />
        <input
            type="text"
            placeholder="제품검색"
            onKeyPress={onCheckEnter}
            onChange={(event) => setKeyword(event.target.value)}
            value={keyword}
        />
        </div>
    );
    };

    export default SearchBox;
