import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

export default function Modal({onDelete,todo}) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button style={{
                border: "none",
                background: "transparent",
                paddingTop: "35px",
                fontSize: "18px",
                cursor: "pointer"
            }}
                    onClick={handleClickOpen}>
                X
            </button>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle style={{
                    fontWeight: "600",
                    fontSize: "20px",
                    color: "#008594",
                    marginTop: "30px"
                }}
                             id="alert-dialog-title">
                    {"Are you sure you want to delete?"}
                </DialogTitle>
                <DialogActions style={{
                    display: "flex",
                    justifyContent: "center",
                    fontWeight: "700",
                    padding: "40px"
                }}>
                    <button style={{
                        border: "none",
                        background: "transparent",
                        fontSize: "20px",
                        fontWeight: "600",
                        cursor: "pointer"
                    }}
                            onClick={() => onDelete(todo)} autoFocus>
                        Yes
                    </button>
                    <button style={{
                        border: "none",
                        background: "transparent",
                        fontSize: "20px",
                        fontWeight: "600",
                        cursor: "pointer"
                    }}
                            onClick={handleClose}>
                        No
                    </button>
                </DialogActions>
            </Dialog>
        </div>
    );
}