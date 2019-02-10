import React from 'react';
import {ButtonDropdown, ButtonGroup, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import Button from '@material-ui/core/Button';

class NestedButtonGroup extends React.Component {
  toggle = () => {
    this.setState({
      dropDownOpen: !this.state.dropDownOpen
    })
  };

  constructor() {
    super();
    this.state = {
      dropDownOpen: false
    };
  }

  render() {
    return (
      <ButtonGroup vertical={this.props.isVertical}>
        <ButtonDropdown isOpen={this.state.dropDownOpen} toggle={this.toggle}>
          <DropdownToggle className="jr-btn border-0 no-shadow bg-primary text-white" caret>
            Rearrange
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Hard</DropdownItem>
            <DropdownItem>Soft</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </ButtonGroup>
    );
  };
}

export default NestedButtonGroup;