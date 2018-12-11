import { shallowMount } from "@vue/test-utils";
import Greeting from "@/components/Greeting.vue";

describe("Greeting.vue", () => {
  it("renders a greeting", () => {
    const wrapper = shallowMount(Greeting);
    expect(wrapper.text()).toMatch("Vue and TDD");
  });
});
