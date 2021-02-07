function findMatching(drivers, testString) {
   return drivers.filter(driver => driver.includes(testString))
}


function fuzzyMatch(drivers, testString) {
   return drivers.filter(driver => driver.startsWith(testString))
}


function matchName(drivers, testString) {
    return drivers.filter(driver => driver.name === testString)
}