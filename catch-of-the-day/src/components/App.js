import React from 'react';
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish"

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
    loadSampleFishes = () => {
        this.setState({ fishes: sampleFishes })
    }
    addToOrder = (key) => {
        // 1 - take a copy of existing order state
        const order = { ...this.state.order };
        // 2 - either add to order or update the number in order
        order[key] = order[key] + 1 || 1;
        // 3 - set the new order to state
        this.setState({
            order: order
        })
    }
    
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Daily" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />)}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order} />
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
            </div>
        );
    }
}

export default App;