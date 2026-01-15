import React, { useState, useEffect } from "react";
import "./PopupAd.css";

const PopupAd = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        // Check session storage
        const popupClosed = sessionStorage.getItem("popupClosed");
        
        // Show popup after delay if not closed
        if (!popupClosed) {
            const timer = setTimeout(() => {
                setShowPopup(true);
            }, 1000);
            
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setShowPopup(false);
        sessionStorage.setItem("popupClosed", "true");
    };

    const handleBackgroundClick = (event) => {
        if (event.currentTarget.id === "adModal") {
            handleClose();
        }
    };

    const handleBackgroundKeyDown = (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            handleClose();
        }
    };

    const handleCloseKeyDown = (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            handleClose();
        }
    };

    if (!showPopup) return null;

    return (
        <div
            id="adModal"
            className="popup-modal"
            onClick={handleBackgroundClick}
            onKeyDown={handleBackgroundKeyDown}
            role="button"
            tabIndex={0}
            aria-label="Close winter sale popup"
        >
            <div className="popup-content">
                <button
                    type="button"
                    className="popup-close-btn"
                    onClick={handleClose}
                    onKeyDown={handleCloseKeyDown}
                    aria-label="Close popup"
                >
                    ×
                </button>
                <img
                    src="/WinterResetAd.png"
                    alt="Winter Reset Sale - 20% Off"
                    className="popup-image"
                    onError={(event) => {
                        console.log("Image failed to load, showing fallback");
                        event.target.style.display = "none";
                        
                        const fallback = document.createElement("div");
                        fallback.className = "popup-fallback";
                        fallback.innerHTML = `
                            <h2>BIG WINTER RESET</h2>
                            <p class="popup-discount">20% OFF SALE</p>
                            <p class="popup-limited">LIMITED TIME ONLY!</p>
                            <p class="popup-terms">Conditions and terms apply</p>
                            <p class="popup-brand">dream™</p>
                        `;
                        event.target.parentNode.appendChild(fallback);
                    }}
                />
            </div>
        </div>
    );
};

export default PopupAd;
