import React, { Component } from "react";
import Itemcard from "./components/Itemcard";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import items from "./items.json"
// import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
    // Setting this.state.friends to the friends json array
    state = {
        items: items,
        score: 0,
        highscore: 0,
        clickedItems: items,
        unclickedItems: items
    };

    shuffleItems = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            let randoNum = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[randoNum]] = [arr[randoNum], arr[i]]
        }
    }

    doClick = (name) => {
        const checkItems = this.state.unclickedItems.find((item) => item.name === name);
        if (checkItems === undefined) {
            this.setState({
                highscore: this.state.score > this.state.highscore ? this.state.score : this.state.highscore,
                score: 0,
                unclickedItems: items
            })
        } else {
            const leftoverItems = this.state.unclickedItems.filter((item) => item.name !== name)
            this.setState({
                score: this.state.score + 1,
                unclickedItems: leftoverItems
            })
            this.shuffleItems(items);
        }

    }






    // Map over this.state.friends and render a FriendCard component for each friend object
    render() {
        return (
            <Wrapper>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 min-vh-100">

                            <Navbar
                                score={this.state.score}
                                highscore={this.state.highscore}
                            />
                            <main className="container">
                                <div className="row">

                                    {this.state.items.map(item => (
                                        <Itemcard
                                            // array = {items}
                                            id={item.id}
                                            key={item.id}
                                            name={item.name}
                                            image={item.image}
                                            doClick={this.doClick}
                                        />
                                    ))}
                                </div>
                            </main>

                        </div>
                    </div>
                </div>
            </Wrapper>
        );
    }
}

export default App;