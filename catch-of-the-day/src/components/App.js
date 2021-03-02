import React from 'react';
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };
    addFish = (fish) => {
        // 1 - Take a copy of the existing state
        const fishes = { ...this.state.fishes };
        // 2 - Add new fish to that fishes variable
        fishes[`fish${Date.now()}`] = fish; // Date.now() provides you with a unique identifier (provided you're not adding more than one fish a millisecond)
        // 3 Set the new fishes object to state
        this.setState({
            fishes: fishes
        })
    }
    
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Daily" />
                </div>
                <Order />
                <Inventory addFish={this.addFish} />
            </div>
        );
    }
}

export default App;