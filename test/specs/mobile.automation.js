describe("Open Application", () => {
  it("should open Hello World Activity", async () => {
    await $("//android.widget.TextView[@content-desc='App']").click();
    await $("//android.widget.TextView[@content-desc='Activity']").click();
    await $("//android.widget.TextView[@content-desc='Hello World']").click();
    await expect(
      $(
        "///android.widget.TextView[@content-desc='Hello World']"
      ).toHaveAttribute("text", "Hello World")
    );
  });
  it("should open Receive Result Activity", async () => {
    await $("//android.widget.TextView[@content-desc='App']").click();
    await $("//android.widget.TextView[@content-desc='Activity']").click();
    await $(
      "//android.widget.TextView[@content-desc='Receive Result']"
    ).click();
    await $("//android.widget.Button[@content-desc='Get Result']").click();
    await $("//android.widget.Button[@content-desc='Violet']").click();
    await expect(
      $(
        "/hierarchy/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.TextView[2]"
      ).toHaveAttribute("text", "(okay -1) Violet!")
    );
  });
  it("should open Read Assets", async () => {
    await $("//android.widget.TextView[@content-desc='Content']").click();
    await $("//android.widget.TextView[@content-desc='Assets']").click();
    await $("//android.widget.TextView[@content-desc='Read Asset']").click();
    await expect(
      $(
        "/hierarchy/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.TextView"
      ).toHaveAttribute(
        "text",
        "This text is stored in a raw Asset. It was read and placed into the TextView here."
      )
    );
  });
  it("should open Default Layout", async () => {
    await $("//android.widget.TextView[@content-desc='Content']").click();
    await $("//android.widget.TextView[@content-desc='Resources']").click();
    await $(
      "//android.widget.TextView[@content-desc='Layout Reference']"
    ).click();
    await expect(
      $(
        "//android.widget.TextView[@content-desc='Default layout']"
      ).toHaveAttribute("text", "Default layout")
    );
  });
  it("should open Style text", async () => {
    await $("//android.widget.TextView[@content-desc='Content']").click();
    await $("//android.widget.TextView[@content-desc='Resources']").click();
    await $("//android.widget.TextView[@content-desc='Styled Text']").click();
    await expect(
      $(
        "//android.widget.TextView[@content-desc='lain, bold, italic, bold-italic']"
      ).toHaveAttribute("text", "Plain, bold, italic, bold-italic")
    );
  });
});
