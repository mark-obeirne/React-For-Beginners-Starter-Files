import React from 'react';
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
    myInput = React.createRef();

    goToStore = (event) => {
        // 1. Prevent form from submitting
        event.preventDefault();
        // 2. Get text from that input
        console.log(this);
        // 3. Change page to /store/store-name

    };
    render() {
        return (
            <form action="" className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                <input
                    type="text"
                    required
                    placeholder="Store Name"
                    defaultValue={getFunName()}
                    ref={this.myInput}
                />
                <button type="submit">Visit Store!</button>
            </form>
        )
    }
}

export default StorePicker;