// JavaScript Document


function move(event) {
	"use strict";
    var k = event.keyCode,
        chrId = document.getElementById('moveupdown'),
        chr = {
            updown: function () {
                var y = parseInt(getComputedStyle(chrId).top);
                if (k === 38) {
                   if(y>0){
					y-=10;
					}
                } else if (k === 40) {
                    if(y<=210){
					y+=10;
					}
					console.log(y);
                }
                
                return y;
            },

            leftright: function () {
                var x = parseInt(getComputedStyle(chrId).left);
                if (k === 37) {
                    --x;
                } else if (k === 39) {
                    ++x;
                }
                
                return x;
            }
        };

    chrId.style.top = (chr.updown()) + "px";
    chrId.style.left = (chr.leftright()) + "px";
}

document.addEventListener('keydown', move);