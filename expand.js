/*
Brian Hart
4/25/17
CSE 154 AC
TA: Yen Lee
Creative Assignment 4 
This file contains a script to expand the description of the projects on the projects page.
*/

(function() {
    "use strict";
    window.onload =function() {
        
        var open = false;

        document.getElementById("CC-button").onclick = expand;
        
        ('.collapse').collapse()
        function expand() {
            if (!open) {
                document.getElementById("description").style.height = "370px";
                open = true;
            } else if (open) {
                document.getElementById("description").style.height = "0px";
                open = false;
            }    
        }
    };
});
    
})();