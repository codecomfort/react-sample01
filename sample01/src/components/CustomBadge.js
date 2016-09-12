
import React, { Component } from 'react';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

class CustomBadge extends Component {
  render() {
    return (
          <Badge
            badgeContent={ this.props.badgeContent }
            primary={true}
          >
            <NotificationsIcon />
          </Badge>
    )
  }
}

export default CustomBadge
