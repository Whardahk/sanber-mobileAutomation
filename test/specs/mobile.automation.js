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
});
