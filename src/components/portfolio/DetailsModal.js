import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import InfoIcon from '@mui/icons-material/Info';
import classes from "./DetailsModal.module.css";
import { info } from "../../info/Info";


const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    fontSize: "16px"
};

const contentContainer = {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    heading: {
        marginBottom: "5px"
    },
    featureList: {
        marginLeft: "16px",
        listStyleType: "circle",
        listStylePosition: "outside",
    },
    // techItem: {
    //     border: "2px solid transparent",
    //     borderImage: "linear-gradient(to right, rgb(0,255,164), rgb(166,104,255))",
    //     borderImageSlice: 1,
    //     borderRadius: "6px",
    //     padding: "4px 5px"
    // }

}

const techStyle = {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap"
}


const ModalContent = ({ id, title, description, features, technologies }) => {

    return (
        <div style={contentContainer}>
            <div>

                <h3 style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: "5px" }}>{title}</h3>
                {description && <p dangerouslySetInnerHTML={{ __html: description }} style={{ lineHeight: "21px" }} />}
            </div>

            <div>
                <h3 style={contentContainer.heading}>Features</h3>
                <ul style={contentContainer.featureList}>
                    {features &&
                        features.map((feature, index) => <li key={index} style={{ marginBottom: "8px", lineHeight: "21px" }}>{feature}</li>)
                    }
                </ul>
            </div>

            <div>
                <h3 style={contentContainer.heading}>Technologies</h3>
                <ul style={techStyle} >
                    {technologies &&
                        technologies.map((tech, index) => <li key={index} className={classes.border}>{tech}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default function DetailsModal(props) {
    const { title, description, features, technologies } = props;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Box onClick={handleOpen} px={1} py={0.7} border={'2px solid black'} borderRadius="25px">
                <div className={classes.custom_btn}>
                    <InfoIcon />
                    <p>Overview</p>
                </div>
            </Box>
            {/* TODO: backdrop */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slotProps={{
                    backdrop: {
                        timeout: 500,
                        sx: {
                            backdropFilter: 'blur(15px)', // Apply blur effect
                            backgroundColor: 'rgba(255, 255, 255, 0.1)', // Transparent white background
                            border: '0px solid rgba(255, 255, 255, 0.18)' // Optional border for glass effect
                        }
                    }
                }}
            >
                <Fade in={open}>
                    <Box sx={style} className={classes.container} borderRadius="12px">
                        <ModalContent {...props} />
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}