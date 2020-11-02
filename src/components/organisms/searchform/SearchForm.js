import React from "react";
import Input from "../../atoms/input/Input";
import Button from "../../atoms/button/Button";

//TODO::refactor for dinamic isMobile;
const isMobile = false;

const inputConfig = {
    placeholder: 'What news are you looking for?',
    name: 'search-term',
    size: '30',
    maxength: '128'
};

const SearchForm = props => {
    return (
        <div className="search">
            <form className='search-form'>
                <Input customClass="form-text"
                       elementType="input"
                       elementConfig={ inputConfig } />
                {
                    isMobile ?
                    <Button as="div" >
                        <i className="fa fa-times" aria-hidden="true" />
                    </Button>
                    : <Button type="submit" className="btn">
                        <i className="fa fa-search" aria-hidden="true" />
                      </Button>
                }
                <div className="description">
                    Find fresh news with News Portal
                </div>
            </form>
        </div>
    );
}

export default SearchForm;