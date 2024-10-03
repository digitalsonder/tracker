import { Popper } from "@mui/material";
import StyledPopperTab from "./StyledPopperTab.jsx";
import "./../styles/popper.css"
export default function StyledPopper({open, anchorEl, placement, tabs}) {
    return (
        <Popper className="styled-popper" open={open} anchorEl={anchorEl} placement={placement}>
            <StyledPopperTab content='gayballs sex' id={0} />
            <StyledPopperTab content='gayballs sex 2nd' id={1} />
        </Popper>
    );
};