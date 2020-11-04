import React from 'react';
import { Link, withRouter } from "react-router-dom";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

class MenuButton extends React.Component {
  state = {
    anchorEl: null
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const Wrapper = this.props.iconType;

    const notificationCount = () => {
      if(this.props.type === 'notification' && this.props.content.length >= 0) {
        return (<StyledBadge badgeContent={this.props.content.length} color="secondary">
        <Wrapper />
      </StyledBadge>)
      }
      else return <Wrapper />;
    }

    const listItems = () => {    
      if(this.props.type === 'profile') {
        return this.props.content.map((link) => <MenuItem key={link} 
        onClick={this.handleClose} ><Link to={link[1]}>{link[0]}</Link></MenuItem>);
      }
    }

    return (
      <div>
        <IconButton
          aria-owns={open ? 'menu-appbar' : null}
          aria-haspopup="true"
          onClick={this.handleMenu}
          color="inherit"
        >
          {notificationCount()}

        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={this.handleClose}
        >
        {listItems()}
        </Menu>
      </div>
    );
  }

}

export default withRouter(MenuButton);