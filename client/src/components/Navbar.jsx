import "./../styles/navbar.css";
import { useState, useEffect } from "react";
import { ClickAwayListener, Grow } from "@mui/material";
import { StyledPopper } from "./../components";

export default function Navbar() {
    // Logic on navbar scroll
    const [scrolled, setScrolled] = useState(false);

    const setScroll = () => {
        if (window.scrollY > 20) {
            setScrolled(true);
        } else {
            setScrolled(false);
        };
    };

    useEffect(() => {
        const logoHolder = document.querySelector(".logo-holder");
        const logoArrowDown = document.querySelector(".logo-arrow-down");
        window.addEventListener('scroll', setScroll);
        logoHolder.addEventListener('mouseenter', (e) => {logoArrowDown.classList.add("logo-arrow-down-hovered")});
        logoHolder.addEventListener('mouseleave', (e) => {logoArrowDown.classList.remove("logo-arrow-down-hovered")});
    }, []);

    const [logoPopperAnchorEl, setLogoPopperAnchorEl] = useState(null);
    const logoPopperOpen = Boolean(logoPopperAnchorEl);

    const handleLogoPopperToggle = (e) => {
        if (!logoPopperAnchorEl) {
            setLogoPopperAnchorEl(e.currentTarget);
        } else {
            setLogoPopperAnchorEl(null);
        };
    };

    const handleClickAwayLogo = () => {
        setLogoPopperAnchorEl(null);
    };

    return (
        <div className={"navbar " + (scrolled ? "scrolled" : null)} >
            <ClickAwayListener onClickAway={handleClickAwayLogo}>
                <div className="logo-holder">
                    <div className="logo" onClick={handleLogoPopperToggle}>
                        <p className={"logo-text color-themed " + (scrolled ? "scrolled" : null)}>
                            Planabite
                        </p>
                        <svg className={"logo-arrow-down color-themed " + (scrolled ? "scrolled" : null)} xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                        </svg>
                    </div>
                    <StyledPopper open={logoPopperOpen} anchorEl={logoPopperAnchorEl}
                    tabs={[{content: '1'}, {content: '2'}]} />
                </div>
            </ClickAwayListener>
            <div className="links-holder">
                <div className={"link account-link " + (scrolled ? "scrolled" : null)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                    </svg>
                </div>
                <div className={"link settings-link " + (scrolled ? "scrolled" : null)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};