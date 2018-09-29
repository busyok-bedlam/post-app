import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const SearchField = ({ filter, reset}) => {
    let input = null;
    const searchListener = e => {
        e.preventDefault();
        let value = input.value;
        value && filter(value);
        input.value = "";
        return;
    }
    
    const resetListener = e => {
        e.preventDefault();
        reset();
    }

    return (
        <div className="search-field">
            <Grid container spacing={24}>
                <Grid item container xs={4} spacing={24}>
                    <Grid item xs={6}>
                        <input ref={ node => input = node} placeholder="SEARCH"/>
                    </Grid>
                    <Grid item xs={6}>
                        <Button 
                            variant="outlined"
                            onClick={searchListener}
                        >
                        SEARCH
                        </Button>
                    </Grid>                  
                </Grid>
                <Grid item xs={4}>
                    <Button 
                        variant="outlined"
                        color="secondary"
                        onClick={resetListener}
                    >
                    RESET STATE
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}
export default SearchField;