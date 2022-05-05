import { shallowMount } from "@vue/test-utils";
import NumberRender from "../NumberRender.vue";

describe("NumberRender.vue", () => {
  it("Should render even number", () => {
    const wrapper = shallowMount(NumberRender, {
      props: {
        even: true,
      },
    });

    expect(wrapper.vm.setEvenNumber).toBe("2, 4, 6, 8");
  });

  it("Should render not even number", () => {
    const wrapper = shallowMount(NumberRender, {
      props: {
        even: false,
      },
    });

    expect(wrapper.vm.setEvenNumber).toBe("1, 3, 5, 7, 9");
  });
});
