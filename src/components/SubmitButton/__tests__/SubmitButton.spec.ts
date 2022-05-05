import { shallowMount } from "@vue/test-utils";
import SubmitButton from "../SubmitButton.vue";

describe("SubmitButton.vue", () => {
  const message = "Submit";

  const wrapperFactory = (props?: any) => {
    return shallowMount(SubmitButton, {
      propsData: {
        message,
        ...props,
      },
    });
  };

  it("Should render Not Authorized", () => {
    const wrapper = wrapperFactory();

    expect(wrapper.find("span").text()).toBe("Not Authorized");

    expect(wrapper.find("button").text()).toBe("Submit");
  });

  it("Should render Authorized", () => {
    const wrapper = wrapperFactory({ isAdmin: true });

    expect(wrapper.find("span").text()).toBe("Admin Privileges");
    expect(wrapper.find("button").text()).toBe("Submit");
  });
});
