import { Popper } from "@mui/material";
import StyledPopperTab from "./StyledPopperTab.jsx";
import "./../styles/popper.css"
export default function StyledPopper({open, anchorEl, placement, tabs}) {
    return (
        <Popper className="styled-popper" open={open} anchorEl={anchorEl} placement={placement}>
            {tabs.map((tab, i) => (
                <StyledPopperTab key={i} content={tab.content} />
            ))}
        </Popper>
    );
};