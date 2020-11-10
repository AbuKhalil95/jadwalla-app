import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { withSnackbar } from 'notistack';

// const styles = {
//     root: {
//         flexGrow: 1,
//         display: 'flex',
//         margin: 16,
//         justifyContent: 'center',
//         alignItems: 'middle',
//     },
//     button: {
//         margin: 8,
//         color: '#fff',
//         backgroundColor: '#313131',
//     },
//     success: {
//         backgroundColor: '#43a047',
//     },
//     error: {
//         backgroundColor: '#d32f2f',
//     },
//     info: {
//         backgroundColor: '#2979ff',
//     },
//     warning: {
//         backgroundColor: '#ffa000',
//     },
// };

const buttons = [
    { variant: 'success', message: 'Successfully done the operation.' },
    { variant: 'error', message: 'Something went wrong.' },
    { variant: 'warning', message: 'Be careful of what you just did!' },
    { variant: 'info', message: 'For your info...' },
];


class Notifications extends Component {
    

    // handleClickWithAction = () => {
    //     this.props.enqueueSnackbar('Customise this snackbar youself.', {
    //         variant: 'default',
    //         action: (
    //             <Button color="secondary" size="small" onClick={() => alert('clicked on my custom action')}>
    //                 My action
    //             </Button>
    //         ),
            
    //     });
    // };

    render() {
        return (
            <Paper >
                
                <Button
                    variant="contained"
                    onClick={this.handleClickWithAction}
                >
                    default
                </Button>
            </Paper>
        );
    }
}

export default withSnackbar(Notifications);
