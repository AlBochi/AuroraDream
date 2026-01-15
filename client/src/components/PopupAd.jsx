import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";
import "./PopupAd.css";

const PopupAd = () => {
	const [showPopup, setShowPopup] = useState(false);
	const [location] = useLocation(); // This will change when route changes

	useEffect(() => {
		// Show popup when route changes (including page refresh)
		const timer = setTimeout(() => {
			setShowPopup(true);
		}, 500); // Slight delay for better UX

		return () => clearTimeout(timer);
	}, [location]); // This effect runs every time the route changes

	const handleClose = () => {
		setShowPopup(false);
	};

	const handleBackgroundClick = (event) => {
		if (event.currentTarget === event.target) {
			handleClose();
		}
	};

	if (!showPopup) return null;

	return (
		<div className="popup-modal" onClick={handleBackgroundClick}>
			<div className="popup-content">
				<button
					type="button"
					className="popup-close-btn"
					onClick={handleClose}
					aria-label="Close winter sale popup"
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
