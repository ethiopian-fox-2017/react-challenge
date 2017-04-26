import React, {Component} from 'react';
import {connect} from 'react-redux';
import FormAddUser from './formAddUser';
import {deleteUser} from '../../actions'

class ListUser extends Component {
    render() {
        return (
            <div>
                <div name='show-user' style={{
                    marginTop: '40px',
                    marginLeft: '100px',
                    marginRight: '100px'
                }}>
                    <table className="table is-bordered is-narrow" style={{
                        borderColor: 'black'
                    }}>
                        <thead>
                            <tr style={{
                                backgroundColor: '#62c8d6',
                                color: 'white'
                            }}>
                                <th style={{
                                    color: 'white',
                                    width: '50px'
                                }}>
                                    <abbr title="id">id</abbr>
                                </th>
                                <th style={{
                                    color: 'white'
                                }}>
                                    <abbr title="name">name</abbr>
                                </th>
                                <th style={{
                                    color: 'white'
                                }}>
                                    <abbr title="email">email</abbr>
                                </th>
                                <th style={{
                                    color: 'white'
                                }}>
                                    <abbr title="email">Actions</abbr>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.users.map((user) => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.id}
                                        </td>
                                        <td>{user.name}</td>
                                        <td>{user.email}
                                        </td>
                                        <td> <a className="button is-primary" style={{marginRight:'10px'}}>edit</a>
                                         <a className="button is-primary"
                                           onClick={()=>this.props.deleteUser(user.id)} >delete</a>
                                        </td>
                                    </tr>
                                )
                            })}
                            <tr></tr>
                        </tbody>
                    </table>
                    <FormAddUser />
                </div>

            </div>
        )
    }
}
const mapStateToProps = state => ({users: state.users})
const mapDispatchToProps = dispatch =>({
  deleteUser:(id)=>dispatch(deleteUser(id))
})
export default connect(mapStateToProps,mapDispatchToProps)(ListUser)
