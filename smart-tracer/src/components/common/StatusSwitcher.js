import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import PropTypes from 'prop-types'

function StatusSwitcher(props) {

    const [state, setState] = React.useState(false);
        const { switchLabel } = props || "Status";
      const handleChange = event => {
          let switcher = !state;
          setState(switcher);
          props.onSwitch(switcher);
      };

    return (
    <FormControl component="fieldset">
        <FormControlLabel
          control={<Switch checked={state} onChange={handleChange} value={state} />}
          label={switchLabel}
        />
    </FormControl>
    )
}

StatusSwitcher.propTypes = {
  onSwitch : PropTypes.func.isRequired,
  switchLabel : PropTypes.string.isRequired
}

export default StatusSwitcher
