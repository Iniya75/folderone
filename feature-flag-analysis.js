const FEATURE_FLAGS = {
    showWelcome: true,
    darkMode: true,
    newDashboard: true,
    oldReport: false,
    betaSearch: false,
    discountBanner: true
};

function welcome(name) {
    if (FEATURE_FLAGS.showWelcome) {
        console.log("Welcome, " + name);
    }
}

function enableDarkMode() {
    if (FEATURE_FLAGS.darkMode) {
        console.log("Dark mode enabled");
    }
}

function showDashboard() {
    if (FEATURE_FLAGS.newDashboard) {
        console.log("Showing new dashboard");
        showSummary();
    }
}

function showSummary() {
    console.log("You have 5 tasks remaining");
}

// Old report feature
function showOldReport() {
    if (FEATURE_FLAGS.oldReport) {
        console.log("Showing old report");
        generateOldReport();
    }
}

function generateOldReport() {
    console.log("Generating old report");
}

// Beta search feature
function betaSearch(query) {
    if (FEATURE_FLAGS.betaSearch) {
        console.log("Searching for " + query);
        return performSearch(query);
    }
    return [];
}

function performSearch(query) {
    console.log("Search completed for " + query);
    return ["Result 1", "Result 2"];
}

// Discount feature
function showDiscount() {
    if (FEATURE_FLAGS.discountBanner) {
        console.log("Get 10% discount today!");
    }
}

function calculateTotal(price, quantity) {
    return price * quantity;
}

function logActivity(message) {
    console.log("Activity: " + message);
}

// Main program
function main() {
    welcome("Anu");
    enableDarkMode();
    showDashboard();
    showDiscount();

    betaSearch("JavaScript");
    logActivity("User opened dashboard");

    console.log("Total:", calculateTotal(100, 2));
}

main();