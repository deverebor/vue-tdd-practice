import { shallowMount } from "@vue/test-utils";
import HomeGreetings from "../HomeGreetings.vue";

describe("HomeGreetings.vue", () => {
  it("renders a greeting", () => {
    const wrapper = shallowMount(HomeGreetings);

    expect(wrapper.text()).toMatch("Vue and TDD");
  });
});
