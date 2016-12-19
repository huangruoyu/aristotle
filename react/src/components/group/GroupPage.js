import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as groupAction from '../../actions/groupAction';

class GroupPage extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {
      group: {title:""}
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event){
    const group = this.state.group;
    group.title = event.target.value;
    this.setState({group: group});
  }

  onClickSave(){
    //alert("new group "+ this.state.group.title +" saved !");

    this.props.createGroup(this.state.group);
  }

  groupRow(group, index){
    return <div key={index}>{group.title}</div>;

  }

  render(){
    return (
      <div className="jumbotron">
        <h1>Study Group</h1>
        {this.props.groups.map(this.groupRow)}

        <p>Create new study group</p>
        <p>{this.state.group.title}</p>
        <input type="text" onChange={this.onTitleChange} value={this.state.group.title}/>
        <input type="submit" onClick={this.onClickSave} value="Create"/>
      </div>
    );
  }
}

GroupPage.propTypes = {
  groups: React.PropTypes.array.isRequired,
  createGroup: React.PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps){
  return{
    groups: state.groupReducer
  };
}

function mapDispatchToProps(dispatch){
  return {
    createGroup: (group) => dispatch(groupAction.createGroup(group))
  };

}

export default connect(mapStateToProps, mapDispatchToProps)(GroupPage);
