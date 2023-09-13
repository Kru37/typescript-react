import React, { Component } from 'react'

interface User {
    name: string;
    age:number;
}


interface UserSearchProps {
    users: User[]
}

interface UserSearchState{
    name:string;
    user: User | undefined;
}


class UserSearch extends Component<UserSearchProps> {
state: UserSearchState = {
    name: '',
    user: undefined
}
findUser() {
    const data = this.props.users.find((item) => item.name === this.state.name)
    this.setState({name:'' , user: data})
}
  render() {
    return (
        <div>
        <h3>User Search</h3>
        <input type="text" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} />
        <button onClick={this.findUser.bind(this)}>Find</button>
        <div>
            {
            this.state.user === undefined ? 
            <p>Not Found</p>
            : <div>
                <p>name : {this.state.user.name} age: {this.state.user.age}</p>
                

                </div>
            }
        </div>
    </div>
    )
  }
}

export default UserSearch