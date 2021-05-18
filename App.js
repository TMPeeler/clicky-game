import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
    // Setting this.state.friends to the friends json array
    state = {
      items: items
    };
  
    removeFriend = id => {
      // Filter this.state.friends for friends with an id not equal to the id being removed
      const friends = this.state.friends.filter(friend => friend.id !== id);
      // Set this.state.friends equal to the new friends array
      this.setState({ friends: friends });
    };
  
    // Map over this.state.friends and render a FriendCard component for each friend object
    render() {
      return (
        
          {this.state.items.map(item => (
            <ItemCard
              id={item.id}
              key={item.id}
              name={item.name}
              image={item.image}
            />
          ))}
      );
    }
  }
  
  export default App;