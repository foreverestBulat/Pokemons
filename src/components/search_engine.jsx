import React, {useMemo, useState} from "react";
import MyInput from './UI/input/MyInput'

const SearchEngine = (filter, setFilter) => {
    return (
        <div class="search">
            <link rel="stylesheet" href="static/css/search.css"/>
            <div class="horizontal">
                <div class="vertical">
                    <div class="block-text">
                        <div class="text">Who are you looking for?</div>
                    </div>
                    <form>
                        <div class="form">
                            <MyInput
                                value={filter.query}
                                onChange={e => setFilter({...filter, query: e.target.value})}
                                placeholder="pokemon search..."
                            />
                            <div class="vertical-btn">
                                <button class="button">
                                GO
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchEngine;