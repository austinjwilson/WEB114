/* Author: Austin Wilson
 * Date: 11/08/2026
 * Project: Loops/Space Station
 */

"use strict";

// Starting count for total crates
let totalCrates = 0;

// for loop crates 1-20
for (let crate = 1; crate <= 20; crate++) {
	
    // divisible by 5 with no remainder
    if (crate % 5 === 0) {
        console.log("Crate" + crate + ": Handle with care");
    } 
    // if crate is even with no remainder
    else if (crate % 2 === 0) {
        console.log("Crate" + crate + ": Load crate");
    } 
    // if crate is odd
    else {
        console.log("Crate" + crate + ": Inspect crate");
    }

    // increment total crates scanned
    totalCrates++;
}
console.log(`Total crates scanned: ${totalCrates}`);