/* Author: Austin Wilson
 * Date: 11/08/2026
 * Project: Loops/Space Station
 */

"use strict";

// Starting count for total crates, fragile crates, normal supplies, and unknown cargo Option Challenge #3
let totalCrates = 0;
let fragileCrates = 0;
let normalSupplies = 0;
let unkwownCargo = 0;

// for loop crates 1-20
for (let crate = 1; crate <= 20; crate++) {
	
    // divisible by 5 with no remainder
    if (crate % 5 === 0) {
        console.log("Crate " + crate + ": Handle with care");
        fragileCrates++;
    } 
    // if crate is even with no remainder
    else if (crate % 2 === 0) {
        console.log("Crate " + crate + ": Load crate");
        normalSupplies++;
    } 
    // if crate is odd
    else {
        console.log("Crate " + crate + ": Inspect crate");
        unkwownCargo++;
    }

    // increment total crates scanned
    totalCrates++;
}
console.log(`Total crates scanned: ${totalCrates}`);
console.log(`Number of fragile crates: ${fragileCrates}`);
console.log(`Number of loaded crates: ${normalSupplies}`);
console.log(`Number of inspected crates: ${unkwownCargo}`);