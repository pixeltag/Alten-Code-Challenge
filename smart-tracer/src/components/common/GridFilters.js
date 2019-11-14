import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from 'react-select';
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
    formControl: {
        width:"100%",
    },
}));

function GridFilter(props) {

    const classes = useStyles();
    const { customers } = props || {};
    const { placeholder } = props || 'Select Customer'
        let options = [];
        customers.forEach(customer => {
            options.push({
                label : customer.name,
                value: customer._id
            })
        });

    const handleChange = selectedOption => {
        let selectedID = []
        if(selectedOption) {
            selectedID = selectedOption.map(selected => selected.value)
        }
        props.onSelect(selectedID);
    }
    return (
        <div>
            <FormControl className={classes.formControl}>
                {customers.length > 0 ? (
                        <Select
                                onChange={handleChange}
                                options={options}
                                placeholder={placeholder}
                                classNamePrefix="materialDD"
                                isMulti
                            />

                ) : (
                    <div>loading</div>
                ) }
            </FormControl>
        </div>
    );
}


GridFilter.propTypes = {
    customers : PropTypes.arrayOf(
        PropTypes.shape({
            _id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            address : PropTypes.string.isRequired,
        })
    ),
    onSelect : PropTypes.func,
    placeholder : PropTypes.string
}

export default  GridFilter;