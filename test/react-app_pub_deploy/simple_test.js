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
test.describe("React App tests", function() {

    test.beforeEach(function(done) {
        this.timeout(20000);
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
    test.it("Start-page", function(done) {
        // Check correct title
        this.timeout(20000);
        browser.getTitle().then(function(title) {
            assert.equal(title, "React App");
        });

        // Check correct heading
        browser.findElement(By.css("h3")).then(function(element) {
            element.getText().then(function(text) {
                assert.equal(text, "Me");
            });
        });

        // Check correct URL ending
        browser.getCurrentUrl().then(function(url) {
            assert.ok(url.endsWith("/"));
        });

        done();
    });


    test.it("Test week 1", function(done) {
        // Use nav link to go to home page
        browser.findElement(By.linkText("Kmom01")).then(function(element) {
            element.click();
        });

        this.timeout(20000);
        browser.getTitle().then(function(title) {
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
});
