import MyInput from './UI/input/MyInput'

const SearchEngine = (props) => {
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
                                {...props}/>
                            <div class="vertical-btn">
                                <button
                                    class="button"
                                    // onClick={props.startSearch}
                                    >
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