import MyInput from './UI/input/MyInput'
import '../css/search.css'

const SearchEngine = (props) => {
    return (
        <div class="search">
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