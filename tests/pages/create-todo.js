import { create, visitable, clickable, fillable } from "ember-cli-page-object";

const createObject = {
  /*
 visit('/');
    await click('[data-test-id="home-second-tab"] a');
    await fillIn('#todo-name', 'Test');
    await fillIn('#todo-description', 'Test description');
    await click('.btn-primary');
 */

  visitMainPage: visitable("/"),

  clickCreateTab: clickable('[data-test-id="home-second-tab"] a'),
  fillNameField: fillable("#todo-name"),

  fillDescriptionField: fillable("#todo-description"),
  clickSubmitButton: clickable(".btn-primary")
};

export default create(createObject);
