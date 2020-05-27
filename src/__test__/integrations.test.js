import React from "react";
import moxios from "moxios";
import { mount } from "enzyme";
import Root from "Root";

import App from "components/App";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("http://dummy.restapiexample.com/api/v1/employees", {
    status: 200,
    response: { data: [{ employee_name: "Fetched #1" }, { employee_name: "Fetched #2" }] },
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("can fetch list of comments and display them", (done) => {
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  wrapped.find(".fetch-comments").simulate("click");
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find("li").length).toEqual(2);
    done();
    wrapped.unmount();
  });
});
