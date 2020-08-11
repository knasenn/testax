/**
 * Test for getting started with Selenium.
 */
// "use strict";
//
//
//
// var webdriver = require("selenium-webdriver");
// var browser = new webdriver.Builder().
//     withCapabilities(webdriver.Capabilities.firefox())
//     .build();
//
// browser.get("http://localhost:3000/");
//
// // Two different ways to work with promises
// // Way 1
// let promise = browser.getTitle();
//
// promise.then(function(title) {
//     console.log(title);
// });
//
// // Way 2
// browser.getTitle().then(function( title ) {
//     console.log(title);
// });
//
// browser.quit();

"use strict";



const assert = require("assert");
const test = require("selenium-webdriver/testing");
const webdriver = require("selenium-webdriver");
const By = require("selenium-webdriver").By;

let browser;

// Test Suite
test.describe("Multipage", function() {

    test.beforeEach(function(done) {
        this.timeout(200000);
        browser = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.firefox()).build();

        browser.get("http://localhost:3000/");
        done();
    });

    test.afterEach(function(done) {
        browser.quit();
        done();
    });

    // Test case
    test.it("Test index", function(done) {
        // Check correct title
        browser.getTitle().then(function(title) {
            console.log("--");
            console.log(title);
            console.log("--");
            assert.equal(title, "React App");
        });

        // // Check correct heading
        // browser.findElement(By.css("h1")).then(function(element) {
        //     element.getText().then(function(text) {
        //         assert.equal(text, "Home");
        //     });
        // });
        //
        // // Check correct URL ending
        // browser.getCurrentUrl().then(function(url) {
        //     assert.ok(url.endsWith("multipage/#!/"));
        // });

        done();
    });


    //
    // test.it("Test go to Home", function(done) {
    //     // Use nav link to go to home page
    //     browser.findElement(By.linkText("Home")).then(function(element) {
    //         element.click();
    //     });
    //
    //     // Check correct heading
    //     browser.findElement(By.css("h1")).then(function(element) {
    //         element.getText().then(function(text) {
    //             assert.equal(text, "Home");
    //         });
    //     });
    //
    //     // Check correct URL ending
    //     browser.getCurrentUrl().then(function(url) {
    //         assert.ok(url.endsWith("multipage/#!/"));
    //     });
    //
    //     done();
    // });
});
