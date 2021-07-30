import { shallowMount } from "@vue/test-utils";
import RadioSub from "@/components/RadioSub.vue";

describe("RadioSub.vue", () => {
  it("check the data has been rendered properly", () => {
    const wrapper = shallowMount(RadioSub, {
      data() {
        return {
          radioName: "",
        };
      },
    });

    expect(wrapper.find("h4").text()).toEqual("");
  });

  it("check the title is the same as the design", () => {
    const wrapper = shallowMount(RadioSub);

    expect(wrapper.find("h3").text()).toEqual("Subcomponents!");
  });

  it("Check the first option if it selected", async () => {
    const wrapper = shallowMount(RadioSub);
    const options = wrapper.find("select").findAll("option");

    await options.at(1).setSelected();

    expect(wrapper.find("option:checked").element.value).toBe("Red");
  });

  it("Check the input text if something written", async () => {
    const wrapper = shallowMount(RadioSub);
    const textInput = wrapper.find('input[type="text"]');
    await textInput.setValue("dad!");

    expect(wrapper.find('input[type="text"]').element.value).toBe("dad!");
  });

  it("Check the radio button is checked", async () => {
    const wrapper = shallowMount(RadioSub);
    const radioInput = wrapper.find('input[type="radio"]');

    await radioInput.setChecked();

    expect(radioInput.element.checked).toBeTruthy();
  });

  it("Check the checkbox is checked", async () => {
    const wrapper = shallowMount(RadioSub);
    const checkboxInput = wrapper.find('input[type="checkbox"]');

    await checkboxInput.setChecked();

    expect(checkboxInput.element.checked).toBeTruthy();
  });

  it("Check the date inpus is exist", () => {
    const wrapper = shallowMount(RadioSub);

    expect(wrapper.find('input[type="date"]').exists()).toBe(true);
  });
});
