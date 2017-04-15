/*
Brian Hart
4/14/17
CSE 154 AC
TA: Yen Lee
Creative Assignment 3 
This file contains a script to expand the description of the projects on the projects page.
*/

"use strict";

(function() {
    window.onload =function() {
        var open = false;
        document.getElementById("circleshelftitle").onclick = function() {
            if (!open){
                document.getElementById("description").style.height = "370px";
                open = true;
            } else if (open) {
                document.getElementById("description").style.height = "0px";
                open = false;
            }
        };    
    };
    
})();