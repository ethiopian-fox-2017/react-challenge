import React, {Component} from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    };

    searchChange(keyword) {
        this.setState({search: keyword})
    }

    search(e) {
        e.preventDefault()
       this.props.sayhallo()
    }
    render() {
        return (
            <div>
                <div style={{
                    height: '50px',
                    marginLeft: '100px'
                }}>
                    <form style={{
                        marginTop: '10px'
                    }}>
                        <div className='columns'>
                            <div className="column is-2">
                                <input type="text" className='input' name="search" value={this.state.search} onChange={(e) => this.searchChange(e.target.value)}/>
                            </div>
                            <div className="column is-1">
                                <input type="submit" className='button' onClick={(e) => this.search(e)}/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}

export default Search;
