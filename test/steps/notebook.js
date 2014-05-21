/*
 *  Copyright 2014 TWO SIGMA OPEN SOURCE, LLC
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

module.exports = function() {
  this.When(/^I set the headline to "([^"]*)"$/, function(title) {
    return new this.Widgets.Notebook().setHeadline(title);
  });

  this.Then(/^I should see the headline "([^"]*)"$/, function(expectedTitle) {
    return new this.Widgets.Notebook().readHeadline().should.eventually.contain(expectedTitle);
  });

  this.Given(/^The "([^"]*)" editor is ready$/, function(editorName) {
    return new this.Widgets.CodeEditor({type: "evaluator-type"}).isReady();
  });
}


// this.Given(/^I evaluate The "([^"]*)" "([^"]*)"$/, function(arg1, arg2, callback) {
//   // express the regexp above with the code you wish you had
//   callback.pending();
// });

// this.Then(/^I should see the "([^"]*)" editor with the result "([^"]*)"$/, function(arg1, arg2, callback) {
//   // express the regexp above with the code you wish you had
//   callback.pending();
// });
