import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next';

function StatusSwitcher(props) {
    const { t } = useTranslation();
    const [state, setState] = React.useState(false);
        const { switchLabel } = props || t("status");
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
