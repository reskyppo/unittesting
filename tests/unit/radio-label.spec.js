import { shallowMount } from "@vue/test-utils";
import RadioLabel from "@/components/RadioLabel.vue";

describe("RadioLabel.vue", () => {
  it("check the data has been rendered properly", () => {
    const wrapper = shallowMount(RadioLabel, {
      data() {
        return {
          radioName: "",
        };
      },
    });

    expect(wrapper.find("h4").text()).toEqual("");
  });

  it("check the title is the same as the design", () => {
    const wrapper = shallowMount(RadioLabel);

    expect(wrapper.find("h3").text()).toEqual("Name");
  });
});
