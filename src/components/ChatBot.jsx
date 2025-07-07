import { useEffect } from "react";

const ChatBot = () => {
	const propertyId = import.meta.env.VITE_TAWKTO_PROPERTY_ID;
	const widgetId = import.meta.env.VITE_TAWKTO_WIDGET_ID;

	useEffect(() => {
		if (!propertyId || !widgetId) return;
		if (document.getElementById("tawkto-script")) return;

		const script = document.createElement("script");
		script.id = "tawkto-script";
		script.async = true;
		script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
		script.charset = "UTF-8";
		script.setAttribute("crossorigin", "*");
		document.body.appendChild(script);

		// Optional cleanup:
		// return () => {
		//   script.remove();
		//   const tawkIframe = document.querySelector("iframe[title='chat widget']");
		//   if (tawkIframe) tawkIframe.remove();
		// };
	}, [propertyId, widgetId]);

	return null;
};

export default ChatBot;
