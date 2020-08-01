import React, {Fragment, memo} from 'react'

export default memo(function Button(props) {
    const {title, clickHandler} = props;
    return (
        <Fragment>
            <button onClick={clickHandler}>{title}</button>
        </Fragment>
    )
});
