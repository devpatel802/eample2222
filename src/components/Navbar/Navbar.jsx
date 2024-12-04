import { useState, useEffect, useRef } from "react";
import Group from "../../assets/Group.svg";
import menu from "../../assets/menu.svg";
import cross from "../../assets/cross.svg";
import down from "../../assets/chevron-down.svg";
import right from "../../assets/chevron-right.svg";
import style from "./navbar.module.css";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAddOpen, setIsAddOpen] = useState(true); // Initially open
    const [isSettingsOpen, setIsSettingsOpen] = useState(false); // Initially closed

    const navRef = useRef(null); // Reference for the navbar

    // Function to check if the current time is in Thai time and if the page should load with Add open
    const isThaiTime = () => {
        const thailandTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Bangkok" });
        const thailandDate = new Date(thailandTime);
        const hours = thailandDate.getHours();
        return hours >= 9 && hours < 18; // Example: Open Add if time is between 9 AM and 6 PM Thai time
    };

    // Toggle Add section
    const toggleAdd = () => {
        setIsAddOpen((prev) => !prev); // Toggle Add
        setIsSettingsOpen(false); // Close Settings
    };

    // Toggle Settings section
    const toggleSettings = () => {
        setIsSettingsOpen(true); // Open Settings
        setIsAddOpen(false); // Close Add
    };

    // Toggle Menu
    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    // Effect to set initial state based on Thai time
    useEffect(() => {
        if (isThaiTime()) {
            setIsAddOpen(true); // Open Add when loaded in Thai time
        }
    }, []);

    // Close the menu when clicking outside the navbar
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsMenuOpen(false); // Close menu if clicked outside
            }
        };

        // Attach the event listener
        document.addEventListener("mousedown", handleClickOutside);

        // Clean up the event listener
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav ref={navRef}>
            <div className={style.left}>
                <img src={Group} alt="group logo" />
                <h3 className={style.logo}>Lease Pixie</h3>
            </div>
            <div className={style.right}>
                <img
                    src={isMenuOpen ? cross : menu}
                    alt={isMenuOpen ? "cross menu" : "menu"}
                    onClick={toggleMenu}
                />
            </div>

            {isMenuOpen && (
                <div className={style.menu}>
                    {/* Mobile Menu */}
                    <div className={style.mobilemenu}>
                        <div className={style.left}>
                            <img src={Group} alt="group logo" />
                            <h3 className={style.logo}>Lease Pixie</h3>
                        </div>
                        <div className={style.right}>
                            <img
                                src={isMenuOpen ? cross : menu}
                                alt={isMenuOpen ? "cross menu" : "menu"}
                                onClick={toggleMenu}
                            />
                        </div>
                    </div>

                    <dl>
                        {/* Add Section */}
                        <dt onClick={toggleAdd} className={style.menuTerm}>
                            Add{" "}
                            <img
                                src={isAddOpen ? down : right}
                                alt="toggle"
                                className={style.chevronIcon}
                            />
                        </dt>
                        {isAddOpen && (
                            <>
                                <dd>User</dd>
                                <dd>Property</dd>
                                <dd>Portfolio</dd>
                            </>
                        )}

                        {/* Settings Section */}
                        <dt onClick={toggleSettings} className={style.menuTerm}>
                            Settings{" "}
                            <img
                                src={isSettingsOpen ? down : right}
                                alt="toggle"
                                className={style.chevronIcon}
                            />
                        </dt>
                        {isSettingsOpen && (
                            <>
                                <dd>User</dd>
                                <dd>Portfolio</dd>
                            </>
                        )}

<div className={style.signOut} style={{marginTop:'32px'}}>Sign out</div>

                    </dl>

                    
                </div>
            )}
        </nav>
    );
}

export default Navbar;
