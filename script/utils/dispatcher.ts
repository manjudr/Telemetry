let libraryDispatcher = {
    dispatch: function(event:any) {
        if (typeof document != 'undefined') {
            //To Support for external user who ever lisenting on this 'TelemetryEvent' event.
            // IT  WORKS ONLY FOR CLIENT SIDE
            document.dispatchEvent(new CustomEvent('TelemetryEvent', {detail: event }));
        } else {
            console.info("Library dispatcher supports only for client side.");
        }
    }
};
export {libraryDispatcher}